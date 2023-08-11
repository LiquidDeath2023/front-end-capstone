import React from 'react';
import Image from './Subcomponents/Image';

function ImageGallery({styles}) {
  return (
    <div className="image-gallery-container">
      <Image styles={styles} />
    </div>
  );
}

export default ImageGallery;
