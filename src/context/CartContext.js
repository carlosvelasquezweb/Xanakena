import React, { useContext, useState } from "react";

export const CartContext = React.createContext();

export function ListProvider({ defaultValue, children }) {
  const [list, setList] = useState([]);

  function add(codigo, nombre, total) {
    
    const producto = { id: codigo, nombre: nombre, cantidad: total };
    
   setList([...list, producto]);
    
  }

  function clean() {
    //Elimina todos los items de la lista
    setList([]);
  }

  return (
    <CartContext.Provider value={{ list, add, clean }}>
      {children}
    </CartContext.Provider>
  );
}
