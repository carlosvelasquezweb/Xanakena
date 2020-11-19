import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";

export default function Cart(props) {
  const { list, add, clean } = useContext(CartContext); //Desde acá voy a acceder a esos valores del contexto llamando a useContext. Este llamado a useContext me devuelve lo que declaramos en el value del provider y la forma de usar dichos valores es muy similar a como usamos las props.

  return (
    <div>
      {" "}
      <div className="container">
        <br/>
        <div className="row">
          {list.map((producto) => {
            return (
              <li>{producto.nombre + ": " +  producto.cantidad + " Unidades"}</li>
            );
          })}

          <button onClick={clean}>Borrar todo</button>
        </div>
      </div>
    </div>
  );
}
