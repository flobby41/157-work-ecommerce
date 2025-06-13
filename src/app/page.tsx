'use client';

import React from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import PromoCard from '@/components/PromoCard';
import Footer from '@/components/Footer';
import { useEnadProducts } from '@/hooks/useEnadProducts';
import { promoOffers } from '@/data/mockData'; // Keep promo offers as mock data for now

export default function Home() {
  const {
    products,
    categories,
    loading,
    error,
    usingMockData,
    pagination,
    actions
  } = useEnadProducts({
    category: 'men/footwear', // Start with men's footwear as shown in the API example  
    perPage: 20
  });

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    actions.setCategory(categoryId);
  };

  // Handle load more
  const handleLoadMore = () => {
    if (pagination.hasNextPage) {
      actions.nextPage();
    }
  };

  // Show loading state
  if (loading && products.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
        
        <div className="flex-1">
          {/* Navigation section */}
          <div className="p-6 pb-0" style={{ fontFamily: 'UnB-Office-Bold, sans-serif' }}>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold text-black border-b border-gray-300 pb-4">
                  PRODUCTS ({products.length})
                </h1>
                {usingMockData && (
                  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-3 py-1 rounded text-sm">
                    Demo Mode
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div className="text-sm text-black mb-2 font-bold">
                  <span className="underline">HEM</span> / <span className="underline">PRODUKTER</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-black">
                  <Image src="/img/filter svg.png" alt="Filter" width={28} height={28} />
                  <span className="font-bold translate-y-0.5">FILTRERA & SORTERA</span>
                </div>
              </div>
              
              {/* Pagination info */}
              {!usingMockData && (
                <div className="text-sm text-gray-600 mb-4">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </div>
              )}

              {/* Error message */}
              {error && !usingMockData && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p className="text-sm">{error}</p>
                  <button 
                    onClick={() => actions.fetchProducts()}
                    className="mt-2 text-sm underline hover:no-underline"
                  >
                    Try again
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <main className="p-6 pt-0">
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Insert promo card at the beginning if we have products */}
              {products.length > 0 && promoOffers[0] && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3 row-span-2">
                  <PromoCard offer={promoOffers[0]} />
                </div>
              )}

              {/* Show products */}
              {products.map((product, index) => (
                <React.Fragment key={product.id}>
                  <ProductCard product={product} />
                  {/* Insert additional promo cards every 10 products */}
                  {index > 0 && (index + 1) % 10 === 0 && promoOffers[1] && (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3 row-span-2">
                      <PromoCard offer={promoOffers[1]} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Load more button - only show if not using mock data */}
            {!usingMockData && pagination.hasNextPage && (
              <div className="mt-12 text-center">
                <button 
                  onClick={handleLoadMore}
                  disabled={loading}
                  className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'LOADING...' : 'VISA FLER'}
                </button>
              </div>
            )}
            
            {/* No more products message */}
            {!usingMockData && !pagination.hasNextPage && products.length > 0 && (
              <div className="mt-12 text-center text-gray-600">
                <p>All products loaded</p>
              </div>
            )}
            
            {/* No products found */}
            {products.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found</p>
                <button 
                  onClick={() => actions.fetchProducts()}
                  className="mt-4 bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}
