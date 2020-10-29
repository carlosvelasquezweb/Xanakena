import React from 'react';
import ItemCount from './ItemCount';


function ItemListContainer(props) {

   function onAdd(cantidad) { if (cantidad <= 0) { alert("No hay items seleccionados!"); } else { alert("Items en el carrito: " + cantidad); } }

    return <div className="container">
        <div className="row">
            <br />
            <h2 className="text-center">{props.name}</h2>
        </div><hr />
        <div className="row">
            <p>Producto #1</p>  <ItemCount stock="10" initial="0" onAdd={onAdd} />
            <p>Producto #2 </p> <ItemCount stock="10" initial="0" onAdd={onAdd}/>
            <p>Producto #3 </p> <ItemCount stock="10" initial="0" onAdd={onAdd}/>
            <p>Producto #4  </p><ItemCount stock="10" initial="0" onAdd={onAdd}/>
        </div>
    </div>

}

export default ItemListContainer;