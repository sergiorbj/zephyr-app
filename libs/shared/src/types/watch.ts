export interface Watch {
  id: string;
  brand: string;
  model: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  category: 'luxury' | 'sport' | 'classic' | 'smart';
  features: string[];
  inStock: boolean;
}
