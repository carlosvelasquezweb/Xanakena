import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getProduct = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      const item = [
        {
          id: "001",
          nombre: "Blazer",
          descripcion:
            "Blazer ligera de cuello y solapas de pico. Manga larga acabada en puño con detalle de botones. Bolsillos de vivo en pecho y cadera. Detalle bolsillo interior.",
          stock: "25",
          img: "../images/blazer.jpg",
        },
        {
          id: "002",
          nombre: "Pantalon Lino",
          descripcion:
            "Este lino se cultiva de forma natural, sin riego artificial y no usa semillas modificadas genéticamente ni defoliantes. Su producción se realiza en Europa siguiendo el estándar de European Flax® de European Confederation of Flax and Hemp (CELC).",
          stock: "30",
          img: "../images/bermuda.jpg",
        },
        {
          id: "003",
          nombre: "Bañador Estampado ",
          descripcion:
            "Bañador estampado con efecto lavado. Confeccionado en tejido de origen reciclado y secado rápido, con protección",
          stock: "25",
          img: "../images/banador-clasico-estampado.png",
        },
      ];
      res(item.filter((item) => item.id === id));
    }, 3000);
  });
};

function ItemDetailContainer(props) {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  //console.log(id);
  useEffect(() => {
    getProduct(id).then((res) => {
      setItem(res);
      //console.log(res);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">{props.name}</h2>
        <hr></hr>
      </div>
      <div className="row">
      {item.length > 0 && <ItemDetail producto={item} />}
       
      </div>
    </div>
  );
}

export default ItemDetailContainer;
