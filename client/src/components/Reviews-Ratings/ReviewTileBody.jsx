import React from 'react';
import {useState} from 'react';

function ReviewTileBody({review}) {
  const [expandBody, setExpandBody] = useState(review.body.length > 250);

  const helpExpandBody = () => {
    console.log('expanding text...');
    setExpandBody(!expandBody);
  };

  const renderBodyText = () => {
    if (expandBody) {
      return (
        <div>
          <div>{review.body.slice(0, review.body.length - 3) + "..."}</div>
          <button onClick={helpExpandBody} type="button">Show More</button>
        </div>
      );
    }
    return (
      <div>{review.body}</div>
    );
  };

  const renderPhotos = () => {
    return review.photos.map((photo) => <img className="reviewPhotos" src={photo.url}/>);
  };

  return (
    <div className="reviewBody">
      <div className="reviewBodyText">{renderBodyText()}</div>
      {/* {renderPhotos()} */}
    </div>
  );
}

export default ReviewTileBody;
