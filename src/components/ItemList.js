import React from 'react';
import Item from "./Item.js";

function ItemList(props) {
  const productos = props.listado;

return  productos.map((productos, index) => (
    <Item nombre={productos.nombre} descripcion={productos.descripcion} img={productos.img} />
  ));
}

export default ItemList;