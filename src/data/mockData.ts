import { Product, Category, PromoOffer } from '@/types';

export const categories: Category[] = [
  { id: 'all', name: 'ALLA KATEGORIER', isActive: false },
  { id: 'hoodies', name: 'HOODIES', isActive: true },
  { id: 'tshirts', name: 'T-SHIRTS', isActive: false },
  { id: 'pants', name: 'BYXOR', isActive: false },
  { id: 'jackets', name: 'JACKOR', isActive: false },
  { id: 'accessories', name: 'TILLBEHÖR', isActive: false },
  { id: 'shoes', name: 'SKOR', isActive: false },
  { id: 'underwear', name: 'UNDERKLÄDER', isActive: false },
  { id: 'swimwear', name: 'BADKLÄDER', isActive: false },
  { id: 'preorder', name: 'FÖRBESTÄLLNING', isActive: false },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'OVERSIZE HOOD "HEAVY H..."',
    price: 249,
    originalPrice: 349,
    image: '/api/placeholder/300/400',
    colors: ['gray', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOnSale: true,
    discount: 29,
    category: 'hoodies'
  },
  {
    id: '2',
    name: 'OVERSIZE HOOD "HEAVY H..."',
    price: 249,
    originalPrice: 349,
    image: '/api/placeholder/300/400',
    colors: ['gray', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOnSale: true,
    discount: 29,
    category: 'hoodies'
  },
  {
    id: '3',
    name: 'OVERSIZE HOOD "HEAVY H..."',
    price: 249,
    originalPrice: 349,
    image: '/api/placeholder/300/400',
    colors: ['gray', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOnSale: true,
    discount: 29,
    category: 'hoodies'
  },
  {
    id: '4',
    name: 'OVERSIZE HOOD "HEAVY H..."',
    price: 249,
    originalPrice: 349,
    image: '/api/placeholder/300/400',
    colors: ['gray', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOnSale: true,
    discount: 29,
    category: 'hoodies'
  },
  {
    id: '5',
    name: 'OVERSIZE HOOD "HEAVY H..."',
    price: 249,
    originalPrice: 349,
    image: '/api/placeholder/300/400',
    colors: ['gray', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOnSale: true,
    discount: 29,
    category: 'hoodies'
  },
  {
    id: '6',
    name: 'OVERSIZE HOOD "HEAVY H..."',
    price: 249,
    originalPrice: 349,
    image: '/api/placeholder/300/400',
    colors: ['gray', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOnSale: true,
    discount: 29,
    category: 'hoodies'
  },
  {
    id: '7',
    name: 'OVERSIZE HOOD "HEAVY H..."',
    price: 249,
    originalPrice: 349,
    image: '/api/placeholder/300/400',
    colors: ['gray', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    isOnSale: true,
    discount: 29,
    category: 'hoodies'
  }
];

export const promoOffers: PromoOffer[] = [
  {
    id: 'promo1',
    title: 'FUNKTIONSSHORTS',
    subtitle: 'SUPERDEAL',
    price: '200:-',
    description: 'ODM PRIŞ: 249 Exkl. frakt och alla avg.',
    image: '/api/placeholder/400/500',
    isLimitedEdition: true
  },
  {
    id: 'promo2',
    title: 'FUNKTIONSSHORTS',
    subtitle: 'SUPERDEAL',
    price: '200:-',
    description: 'ODM PRIŞ: 249 Exkl. frakt och alla avg.',
    image: '/api/placeholder/400/500',
    isLimitedEdition: true
  }
];