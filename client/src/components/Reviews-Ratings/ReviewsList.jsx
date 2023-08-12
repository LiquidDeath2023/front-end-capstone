import React, { useState } from 'react';
import ReviewTile from './ReviewTile';
import Sorting from './Sorting';

<<<<<<< HEAD
// test -delete later

function ReviewsList({ getReviewsData }) {
=======
function ReviewsList({ getReviewsData, filters }) {
>>>>>>> a1ded3d (committing before branch changes)
  let moreButton;
  const [listLength, setListLength] = useState(2);

  // renders 2 review tiles at a time using .slice and the listLength state
  const reviewTile = getReviewsData.results.map((review) =>
    <div key={review.review_id}><ReviewTile review={review}/></div>).slice(0, listLength);

  // increases listLength by 2, in turn rendering two more elements
  const handleClick = () => {
    const prevLength = listLength;
    setListLength(prevLength + 2);
  };

  // decides whether or not button should be rendered based on length of results
  if (getReviewsData.results.length > 2) {
    moreButton = <button className="moreReviewsButton" type="button" onClick={handleClick}>More Reviews</button>;
  } else {
    moreButton = <div></div>;
  }
  return (
    <div className="reviewsList">
      <h2>Reviews List</h2>
      <Sorting getReviewsData={getReviewsData} />
      {reviewTile}
      {/* <div>Individual Review Tile</div> */}
      {moreButton}
      {/* <div>Add Review</div> */}
    </div>
  );
}

export default ReviewsList;
