'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import PromoCard from '@/components/PromoCard';
import Footer from '@/components/Footer';
import { products, promoOffers } from '@/data/mockData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('hoodies');

  const filteredProducts = products.filter(product => 
    activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="flex-1">
          {/* Navigation section moved from sidebar */}
          <div className="p-6 pb-0" style={{ fontFamily: 'UnB-Office-Bold, sans-serif' }}>
            <div className="mb-6">
              <h1 className="text-2xl font-semibold mb-4 text-black">HOODAR</h1>
              <div className="mb-4">
                <div className="text-sm text-black mb-2 font-bold underline">HEM / KAMPANJER / ALLA HOODAR 100:-</div>
                <div className="flex items-center space-x-2 text-sm text-black">
                  <img src="/img/filter svg.png" alt="Filter" className="w-7 h-7" />
                  <span className="font-bold">FILTRERA & SORTERA</span>
                </div>
              </div>
            </div>
          </div>
          
          <main className="p-6 pt-0">
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
          
          <Footer />
        </div>
      </div>
    </div>
  );
}
