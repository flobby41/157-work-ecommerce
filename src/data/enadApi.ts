import { 
  Product, 
  Category, 
  EnadApiResponse, 
  EnadFacetResponse, 
  EnadProduct, 
  EnadVariant,
  FilterOptions 
} from '@/types';

class EnadApiService {
  private baseUrl = '/api/enad'; // Use our Next.js API routes

  /**
   * Fetch products from Enad API via Next.js proxy
   */
  async fetchProducts(
    category?: string,
    page: number = 1,
    perPage: number = 20
  ): Promise<{ products: Product[]; totalPages: number; currentPage: number }> {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        per_page: perPage.toString(),
      });

      if (category) {
        params.append('category', category);
      }

      const response = await fetch(`${this.baseUrl}/products?${params}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      const data: EnadApiResponse = await response.json();
      
      // Handle case where API response might not have expected structure
      if (!data || !data.data || !Array.isArray(data.data)) {
        console.warn('Unexpected API response structure:', data);
        return {
          products: [],
          totalPages: 1,
          currentPage: 1,
        };
      }

      const products = data.data.map(this.transformEnadProductToProduct);
      
      // Safely access pagination data with fallbacks
      const pagination = data.meta?.pagination || {};
      
      return {
        products,
        totalPages: pagination.total_pages || 1,
        currentPage: pagination.current_page || page,
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  /**
   * Fetch available filters/facets for products via Next.js proxy
   */
  async fetchFilters(categoryIds?: string[]): Promise<FilterOptions> {
    try {
      const params = new URLSearchParams({});
      
      if (categoryIds && categoryIds.length > 0) {
        params.append('category_ids', categoryIds.join(','));
      }

      const response = await fetch(`${this.baseUrl}/filters?${params}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch filters: ${response.statusText}`);
      }

      const data: EnadFacetResponse = await response.json();
      
      return this.transformFacetsToFilterOptions(data);
    } catch (error) {
      console.error('Error fetching filters:', error);
      return {
        colors: [],
        sizes: [],
        priceRange: { min: 0, max: 10000 }
      };
    }
  }

  /**
   * Transform Enad product to our Product interface
   */
  private transformEnadProductToProduct = (enadProduct: EnadProduct): Product => {
    try {
      // Get the first active variant or first variant
      const activeVariant = enadProduct.variants?.find(v => v.is_active) || enadProduct.variants?.[0];
      
      if (!activeVariant) {
        console.warn(`No variants found for product ${enadProduct.id}`);
        // Return a basic product structure with available data
        return {
          id: enadProduct.id || 'unknown',
          name: enadProduct.product_name || 'Unknown Product',
          price: 0,
          image: enadProduct.images?.[0]?.url || '',
          colors: [],
          sizes: [],
          category: 'uncategorized',
        };
      }

      // Extract pricing from the variant with safe access
      const swedishMarket = activeVariant.prices?.[0]?.markets?.find(
        m => m.market_slug === 'sweden'
      );

      const basePrice = swedishMarket ? (swedishMarket.base_price_amount || 0) / 100 : 0;
      const salePrice = swedishMarket ? (swedishMarket.sale_price_amount || 0) / 100 : 0;
      const isOnSale = swedishMarket?.on_sale || false;

      // Extract colors from all variants
      const colors = this.extractUniqueAttributes(enadProduct.variants || [], 'color');
      
      // Extract sizes from all variants
      const sizes = this.extractVariantNames(enadProduct.variants || []);

      // Use product image or variant image
      const image = enadProduct.images?.[0]?.url || activeVariant.image_url || '';

      // Extract category
      const mainCategory = enadProduct.categories?.[0];
      const category = mainCategory?.uri || 'uncategorized';

      return {
        id: enadProduct.id,
        name: enadProduct.product_name,
        price: isOnSale ? salePrice : basePrice,
        originalPrice: isOnSale ? basePrice : undefined,
        image,
        colors,
        sizes,
        isOnSale,
        discount: isOnSale && basePrice > 0 ? Math.round(((basePrice - salePrice) / basePrice) * 100) : undefined,
        category,
        description: enadProduct.html_description,
        slug: enadProduct.slug,
      };
    } catch (error) {
      console.error('Error transforming product:', error, enadProduct);
      // Return a fallback product
      return {
        id: enadProduct.id || 'error',
        name: enadProduct.product_name || 'Error Loading Product',
        price: 0,
        image: '',
        colors: [],
        sizes: [],
        category: 'error',
      };
    }
  };

  /**
   * Extract unique attribute values from variants
   */
  private extractUniqueAttributes(variants: EnadVariant[], attributeType: string): string[] {
    const attributes = new Set<string>();
    
    variants.forEach(variant => {
      const attrs = variant.attributes[attributeType as keyof typeof variant.attributes];
      if (attrs && Array.isArray(attrs)) {
        attrs.forEach(attr => {
          if (attr.key) {
            attributes.add(attr.key);
          }
        });
      }
    });

    return Array.from(attributes);
  }

  /**
   * Extract variant names (typically sizes) from variants
   */
  private extractVariantNames(variants: EnadVariant[]): string[] {
    return variants
      .map(variant => variant.variant_name)
      .filter(name => name && name.trim() !== '')
      .filter((name, index, array) => array.indexOf(name) === index); // Remove duplicates
  }

  /**
   * Transform facets response to filter options
   */
  private transformFacetsToFilterOptions(facetResponse: EnadFacetResponse): FilterOptions {
    const { attributes, price } = facetResponse.data;

    const colors = attributes.color?.map(color => ({
      id: color.id,
      name: color.name,
      key: color.key,
    })) || [];

    const sizes = attributes.size?.map(size => ({
      id: size.id,
      name: size.name,
      key: size.key,
    })) || [];

    return {
      colors,
      sizes,
      priceRange: {
        min: price?.min || 0,
        max: price?.max || 10000,
      },
    };
  }

  /**
   * Get categories from products (simplified approach)
   */
  async fetchCategories(): Promise<Category[]> {
    try {
      // Fetch a sample of products to extract categories
      const { products } = await this.fetchProducts(undefined, 1, 50);
      
      const categoryMap = new Map<string, Category>();
      
      products.forEach(product => {
        if (!categoryMap.has(product.category)) {
          categoryMap.set(product.category, {
            id: product.category,
            name: this.formatCategoryName(product.category),
            isActive: false,
          });
        }
      });

      // Add "all categories" option
      const categories: Category[] = [
        { id: 'all', name: 'ALLA KATEGORIER', isActive: true },
        ...Array.from(categoryMap.values()),
      ];

      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [{ id: 'all', name: 'ALLA KATEGORIER', isActive: true }];
    }
  }

  /**
   * Format category name for display
   */
  private formatCategoryName(categoryUri: string): string {
    return categoryUri
      .split('/')
      .pop()
      ?.toUpperCase()
      .replace(/-/g, ' ') || 'UNKNOWN';
  }
}

// Export singleton instance
export const enadApiService = new EnadApiService();

// Export the class for potential customization
export { EnadApiService };