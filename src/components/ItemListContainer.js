import React from 'react';
import ItemCount from './ItemCount';


function ItemListContainer(props) {

    return <div className="container">
        <div className="row">
            <br />
            <h2 className="text-center">{props.name}</h2>
        </div><hr />
        <div className="row">
            <p>Producto #1 <ItemCount stock="10" initial="1" /></p>
            <p>Producto #2  <ItemCount stock="10" initial="1" /></p>
            <p>Producto #3  <ItemCount stock="10" initial="1" /></p>
            <p>Producto #4  <ItemCount stock="10" initial="1" /></p>
        </div>
    </div>

}

export default ItemListContainer;