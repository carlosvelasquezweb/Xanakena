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
  const key = props.producto;
  console.log(key[0].id);
  // console.info(producto.id);

  return <>
  

    <ItemCount stock="10" initial="0" onAdd={onAdd} />
  </>;
}

export default ItemDetail;
