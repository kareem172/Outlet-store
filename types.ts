type NumericSize = 41 | 42 | 43 | 44 | 45;
type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl';
type Size = NumericSize | TextSize;

type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  gender: 'male' | 'female' | 'uni';
  description: string;
  category: string;
  sizes: Size[];
  colors: string[];
  rating: number;
  brand: string;
};

export type { NumericSize, TextSize, Size, Product };