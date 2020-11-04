import React, { useState } from 'react';


function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(Number(initial));
  
  return (<>
    
<a className="button u-pull-left">{count}</a>
    <a className="button button-primary u-pull-right" onClick={
      () => {
        if (stock > count) {
          setCount(count + 1)
        }
      }
    }>
      + 
      </a> 

      <a className=" button  u-pull-right" onClick={
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
     
    <a className="button button-primary u-full-width" onClick={() => onAdd(count)}>¡Agregar al carrito!</a>
<hr/>
  </>
  );
}



export default ItemCount;