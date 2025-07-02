export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string; // Should match Category.id
  size: string[];
  color: string[];
  image: string;
  stock: number;
}
