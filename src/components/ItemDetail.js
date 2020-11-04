import React from "react";
import Item from "./Item.js";
import ItemCount from "./ItemCount.js";

function ItemDetail(props) {
    function onAdd(cantidad) {
        if (cantidad <= 0) {
          alert("No hay items seleccionados!");
        } else {
          alert("Items en el carrito: " + cantidad);
        }
      }
  const productos = props.listado;

  return productos.map((producto, index) => (
    <div className="one-half column">
      <Item
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        img={producto.img}
      />
      <ItemCount stock="10" initial="0" onAdd={onAdd} />
    </div>
  ));
}

export default ItemDetail;
