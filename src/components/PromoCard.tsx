import React from 'react';
import { PromoOffer } from '@/types';

interface PromoCardProps {
  offer: PromoOffer;
}

export default function PromoCard({ offer }: PromoCardProps) {
  return (
    <div className="relative bg-gray-100 overflow-hidden group h-full">
      {/* Background Image */}
      <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden h-full">
        <img
          src={offer.image}
          alt={offer.title}
          className=" object-contain group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 items-start ml-4 mt-4">
          {/* Top badges */}
          <div className="flex flex-col space-y-1">
            {offer.isLimitedEdition && (
              <>
                <span className="bg-white text-black px-6 py-2 text-lg font-semibold w-fit">
                  SUPERDEAL
                </span>
                <span className="bg-black text-white px-6 py-2 text-lg font-semibold w-fit">
                  LIMITED EDITION
                </span>
              </>
            )}
          </div>
          
          {/* Bottom content */}
          <div className="text-white">
            <h3 className="text-xs font-medium mb-1 tracking-wider">
              {offer.title}
            </h3>
            <div className="text-3xl md:text-4xl font-bold mb-1">
              {offer.price}
            </div>
            <p className="text-xs opacity-90">
              {offer.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}