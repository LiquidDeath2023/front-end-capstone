import React from 'react';
import './ReviewsRatings.css';
import ReviewsList from './ReviewsList';
import RatingBreakdown from './RatingBreakdown';

function ReviewsRatings() {
  console.log('hello world');
  return (
    <div className="ratingsReviewsContainer">
      <h2>Summary Component</h2>
      <ReviewsList />
      {/* <RatingBreakdown /> */}
    </div>
  );
}

export default ReviewsRatings;
