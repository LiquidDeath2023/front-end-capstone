import React from "react";
import { product, data } from "./List";
type LinkProps = {
  product: product;
  data: data;
};
export const Links: React.FC<LinkProps> = ({ product, data }) => (
  <div className="grow content-evenly text-center">
    <em>{product.name}</em>
    <div className="center-self">
      {/* <img src={Logo} className="object-scale-down w-20 h-20 self-center" /> */}
    </div>
    <br />
    <div>{product.default_price}$</div>
  </div>
);
