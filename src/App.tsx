import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import Pc from "./assets/pc.png";
import Headset from "./assets/headset.png";
import Mouse from "./assets/mouse.png";
import { ContextHook } from "./context/ContextHook";
import { MouseEvent, MouseEventHandler, useState } from "react";
import uuid from "react-uuid";
import { Sidebar } from "./Components/Sidebar";

function App() {
  const { products, setProducts } = ContextHook();

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [arrayRequest, setArrayRequest] = useState([
    {
      id: uuid(),
      name: "Computador Gamer",
      image: Pc,
      alt: "Imagem de um computador",
      prize: 3.599,
    },
    {
      id: uuid(),
      name: "Headset Gamer",
      image: Headset,
      alt: "Imagem de um fone de ouvido",
      prize: 40.99,
    },
    {
      id: uuid(),
      name: "Mouse Gamer",
      image: Mouse,
      alt: "Imagem de um mouse",
      prize: 30.99,
    },
  ]);

  function addProductOnCart(id: string, event: MouseEvent) {
    event.preventDefault();
    const isExisted = products.findIndex((prod) => {
      return prod.id == id;
    });

    if (isExisted < 0) {
      const findProduct = arrayRequest.find((prod) => {
        return prod.id === id;
      });

      setProducts((rest: any) => [...rest, findProduct]);
    } else {
      alert("Já está no carrinho");
    }
  }

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIOpen={setIsOpen} />
      <div className="flex flex-col gap-3 mt-10 px-20">
        <h1 className="text-2xl text-slate-100">Produtos</h1>
        <div className="grid grid-cols-3 grid-rows-[auto] gap-20">
          {arrayRequest.map((card, index) => (
            <Card
              id={card.id}
              alt={card.alt}
              image={card.image}
              name={card.name}
              prize={card.prize}
              key={index}
              addOnCart={addProductOnCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
