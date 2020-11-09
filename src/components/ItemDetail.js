import React from "react";
import Item from "./Item.js";
import ItemCount from "./ItemCount.js";
import { useParams } from "react-router-dom";

function ItemDetail(props) {
  const fo = props.Listado;
  function onAdd(cantidad) {
    if (cantidad <= 0) {
      alert("No hay items seleccionados!");
    } else {
      alert("Items en el carrito: " + cantidad);
    }
  }
  let { id } = useParams();
  console.info(id);
  

  return (
    <div className="one-half column">
      <p>{id}</p>
   
      <ItemCount stock="10" initial="0" onAdd={onAdd} />
    </div>
  );
}

export default ItemDetail;
