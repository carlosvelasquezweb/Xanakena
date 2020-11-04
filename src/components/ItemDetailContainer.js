import React, { useEffect, useState } from "react";
import ItemDetail  from "./ItemDetail";

const promesa = new Promise((resolved) => {
  setTimeout(() => {
    resolved([
      {
        nombre: "Blazer",
        descripcion:
          "Blazer ligera de cuello y solapas de pico. Manga larga acabada en puño con detalle de botones. Bolsillos de vivo en pecho y cadera. Detalle bolsillo interior.",
        stock: "25",
        img: "./images/blazer.jpg",
      } ]);
  }, 3000);
});

function ItemDetailContainer(props) {
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
        <ItemDetail listado={Productos} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;