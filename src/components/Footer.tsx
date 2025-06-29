import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* OM LAGER 157 */}
          <div>
            <h3 className="text-base font-semibold mb-6 tracking-wide">OM LAGER 157</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">OM OSS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NEWS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JOBBA HOS OSS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CERTIFIKAT</a></li>
            </ul>
          </div>

          {/* KUNDTJÄNST */}
          <div>
            <h3 className="text-base font-semibold mb-6 tracking-wide">KUNDTJÄNST</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">KONTAKTA OSS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KÖPVILLKOR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BETALNING/RETUR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PRESENTKORT</a></li>
            </ul>
          </div>

          {/* BUTIKER */}
          <div>
            <h3 className="text-base font-semibold mb-6 tracking-wide">BUTIKER</h3>
            <ul className="space-y-3 text-base text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">HITTA BUTIK</a></li>
            </ul>
          </div>

          {/* FÖLJ OSS! */}
          <div>
            <h3 className="text-base font-semibold mb-6 tracking-wide">FÖLJ OSS!</h3>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded hover:from-purple-600 hover:to-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-xl font-bold mb-2">
                GÅ MED I VÅRT NYHETSBREV<br />
                SÅ MISSAR DU INGET.
              </h3>
              <button className="bg-black text-white border-2 border-white px-6 py-2 text-sm font-semibold hover:bg-gray-900 transition-colors">
                BLI MEDLEM
              </button>
            </div>

            {/* Large Logo */}
            <div className="text-right">
              <Image
                src="/img/157.png"
                alt="157 WORK"
                width={400}
                height={120}
                className="w-auto h-24 lg:h-32 -ml-8 lg:-ml-8"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}