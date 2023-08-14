// THIS IS THE TOP COMPONENT FOR ALL REVIEWS AND RATINGS SECTION

import React, { useState } from 'react';
import './ReviewsRatings.css';
import ReviewsList from './ReviewsList';
import RatingBreakdown from './RatingBreakdown';

import { getReviewsData, getReviewsMeta } from './exampleData.js';

function ReviewsRatings() {
  const [filters, setFilters] = useState({ ratings: [] });
  const updateFilters = (obj) => {
    // console.log('hello from top level! ', obj);
    setFilters(obj);
  };

  const reviews = getReviewsData.results;

  const filteredReviews = reviews.filter((review) => filters.ratings.indexOf(review.rating) !== -1 || filters.ratings.length === 0);

  return (
    <div className="ratingsReviewsContainer" id="ratingsReviewsContainerId">
      <ReviewsList filteredReviews={filteredReviews} filters={filters} getReviewsMeta={getReviewsMeta}/>
      {/* <RatingBreakdown filters={filters} updateFilters={updateFilters} /> */}
    </div>
  );
}

export default ReviewsRatings;
