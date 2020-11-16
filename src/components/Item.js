import React from "react";
import { Link } from "react-router-dom";


function Item({id, nombre, img }) {

  return (
    <>
      <h3 className="u-full-width">{nombre}</h3>
      <Link to={`/item/${id}`}> <img className="u-full-width" src={img} style={{width:"250px", textAlign:"center"}}/> </Link>
      

    </>
  );
}

export default Item;
