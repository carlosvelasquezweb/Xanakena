import React, { useContext, useState } from "react";

export const CartContext = React.createContext(); 

export function ListProvider({ defaultValue, children, element}) {

  const [list, setList] = useState([]); 

  function add() {
    // agrega un string a la lista
    setList([...list, "Nuevo elemento" ]); 
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
