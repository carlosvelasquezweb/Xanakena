import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const promesa = new Promise((resolved) => {
  setTimeout(() => {
    resolved([
      {
        nombre: "Blazer",
        descripcion:
          "Blazer ligera de cuello y solapas de pico. Manga larga acabada en puño con detalle de botones. Bolsillos de vivo en pecho y cadera. Detalle bolsillo interior.",
        stock: "25",
        img: "./images/blazer.jpg",
      },
      {
        nombre: "Pantalon Lino",
        descripcion:
          "Este lino se cultiva de forma natural, sin riego artificial y no usa semillas modificadas genéticamente ni defoliantes. Su producción se realiza en Europa siguiendo el estándar de European Flax® de European Confederation of Flax and Hemp (CELC).",
        stock: "30",
        img: "./images/bermuda.jpg",
      },
      {
        nombre: "Bañador Estampado ",
        descripcion:
          "Bañador estampado con efecto lavado. Confeccionado en tejido de origen reciclado y secado rápido, con protección",
        stock: "25",
        img: "./images/banador-clasico-estampado.png",
      },
    ]);
  }, 2000);
});

function ItemListContainer(props) {
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    promesa.then((Productos) => {
      setProductos(Productos);
    });
  });

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">{props.name}</h2>
        <hr></hr>
      </div>
      <div className="row">
        <ItemList listado={Productos} />
      </div>
    </div>
  );
}

export default ItemListContainer;
