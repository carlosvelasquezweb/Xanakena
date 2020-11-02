import React from "react";
import ItemCount from './ItemCount';

function Item(props) {

  function onAdd(cantidad) {
    if (cantidad <= 0) {
      alert("No hay items seleccionados!");
    } else {
      alert("Items en el carrito: " + cantidad);
    }
  }

  return <>    
    <h3 className="u-full-width">{props.nombre}</h3>
    <img className="u-full-width" src={props.img} title={props.nombre}/>
    <p className="u-full-width">{props.descripcion}</p>
    
    <ItemCount stock="10" initial="0" onAdd={onAdd} />
</>
 
}

export default Item;