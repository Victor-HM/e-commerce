import { ArrowRight } from "phosphor-react";
import { ContextHook } from "../context/ContextHook";
import Lottie from 'lottie-react'
import Empty from '../assets/empty.json'

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Function;
}

export function Sidebar({ isOpen = false, setIsOpen }: SidebarProps) {
 const { products } = ContextHook()
  return (
    <aside
      className="fixed bg-neutral-900 z-50 right-0 h-full w-0 p-5 transition-all data-[collapse=true]:bg-neutral-800 data-[collapse=true]:w-96 data-[collapse=true]:block"
      data-collapse={isOpen}
    >
      {isOpen && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <ArrowRight
              size={28}
              color="white"
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="w-full flex flex-col items-center">
           <p className="text-white text-2xl">Produtos</p>

           <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            {products.length > 0 && (
             <div className="w-full h-96 flex flex-col gap-3 overflow-auto scroll-smooth">
              {products.map(prod => (
               <div key={prod.id} className="w-full h-52 flex flex-col gap-3 items-center bg-neutral-900 rounded">
                <img src={prod.image} alt={prod.alt} className='w-28' />
                <div className="flex flex-col gap-2 text-center text-white">
                 <p>{prod.name}</p>
                 <p>R${prod.prize}</p>
                </div>
               </div>
              ))}
             </div>
            )}

            {products.length === 0 && (
             <div className="w-full h-full flex flex-col items-center">
              <Lottie animationData={Empty} />
             </div>
            )}
           </div>

           <div className="h-full w-full">
            <div>
             <strong>
              
             </strong>
            </div>
           </div>

          </div>
        </div>
      )}
    </aside>
  );
}
