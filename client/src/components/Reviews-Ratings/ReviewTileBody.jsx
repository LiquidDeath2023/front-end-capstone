import React, { useState }  from 'react';

function ReviewTileBody({review}) {
  const reviewLen = review.body.length;
  const [expandBody, setExpandBody] = useState(reviewLen > 250);
  const [buttonText, setButtonText] = useState('Show More');

  // expand body of review with button, utilizes expandBody state
  const helpExpandBody = () => {
    if (buttonText === 'Show More') {
      setButtonText('Show Less');
    } else {
      setButtonText('Show More');
    }
    setExpandBody(!expandBody);
  };

  // if body > 250 characters, truncate it
  const renderBodyText = () => {
    if (expandBody) {
      return review.body.slice(0, 247) + "...";
    }
    return review.body;
  };

  // render showMoreButton only if body has to be truncated
  const showMoreButton = () => {
    if (reviewLen > 250) {
      return <button className="expandReviewTextButton" onClick={helpExpandBody} type="button">{buttonText}</button>;
    }
    return null;
  };

  // map photos into review body. will add onto this at later time
  const renderPhotos = () => review.photos.map((photo) => <img className="reviewPhotos" src={photo.url}/>);

  return (
    <div className="reviewBody">
      <div className="reviewBodyText">{renderBodyText()}</div>
      {showMoreButton()}
      {renderPhotos()}
    </div>
  );
}

export default ReviewTileBody;
