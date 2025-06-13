import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Category } from '@/types';

interface SidebarProps {
  categories: Category[];
  onCategoryChange: (categoryId: string) => void;
}

export default function Sidebar({ categories, onCategoryChange }: SidebarProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <aside className="w-70 bg-black text-white min-h-screen" style={{ fontFamily: 'UnB-Office-Regular, sans-serif' }}>
      {/* Header section integrated into sidebar */}
      <div className="p-4">
         {/* Header icons */}
         <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full text-white">
            {/* Star icon - left */}
            <div className="relative">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="absolute -bottom-1 -right-1 text-xs bg-black text-white rounded-full min-w-4 h-4 flex items-center justify-center px-1 font-bold">33</span>
            </div>
            
            {/* User icon - middle */}
            <div className="relative">
              <User className="w-8 h-8" strokeWidth={0.7} />
              <span className="absolute -bottom-1 -right-1 text-xs bg-black text-white rounded-full min-w-4 h-4 flex items-center justify-center px-1 font-bold">JF</span>
            </div>
            
            {/* Shopping cart - right */}
            <div className="relative">
              <ShoppingCart className="w-8 h-8" strokeWidth={0.7} />
              <span className="absolute -bottom-1 -right-3 text-xs bg-black text-white rounded-full min-w-4 h-4 flex items-center justify-center px-1 font-bold">200</span>
            </div>
          </div>
        </div>
        {/* Logo */}
        <div className="mb-4 mt-4">
          <Image 
            src="/img/157-work-logo.png" 
            alt="157 NO" 
            width={120}
            height={48}
            className="object-contain"
          />
        </div>
        
        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-7 h-7 text-white stroke-1" />
          <input
            type="text"
            placeholder="Sök..."
            className="w-full pl-12 pr-4 py-3 bg-[rgba(25,25,25,255)] border-0 text-white placeholder-white text-xs focus:outline-none focus:ring-0"
          />
        </div>
      </div>
      
      {/* Navigation section */}
      <div className="p-4">
        {/* Dynamic Categories from Enad API */}
        <nav className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`w-full flex items-center justify-between py-2 text-left border-b border-gray-900 hover:bg-gray-800 transition-colors ${
                activeCategory === category.id ? 'bg-gray-800' : ''
              }`}
            >
              <span className={`text-xs font-bold ${
                activeCategory === category.id ? 'text-yellow-400' : 'text-white'
              }`}>
                {category.name}
              </span>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
          ))}
          
          {/* Static categories (keeping some of the original design) */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
              <span className="text-xs font-bold">HI-VIS</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
              <span className="text-xs font-bold">FÖRENING</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
              <span className="text-xs font-bold">PROFILERING</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
              <span className="text-xs font-bold">KAMPANJER</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
              <span className="text-xs font-bold">KUNDCASE</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            
            <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
              <span className="text-xs font-bold">PRESENTKORT</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}