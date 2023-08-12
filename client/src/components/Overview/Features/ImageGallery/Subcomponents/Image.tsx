import React from 'react';

function Image({styles}) {
  return (
    <div className="default-image-container">
      <img className="default-image" src={styles[1].photos[0].url} alt={styles[1].name} />
      <h4>Big picture with little pictures</h4>
    </div>
  );
}

export default Image;
