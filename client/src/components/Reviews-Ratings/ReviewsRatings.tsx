import React from 'react';
import './ReviewsRatings.css';
import ReviewsList from './ReviewsList';

function ReviewsRatings() {
  console.log('hello world');
  return (
    <div className="ratingsReviewsContainer">
      <div>Summary Component</div>
      <ReviewsList />
    </div>
  );
}

export default ReviewsRatings;
