import React from 'react';
import ItemCount from './ItemCount';


function ItemListContainer(props) {

    return <div className="container">
        <div className="row">
            <br />
            <h2 className="text-center">{props.name}</h2>
        </div><hr />
        <div className="row">
            <p>Producto #1</p> <ItemCount stock="10" initial="0" />
            <p>Producto #2 </p> <ItemCount stock="10" initial="0" />
            <p>Producto #3 </p> <ItemCount stock="10" initial="0" />
            <p>Producto #4  </p><ItemCount stock="10" initial="0" />
        </div>
    </div>

}

export default ItemListContainer;