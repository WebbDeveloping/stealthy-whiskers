export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  handle: string;
  category: string;
  pictureUrl: string;
  brand: string;
  type: string;
  quantityInStock: number;
  discount: boolean;
  isNew: boolean;
  isBestSelling: boolean;
  featuredItem: boolean;
}
