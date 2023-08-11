import React from "react";
type CardProps = {
  product: {
    id: number;
    name: string;
    description: string;
    category: string;
    default_price: string;
  };
};
const Links = ({ product }: CardProps) => (
  <>
    <div className="grow text-xl">
      {product.name}
      <div className="">Price: {product.default_price}$</div>
    </div>
  </>
);
export default Links;
