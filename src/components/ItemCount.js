import React, { useState } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(Number(initial));

  return (
    <div id="itemcontador">
      <a className="button u-pull-left">{count}</a>
      <a
        className="button button-primary u-pull-right"
        onClick={() => {
          if (stock > count) {
            setCount(count + 1);
          }
        }}
      >
        +
      </a>

      <a
        className=" button  u-pull-right"
        onClick={() => {
       
          if (count > 1) {
            setCount(count - 1);
          } else {
            return false;
          }
        }}
      >
        -
      </a>

      <button className="button u-full-width" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
