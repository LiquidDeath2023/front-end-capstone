import React, { useState } from "react";
import { Links } from "./Helpers/Links";
import { List } from "./Helpers/List";
import Logo from "../../Death.jpg";

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

export const Card = () => {
  const [data, updateData] = React.useState<data>([
    {
      id: 1,
      name: "Camo Onesie",
      slogan: "Blend in to your crowd",
      description:
        "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      category: "Jackets",
      default_price: "140",
    },
    {
      id: 2,
      name: "Bright Future Sunglasses",
      slogan: "You've got to wear shades",
      description:
        "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
      category: "Accessories",
      default_price: "69",
    },
    {
      id: 3,
      name: "Morning Joggers",
      slogan: "Make yourself a morning person",
      description:
        "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
      category: "Pants",
      default_price: "40",
    },
  ]);
  const [currentProduct, updateCurrentProduct] = React.useState<product>(
    data[0]
  );
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
