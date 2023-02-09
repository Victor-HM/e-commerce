import { createContext } from "react";

export interface ProductsProps {
  products: Array<{
    id: string;
    image: string;
    alt: string;
    name: string;
    prize: number;
  }>;
  setProducts: Function,
}

export const Context = createContext<ProductsProps>({
  products: [],
  setProducts: () => {},
});
