import React from "react";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";

function onAdd(cantidad) {
  if (cantidad <= 0) {
    alert("No hay items seleccionados!");
  } else {
    alert("Items en el carrito: " + cantidad);
  }
}

function ItemDetail(props) {
  const key = props.producto[0];
const ruta = key.img
  return (
    <div className="container">
      <div className="row">
        <div className="six columns">
          <h2>{key.nombre}</h2>
         <img src={ruta} style={{width: "150px"}}/> 
          <p>{key.descripcion}</p>
         
        </div>

        <div className="five columns">
          <br></br>
          <br></br>
          <ItemCount stock="10" initial="0" onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
