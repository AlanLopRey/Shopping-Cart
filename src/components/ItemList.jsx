/* eslint-disable no-unused-vars */
import React from "react";
import storeItems from "../data/products.json";
import { Item } from "./Item";

export const ItemList = () => {
  return (
    <div className="items-list">
      {storeItems.map((producto, index) => {
        return <Item key={producto.id} {...producto} />;
      })}
    </div>
  );
};
