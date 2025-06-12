import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-black text-white text-center py-1 text-sm">
        FRI FRAKT ÖVER 500 KR
      </div>
      
      {/* Main header */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Menu and Logo */}
        <div className="flex items-center space-x-4">
          <Menu className="w-6 h-6" />
          <div className="text-2xl font-bold tracking-tight">157 WORK</div>
        </div>
        
        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Sök"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        
        {/* Right side - Icons */}
        <div className="flex items-center space-x-4">
          <User className="w-6 h-6" />
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="px-4 py-2 text-sm text-gray-600 border-b">
        HEM / KLÄDER/UTRUSTNING / ALLA KLÄDER UNDS 10K
      </div>
    </header>
  );
}