import React from "react";


function Item(props) {

  return (
    <>
      <h3 className="u-full-width">{props.nombre}</h3>
      <img className="u-full-width" src={props.img} title={props.nombre} />
      <p className="u-full-width">{props.descripcion}</p>

      
    </>
  );
}

export default Item;
