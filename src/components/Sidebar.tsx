import React from 'react';
import { categories } from '@/data/mockData';
import { Category } from '@/types';

interface SidebarProps {
  onCategoryChange: (categoryId: string) => void;
  activeCategory: string;
}

export default function Sidebar({ onCategoryChange, activeCategory }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">HOODAR</h2>
        <div className="flex items-center space-x-2 text-sm mb-4">
          <span>FILTRERA & SORTERA</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </div>
      </div>
      
      <nav className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-white text-black rounded'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            {category.name}
          </button>
        ))}
      </nav>
      
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
      
      <div className="mt-8 text-center">
        <div className="text-2xl font-bold">157 WORK</div>
      </div>
    </aside>
  );
}