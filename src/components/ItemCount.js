import React, { useState } from 'react';


function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(Number(initial));

  return (
    <div className="container">
      <div className="row ">
        <div className="two columns">
          <a className=" button button-primary u-full-width" onClick={
            () => {
              if (count > 0) {
                setCount(count - 1)
              } else {
                return false
              }
            }
          }>
            -
      </a>
        </div>
        <div className="one columns">
          <p className="text-center">{count}</p>
        </div>
        <div className="two columns">

          <a className="button button-primary u-full-width" onClick={
            () => {
              if (stock > count) {
                setCount(count + 1)
              }
            }
          }>
            +
      </a>

        </div></div>
      <div className="row">
        <div className="five columns">
          <a className="button button-primary u-full-width" onClick={() => onAdd(count)}>¡Agregar al carrito!</a>
        </div>
      </div>

      <hr />
    </div>
  );
}



export default ItemCount;