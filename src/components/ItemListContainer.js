import React from 'react';

import ItemList from './ItemList';


function ItemListContainer(props) {
    const productos = [
        { nombre: "Blazer", descripcion: "Blazer ligera de cuello y solapas de pico. Manga larga acabada en puño con detalle de botones. Bolsillos de vivo en pecho y cadera. Detalle bolsillo interior.", stock:"25", img:"/images/blazer.jpg" },
        { nombre: "Pantalon Lino", descripcion: "Este lino se cultiva de forma natural, sin riego artificial y no usa semillas modificadas genéticamente ni defoliantes. Su producción se realiza en Europa siguiendo el estándar de European Flax® de European Confederation of Flax and Hemp (CELC).", stock:"30", img:"/images/bermuda.jpg" }
    ];

    return <div className="container">
        <div className="row">
            <br />
            <h2 className="text-center">{props.name}</h2>
        </div>
        <div className="row">
            <p><ItemList listado={productos} /></p>

        </div>
    </div>

}

export default ItemListContainer;