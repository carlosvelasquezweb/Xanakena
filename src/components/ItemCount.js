import React, { useState } from 'react';

function ItemCount({ initial, stock }) {
  const [count, setCount] = useState(Number(initial));

  return (
    <div>
      <button onClick={
        () => {
          if (stock > count) {
            setCount(count + 1)
          }
        }
      }>
        +
      </button>
      <p>Productos: {count}</p>
      <button onClick={
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
      <br/>
      <button onClick={()=>{if(count <= 0){alert("No hay items seleccionados!")}else{alert("Items en el carrito: " + count)}}}>¡Agregar al carrito!</button>
    </div>
  );
}



export default ItemCount;