import React from "react";
import { product, data } from "../Card";
import Logo from "../../../Death.jpg";

export const Links: React.FC<{ item: product }> = ({ item }) => (
  <div className="grow content-evenly text-center">
    <em>{item.name}</em>
    <div className="center-self">
      <img src={Logo} className="object-scale-down w-20 h-20 self-center" />
    </div>
    <br />
    <div>{item.default_price}$</div>
  </div>
);
