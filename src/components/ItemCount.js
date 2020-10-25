 import React, { useState } from 'react';

function ItemCount({initial, stock}) {
    const [count, setCount] = useState(Number(initial));
    console.log(Number(stock))


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <p>Productos: {count}</p>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
} 



export default ItemCount;