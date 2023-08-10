import React from 'react';
import './ReviewsRatings.css';
import ReviewList from './ReviewsList';
import RatingBreakdown from './RatingBreakdown';

import { getReviewsData, getReviewsMeta } from './exampleData.js';

function ReviewsRatings() {
  // console.log({getReviewsData: getReviewsData, getReviewsMeta: getReviewsMeta});
  return (
    <div className="ratingsreviews-container">
      <ReviewList getReviewsData={getReviewsData} />
      {/* <div>Hello World?</div> */}
      {/* <RatingBreakdown /> */}
    </div>
  );
}

export default ReviewsRatings;
