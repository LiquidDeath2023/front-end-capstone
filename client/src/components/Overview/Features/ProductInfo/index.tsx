import React from 'react';
import StarsAndReviews from './Subcomponents/StarsAndReviews';
import ProductIdentifiers from './Subcomponents/ProductIdentifiers';
import Sharing from './Subcomponents/Sharing';

function ProductInfo() {
  return (
    <div>
      <h2>Hello Product Info!</h2>
      <StarsAndReviews />
      <ProductIdentifiers />
      <Sharing />
    </div>
  );
}

export default ProductInfo;
