import React, { useState } from "react";
import { Links } from "./Links";
import { product, data } from "./List";
import Logo from "../../Death.jpg";

type CardProps = {
  data: data;
  product: product;
};

export const Card: React.FC<CardProps> = ({ product, data }) => {
  return (
    <>
      <div className="container bg-white rounded-md flex flex-col">
        <em className="text-xl self-center">{currentProduct.name}</em>
        <div className="self-center">
          <img src={Logo} className="object-contain "></img>
        </div>
        <p>{currentProduct.description}</p>
        <button>Add to Cart!</button>
        <br />
        <div className="flex flex-row bg-slate-200">
          <List
            data={data}
            updateCurrentProduct={updateCurrentProduct}
            currentProduct={currentProduct}
          />
        </div>
      </div>
    </>
  );
};
