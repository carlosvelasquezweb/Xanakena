import React from 'react';


function ItemListContainer(props) {

    return <ul>
        <h2>{props.name}</h2>
        <hr/>
        <li><p>Producto #1</p></li>
        <li><p>Producto #2</p></li>
        <li><p>Producto #3</p></li>
        <li><p>Producto #4</p></li>
    </ul>

}

export default ItemListContainer;