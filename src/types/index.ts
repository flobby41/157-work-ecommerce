export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  sizes: string[];
  isOnSale?: boolean;
  discount?: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  isActive?: boolean;
}

export interface PromoOffer {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  image: string;
  isLimitedEdition?: boolean;
}