import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getProduct = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      const item = [
        {
          id:"001",
          nombre: "Blazer",
          descripcion:
            "Blazer ligera de cuello y solapas de pico. Manga larga acabada en puño con detalle de botones. Bolsillos de vivo en pecho y cadera. Detalle bolsillo interior.",
          stock: "25",
          img: "./images/blazer.jpg",
        },
        {id:"002",
          nombre: "Pantalon Lino",
          descripcion:
            "Este lino se cultiva de forma natural, sin riego artificial y no usa semillas modificadas genéticamente ni defoliantes. Su producción se realiza en Europa siguiendo el estándar de European Flax® de European Confederation of Flax and Hemp (CELC).",
          stock: "30",
          img: "./images/bermuda.jpg",
        },
        {
          id:"003",
          nombre: "Bañador Estampado ",
          descripcion:
            "Bañador estampado con efecto lavado. Confeccionado en tejido de origen reciclado y secado rápido, con protección",
          stock: "25",
          img: "./images/banador-clasico-estampado.png",
        },
      ];
      res(item);
    }, 3000);
  });
};

function ItemDetailContainer() {
  const [Productos, setProductos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getProduct(id).then(res => {
      setProductos(Productos);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        
        <hr></hr>
      </div>
      <div className="row">
        <ItemDetail listado={Productos} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
