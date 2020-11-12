import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import Item from "./Item.js";

// const Finalizar = (props) => {
//   const style = {
//     display: "",
//   };
  
//   return (
    
//       <button style={style}>
//         {props.text} {props.cantidad}
//       </button>
//     </Link>
//   );
// };

const ItemDetail = (props) => {
  const [total, setTotal] = useState(null);

  const onAdd = (cant) => {
    setTotal(cant);

    document.getElementById("itemcontador").innerHTML = `Finalizar compra`;
    document.getElementById("mostrar").innerHTML = "<Link to='/cart/'><button style={{display:'hidden'}}>Finalizar Compra " + cant + "</button></Link>";

  };
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
  
          <Link to={"/cart"}><p id="mostrar"></p></Link>
            {/* <Finalizar text="Finalizar Compra" cantidad={total} /> */}
        
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
