import { MouseEventHandler } from "react";
import Image from "../assets/headset.png";

interface CardProps {
  id: string;
  image: string;
  alt: string;
  name: string;
  prize: number;
  addOnCart: Function;
}

export function Card({ alt, image, name, prize, addOnCart, id }: CardProps) {
  return (
    <div className="bg-neutral-800 flex flex-col gap-3 items-center rounded-lg p-4">
      <img src={image} alt={alt} className="w-36" />

      <div className="flex flex-col">
        <p className="text-lg font-bold text-white">{name}</p>

        <strong className="w-full text-2xl text-green-600">R${prize}</strong>
      </div>

      <div className="w-full">
        <button
          className="w-full p-5 bg-green-500 rounded"
          onClick={(e) => addOnCart(id, e)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
