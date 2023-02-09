import { MagnifyingGlass, ShoppingCart, Storefront } from "phosphor-react";
import Logo from "../assets/shop.png";
import { ContextHook } from "../context/ContextHook";
import { Input } from "./Input";

interface HeaderProps {
  setIOpen: Function
}

export function Header({ setIOpen }: HeaderProps) {
  const { products } = ContextHook();
  return (
    <div className="h-20 flex justify-between items-center px-20 z-10">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-20" />
        <span className="text-slate-100 text-2xl">Loja Virtual</span>
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <Input
          icon={<MagnifyingGlass size={24} color="gray" />}
          placeholder="Pesquisar"
        />
        <div className="flex">
          <ShoppingCart size={30} className="text-green-500" weight={products.length > 0 ? 'fill' : 'regular'} onClick={() => setIOpen((prev: any) => !prev)} />
        </div>
      </div>
    </div>
  );
}
