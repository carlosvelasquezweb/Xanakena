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

  return <div className="container">
    <div className="row">
      <div className="twelve columns">
        <h3>{props.nombre}</h3>
        {/*No puedo mostrar la imagen*/}
        <img src={props.img} />
        
        <p>{props.descripcion}</p>
     
        <ItemCount stock="10" initial="0" onAdd={onAdd} /> 
          <hr/>
      </div>
    </div>
  </div>

}

export default Item;