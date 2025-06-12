'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import PromoCard from '@/components/PromoCard';
import { products, promoOffers } from '@/data/mockData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('hoodies');

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <main className="flex-1 p-6">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* First promotional offer */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <PromoCard offer={promoOffers[0]} />
          </div>
          
          {/* Products */}
          {filteredProducts.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {/* Second promotional offer */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <PromoCard offer={promoOffers[1]} />
          </div>
          
          {/* More products */}
          {filteredProducts.slice(5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Load more button */}
        <div className="mt-12 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            VISA FLER
          </button>
        </div>
      </main>
    </div>
  );
}
