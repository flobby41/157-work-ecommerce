export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  sizes: string[];
  isOnSale?: boolean;
  discount?: number;
  category: string;
  description?: string;
  slug?: string;
}

export interface Category {
  id: string;
  name: string;
  isActive?: boolean;
  uri?: string;
  parent_id?: string;
}

export interface PromoOffer {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  image: string;
  isLimitedEdition?: boolean;
}

// Enad API specific interfaces
export interface EnadProduct {
  id: string;
  product_name: string;
  product_number: string;
  slug: string;
  is_active: boolean;
  html_description: string;
  categories: EnadCategory[];
  variants: EnadVariant[];
  images: EnadImage[];
  rank: number;
}

export interface EnadVariant {
  variant_name: string;
  variant_number: string;
  description: string;
  id: string;
  is_active: boolean;
  image_url: string;
  prices: EnadPrice[];
  inventories: EnadInventory[];
  attributes: {
    gender?: EnadAttribute[];
    color?: EnadAttribute[];
    size?: EnadAttribute[];
  };
}

export interface EnadPrice {
  markets: EnadMarket[];
  store_group_slug: string;
}

export interface EnadMarket {
  market_slug: string;
  country_code: string;
  base_price_amount: number;
  sale_price_amount: number;
  currency: string;
  on_sale: boolean;
}

export interface EnadCategory {
  id: string;
  name: string;
  full_path_name: string[];
  uri: string;
  parent_id: string | null;
}

export interface EnadImage {
  url: string;
  alt: string;
  sort: number;
  blurhash: string;
}

export interface EnadAttribute {
  id: string;
  key: string;
  name: string;
  description: string;
  values: Record<string, unknown>;
}

export interface EnadInventory {
  quantity: number;
  warehouse: {
    name: string;
  };
}

export interface EnadApiResponse {
  data: EnadProduct[];
  meta: {
    pagination: {
      current_page: number;
      per_page: number;
      total: number;
      total_pages: number;
    };
  };
}

export interface EnadFacetResponse {
  data: {
    attributes: {
      color?: EnadAttribute[];
      size?: EnadAttribute[];
      [key: string]: EnadAttribute[] | undefined;
    };
    price: {
      min: number;
      max: number;
    };
    variant_names: string[];
  };
}

export interface FilterOptions {
  colors: { id: string; name: string; key: string }[];
  sizes: { id: string; name: string; key: string }[];
  priceRange: { min: number; max: number };
}