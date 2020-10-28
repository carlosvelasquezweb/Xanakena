import React, { useState } from 'react';



function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(Number(initial));
function onAdd(count){
   if (count <= 0)
    { 
      alert("No hay items seleccionados!") 
    }
     else { alert("Items en el carrito: " + count) } };
  return (
    <div className="container">
      <div className="row">
        <div className="two columns">
          <button className="u-full-width" onClick={
            () => {
              if (stock > count) {
                setCount(count + 1)
              }
            }
          }>
            +
      </button>
        </div>
        <div className="one columns">
          <p className="text-center">{count}</p>
        </div>
        <div className="two columns">
          <button className="u-full-width" onClick={
            () => {
              if (count > 0) {
                setCount(count - 1)
              } else {
                return false
              }
            }
          }>
            -
      </button>
        </div></div>
      <div className="row">
        <div className="five columns">
          <button className="u-full-width" onClick={()=> onAdd(count)}>¡Agregar al carrito!</button>
        </div>
      </div>

      <hr />
    </div>
  );
}



export default ItemCount;