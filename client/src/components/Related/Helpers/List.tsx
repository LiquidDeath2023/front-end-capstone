import React, { HTMLFactory, SetStateAction } from "react";
import { useState } from "react";
import { Links } from "./Links";
import { data, product } from "../Card";
type ListProps = {
  data: data;
  currentProduct: product;
  updateCurrentProduct: React.Dispatch<React.SetStateAction<product>>;
};

export const List = ({
  data,
  currentProduct,
  updateCurrentProduct,
}: ListProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    data.forEach((product) => {
      if (product.id.toString() === event.currentTarget.id) {
        updateCurrentProduct(product);
      }
    });
  };
  return (
    <>
      {data.map((product) => {
        return (
          <div
            className="flex-row grow"
            onClick={handleClick}
            id={`${product.id}`}
          >
            <Links item={product} />
          </div>
        );
      })}
    </>
  );
};
