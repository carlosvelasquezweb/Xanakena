import ItemDetail from "./ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getProduct = (productId) => {
  return new Promise((res) => {
    setTimeout(() => {
      const item = {
        id:"001",
        nombre: "Blazer",
        descripcion:
          "Blazer ligera de cuello y solapas de pico. Manga larga acabada en puño con detalle de botones. Bolsillos de vivo en pecho y cadera. Detalle bolsillo interior.",
        stock: "25",
        img: "./images/blazer.jpg",
      };
      res(item);
    }, 3000);
  });
};

function ItemDetailContainer(props) {
  const [Productos, setProductos] = useState([]);
  const {id  } = useParams();
  useEffect(() => {
    getProduct(id).then(res => {
      setProductos(Productos);
    });
  }, [id]);

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
