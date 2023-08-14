import React, {
  FunctionComponent,
  HTMLFactory,
  SetStateAction,
  useEffect,
} from "react";
import { useState } from "react";
import { Links } from "./Links";
const catalog = module.exports.products;

export type product = {
  id: number;
  name: string;
  slogan: string;
  description: string;
  category: string;
  default_price: string;
  created_at?: string;
  updated_at?: string;
  features?: Array<{ feature: string; value: string }>;
};
export type data = Array<product>;

export const List: FunctionComponent = () => {
  const [allProducts, updateAllProducts] = React.useState<data>(catalog);

  const [relevantProducts, updateRelevant] = React.useState<data>();

  const [currentProduct, updateCurrentProduct] = React.useState<product>(
    allProducts[0]
  );
  useEffect(() => {
    let categoryToRelate = currentProduct.category;
    let relatedHolder: data = [];
    allProducts.map((product) => {
      if (product.category === categoryToRelate) relatedHolder.push(product);
    });
    updateRelevant(relatedHolder);
  }, [currentProduct]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    allProducts.forEach((product) => {
      if (product.id.toString() === event.currentTarget.id) {
        updateCurrentProduct(product);
      }
    });
  };

  return (
    <>
      {allProducts.map((current) => {
        if (current.category === currentProduct.category) {
        }
        return (
          <div
            className="flex-row grow"
            onClick={handleClick}
            id={`${current.id}`}
          >
            <Links product={current} data={relevantProducts} />
          </div>
        );
      })}
    </>
  );
};
