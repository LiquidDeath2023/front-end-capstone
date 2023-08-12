import React from 'react';
import StarsAndReviews from './Subcomponents/StarsAndReviews';
import ProductIdentifiers from './Subcomponents/ProductIdentifiers';
import Sharing from './Subcomponents/Sharing';

function ProductInfo({product, reviews, styles}) {
  return (
    <div className="product-info-container">
      <StarsAndReviews reviews={reviews} />
      <ProductIdentifiers product={product} styles={styles} />
      <Sharing />
    </div>
  );
}

export default ProductInfo;
