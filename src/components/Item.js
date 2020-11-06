import React from "react";
import { Link } from "react-router-dom";


function Item({id, nombre, descripcion, img }) {

  return (
    <>
      <h3 className="u-full-width">{nombre}</h3>
      <Link to={`/item/${id}`}> <img className="u-full-width" src={img} title={nombre} /></Link>
      <p className="u-full-width">{descripcion}</p>

    </>
  );
}

export default Item;
