import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import { CartContext } from "../context/CartContext";

const ItemDetail = (props) => {
  const { add } = useContext(CartContext);
  const [total, setTotal] = useState(null);

  const onAdd = (cant) => {
    setTotal(cant);
    

    document.getElementById("itemcontador").innerHTML = `Finalizar compra`;
    document.getElementById("mostrar").innerHTML =
      "<Link to='/cart/'><button style={{display:'hidden'}}>Finalizar Compra " +
      cant +
      " unidades</button></Link>"; 
       add(key.id,  key.nombre, cant);
  };

  console.log("Este es mi estado: " + total);
  
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

          <Link to={"/cart"}>
            <p id="mostrar"></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
