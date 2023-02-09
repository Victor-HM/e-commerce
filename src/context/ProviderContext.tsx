import { useState } from "react"
import { Context } from "./Context"

interface ProviderProps {
 children: React.ReactNode
}

export function ProviderContext({ children }: ProviderProps) {
 const [products, setProducts] = useState([])
 return (
  <Context.Provider value={{
   products,
   setProducts,
  }}>
   {children}
  </Context.Provider>
 )
}