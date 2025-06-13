'use client';

import { useState, useEffect, useCallback } from 'react';
import { Product, Category, FilterOptions } from '@/types';
import { enadApiService } from '@/data/enadApi';
import { products as mockProducts, categories as mockCategories } from '@/data/mockData';

interface UseEnadProductsOptions {
  category?: string;
  initialPage?: number;
  perPage?: number;
}

interface UseEnadProductsReturn {
  products: Product[];
  categories: Category[];
  filters: FilterOptions;
  loading: boolean;
  error: string | null;
  usingMockData: boolean;
  pagination: {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  actions: {
    fetchProducts: (category?: string, page?: number) => Promise<void>;
    fetchCategories: () => Promise<void>;
    fetchFilters: (categoryIds?: string[]) => Promise<void>;
    setCategory: (category: string) => void;
    nextPage: () => void;
    prevPage: () => void;
    goToPage: (page: number) => void;
  };
}

export const useEnadProducts = (options: UseEnadProductsOptions = {}): UseEnadProductsReturn => {
  const { category: initialCategory, initialPage = 1, perPage = 20 } = options;

  // State
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    colors: [],
    sizes: [],
    priceRange: { min: 0, max: 10000 }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usingMockData, setUsingMockData] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(initialCategory);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  // Fallback to mock data
  const useMockData = useCallback((category?: string) => {
    console.warn('Falling back to mock data');
    setUsingMockData(true);
    
    const filteredMockProducts = category && category !== 'all' 
      ? mockProducts.filter(p => p.category === category)
      : mockProducts;
    
    setProducts(filteredMockProducts);
    setCategories(mockCategories);
    setCurrentPage(1);
    setTotalPages(1);
    setError(null);
  }, []);

  // Fetch products
  const fetchProducts = useCallback(async (category?: string, page: number = currentPage) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await enadApiService.fetchProducts(
        category === 'all' ? undefined : category,
        page,
        perPage
      );
      
      if (result.products.length === 0 && page === 1) {
        // If no products found on first page, use mock data
        useMockData(category);
      } else {
        setProducts(result.products);
        setCurrentPage(result.currentPage);
        setTotalPages(result.totalPages);
        setUsingMockData(false);
      }
      
      if (category !== undefined) {
        setCurrentCategory(category);
      }
    } catch (err) {
      console.error('Error fetching products, using mock data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      useMockData(category);
    } finally {
      setLoading(false);
    }
  }, [currentPage, perPage, useMockData]);

  // Fetch categories
  const fetchCategories = useCallback(async () => {
    try {
      const result = await enadApiService.fetchCategories();
      if (result.length > 1) { // More than just "all" category
        setCategories(result);
      } else {
        setCategories(mockCategories);
      }
    } catch (err) {
      console.error('Error fetching categories, using mock data:', err);
      setCategories(mockCategories);
    }
  }, []);

  // Fetch filters
  const fetchFilters = useCallback(async (categoryIds?: string[]) => {
    try {
      const result = await enadApiService.fetchFilters(categoryIds);
      setFilters(result);
    } catch (err) {
      console.error('Error fetching filters:', err);
      // Don't set error state for filters as it's not critical
    }
  }, []);

  // Set category and fetch products
  const setCategory = useCallback((category: string) => {
    setCurrentPage(1); // Reset to first page when changing category
    fetchProducts(category, 1);
  }, [fetchProducts]);

  // Pagination actions
  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      fetchProducts(currentCategory, newPage);
    }
  }, [currentPage, totalPages, currentCategory, fetchProducts]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      fetchProducts(currentCategory, newPage);
    }
  }, [currentPage, currentCategory, fetchProducts]);

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      fetchProducts(currentCategory, page);
    }
  }, [totalPages, currentPage, currentCategory, fetchProducts]);

  // Initial data fetch
  useEffect(() => {
    // Fetch initial data
    Promise.all([
      fetchProducts(currentCategory, initialPage),
      fetchCategories(),
      fetchFilters()
    ]);
  }, []); // Empty dependency array for initial load only

  return {
    products,
    categories,
    filters,
    loading,
    error,
    usingMockData,
    pagination: {
      currentPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    },
    actions: {
      fetchProducts,
      fetchCategories,
      fetchFilters,
      setCategory,
      nextPage,
      prevPage,
      goToPage,
    },
  };
};