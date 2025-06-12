import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { categories } from '@/data/mockData';
import { Category } from '@/types';

interface SidebarProps {
  onCategoryChange: (categoryId: string) => void;
  activeCategory: string;
}

export default function Sidebar({ onCategoryChange, activeCategory }: SidebarProps) {
  return (
    <aside className="w-64 bg-black text-white min-h-screen">
      {/* Header section integrated into sidebar */}
      <div className="p-4 border-b border-gray-700">
         {/* Header icons */}
         <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full text-white">
            {/* Star icon - left */}
            <div className="relative">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="absolute -bottom-1 -right-1 text-xs bg-black text-white rounded-full min-w-4 h-4 flex items-center justify-center px-1 font-bold">33</span>
            </div>
            
            {/* User icon - middle */}
            <div className="relative">
              <User className="w-10 h-10" strokeWidth={1} />
              <span className="absolute -bottom-1 -right-1 text-xs bg-black text-white rounded-full min-w-4 h-4 flex items-center justify-center px-1 font-bold">JF</span>
            </div>
            
            {/* Shopping cart - right */}
            <div className="relative">
              <ShoppingCart className="w-10 h-10" strokeWidth={1} />
              <span className="absolute -bottom-1 -right-1 text-xs bg-black text-white rounded-full min-w-4 h-4 flex items-center justify-center px-1 font-bold">200</span>
            </div>
          </div>
        </div>
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-white mb-4">
          157 WORK
        </div>
        
        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Sök..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
        </div>
        
       
      </div>
      
      {/* Navigation section */}
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 text-white">HOODAR</h2>
          <div className="mb-4">
            <div className="text-sm text-gray-300 mb-2">HEM / KAMPANJER / ALLA HOODAR 100:-</div>
            <div className="flex items-center space-x-2 text-sm text-white">
              <span>FILTRERA & SORTERA</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Categories with dropdown arrows */}
        <nav className="space-y-1">
          <div className="flex items-center justify-between py-2 text-white">
            <span className="text-sm font-medium">TJEJ</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white">
            <span className="text-sm font-medium">KILLE</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white">
            <span className="text-sm font-medium">HI-VIS</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="flex items-center justify-between py-2 text-white">
            <span className="text-sm font-medium">FÖRENING</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </nav>
      </div>
      
      {/* Footer sections */}
      <div className="mt-12 space-y-8">
        <div>
          <h3 className="text-sm font-semibold mb-3">OM LAGER 157</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>OM OSS</li>
            <li>NEWS</li>
            <li>JOBBA HOS OSS</li>
            <li>CENTRERAT</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">KUNDTJÄNST</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>KONTAKTA OSS</li>
            <li>KÖPVILLKOR</li>
            <li>RETUR/ÄNDRING</li>
            <li>PRESENTKORT</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">BUTIKER</h3>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold mb-3">FÖLJ OSS!</h3>
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <div className="w-6 h-6 bg-pink-600 rounded"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xs text-gray-400 mb-2">
          GÅ MED I VÅRT NYHETSBREV<br />
          SÅ MISSAR DU INGET!
        </p>
        <button className="bg-white text-black px-4 py-2 text-xs font-semibold rounded">
          BLI MEDLEM
        </button>
      </div>
    </aside>
  );
}