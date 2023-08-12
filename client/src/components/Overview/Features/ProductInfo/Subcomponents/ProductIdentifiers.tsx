import React from 'react';

function ProductIdentifiers({product, styles}) {
  function priceChecker(currentStyle) {
    if (currentStyle.sale_price === null) {
      return (
        <p className="price">
          $
          {currentStyle.original_price}
        </p>
      );
    }
    return (
      <p className="price">
        <span className="original-price">
          $
          {currentStyle.original_price}
        </span>
        $
        {currentStyle.sale_price}
      </p>
    );
  }
  return (
    <div>
      <h4>{product.category}</h4>
      <h2>{product.name}</h2>
      {priceChecker(styles[7])}
      <h4>{product.slogan}</h4>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductIdentifiers;
