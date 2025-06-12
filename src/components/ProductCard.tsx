import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist button */}
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        
        {/* Sale badge */}
        {product.isOnSale && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
            -{product.discount}%
          </div>
        )}
        
        {/* Size tags */}
        <div className="absolute bottom-3 left-3 flex space-x-1">
          <span className="bg-black text-white px-2 py-1 text-xs rounded">
            EU-36
          </span>
          <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">
            ONLY 156
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-red-600">
            {product.price}:-
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice}:-
            </span>
          )}
        </div>
        
        {/* Color options */}
        <div className="flex space-x-1 mb-3">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                color === 'gray' ? 'bg-gray-400' :
                color === 'black' ? 'bg-black' :
                color === 'white' ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
          ))}
        </div>
      </div>
    </div>
  );
}