import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = props => {
  return (
    <nav>
      <h1>{props.lista}</h1>

      <ItemCount numInicial={0} producto="Producto1" />
      <ItemCount numInicial={0} producto="Producto2" />
      <ItemCount numInicial={0} producto="Producto3" />
    </nav>
  );
};

export default ItemListContainer;
