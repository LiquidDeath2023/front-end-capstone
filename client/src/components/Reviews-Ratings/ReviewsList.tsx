import React from 'react';
import { useState } from 'react';

function ReviewsList({ getReviewsData }) {
  console.log(getReviewsData);
  const [listLength, setListLength] = useState(2);
  const [visibleList, setVisibleList] = useState(getReviewsData.results.slice(0, listLength));

  console.log('visibleList', visibleList);

  const reviewTile = getReviewsData.results.map((review) =><div key={review.review_id}>review.rating</div>).slice(0, listLength);

  return (
    <div className="reviewsList">
      <h2>Reviews List</h2>
      {/* <div>Sorting</div> */}
      {reviewTile}
      {/* <div>Individual Review Tile</div> */}
      {/* <div>More Reviews</div>
      <div>Add Review</div> */}
    </div>
  );
}

export default ReviewsList;
