import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";

export default function Cart(props) {
  const { list, add, clean} = useContext(CartContext); //Desde acá voy a acceder a esos valores del contexto llamando a useContext. Este llamado a useContext me devuelve lo que declaramos en el value del provider y la forma de usar dichos valores es muy similar a como usamos las props.

  return (
    <div>
      {" "}
      <div className="container">
          <div className="row">
              <br></br>
        {list.map((total) => {
          return <li>{total}</li>; //Acá uso la lista para mostrar su contenido
        })}
        <button onClick={add}>Agregar</button> 
        <button onClick={clean}>Borrar todo</button> 
      </div>
      </div>
    </div>
  );
}
