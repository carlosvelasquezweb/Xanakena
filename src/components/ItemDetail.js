import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";

function ItemDetail(props) {
  const [total, setTotal] = useState(null);

  function Finalizar(props) {
    return (
      <Link to="/cart/">
        <button>Finalizar Compra {props.total}</button>
      </Link>
    );
  }

  function onAdd(cantidad) {
    setTotal(cantidad);

    document.getElementById("itemcontador").innerHTML =
      'Presiona "finalizar Compra" para ir al carrito';
  }
  // console.log("Este es mi estado: " + total);

  const key = props.producto[0];
  const ruta = key.img;
  return (
    <div className="container">
      <div className="row">
        <div className="six columns">
          <h2>{key.nombre}</h2>
          <img src={ruta} style={{ width: "150px" }} />
          <p>{key.descripcion}</p>
        </div>

        <div className="five columns">
          <br></br>
          <br></br>
          <ItemCount stock="10" initial="1" onAdd={onAdd} />
          <div id="mostrar">
            <Finalizar id="Finalizar" total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
