import React from "react";
import { product, data } from "./List";

export const Links: React.FC<({product, data})> => (
  <div className="grow content-evenly text-center">
    <em>{product.name}</em>
    <div className="center-self">
      {/* <img src={Logo} className="object-scale-down w-20 h-20 self-center" /> */}
    </div>
    <br />
    <div>{product.default_price}$</div>
  </div>
);
