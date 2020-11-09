import React from "react";
import Item from "./Item.js";

function ItemList(props) {
  const productos = props.listado;

  return productos.map((producto, index) => (
    <div className="one-half column">
      <Item
      id={producto.id}
        nombre={producto.nombre}
        descripcion={producto.descripcion}
        img={producto.img}
      />
    </div>
  ));
}

export default ItemList;
