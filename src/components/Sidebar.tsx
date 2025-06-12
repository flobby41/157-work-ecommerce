import React from 'react';
import Image from 'next/image';
import { Search, ShoppingCart, User } from 'lucide-react';

interface SidebarProps {
  onCategoryChange?: (categoryId: string) => void;
  activeCategory?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Sidebar({ onCategoryChange: _onCategoryChange, activeCategory: _activeCategory }: SidebarProps) {
  // Component with props for category filtering functionality
  // Parameters prefixed with _ to indicate they are intentionally unused for now
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
        {/* Categories with dropdown arrows */}
        <nav className="space-y-1">
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">TJEJ</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">KILLE</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">HI-VIS</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">FÖRENING</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">PROFILERING</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">KAMPANJER</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">KUNDCASE</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white border-b border-gray-900">
            <span className="text-xs font-bold">PRESENTKORT</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </nav>
      </div>
    </aside>
  );
}