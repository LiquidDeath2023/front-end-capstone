import React from 'react';
import { useState } from 'react';
import ReviewTile from './ReviewTile';

function ReviewsList({ getReviewsData }) {
  let moreButton;
  // console.log(getReviewsData);
  const [listLength, setListLength] = useState(2);
  // const [toggleMoreButton, setToggleMoreButton] = useState(false);

  const reviewTile = getReviewsData.results.map((review) =>
    <div key={review.review_id}><ReviewTile review={review}/></div>).slice(0, listLength);

  const handleClick = () => {
    const prevLength = listLength;
    setListLength(prevLength + 2);
    console.log('click');
  };

  if (getReviewsData.results.length > 2) {
    moreButton = <button className="moreReviewsButton" type="button" onClick={handleClick}>More Reviews</button>;
  } else {
    moreButton = <div>emptyButton</div>;
  }
  return (
    <div className="reviewsList">
      <h2>Reviews List</h2>
      {/* <div>Sorting</div> */}
      {reviewTile}
      {/* <div>Individual Review Tile</div> */}
      {moreButton}
      {/* <div>Add Review</div> */}
    </div>
  );
}

export default ReviewsList;
