import React from 'react';
import ProductInfo from './Features/ProductInfo';
import StyleSelector from './Features/StyleSelector';
import ImageGallery from './Features/ImageGallery';
import AddCart from './Features/AddCart';
import './OverviewStyles.css';
import { product, productStyles, productReviews } from './ExampleData';

function Overview() {
  return (
    <div className="overview-container">
      <ImageGallery />
      <ProductInfo product={product} styles={productStyles} reviews={productReviews} />
      <StyleSelector />
      <AddCart />
    </div>
  );
}

export default Overview;
