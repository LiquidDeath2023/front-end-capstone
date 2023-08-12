// THIS IS THE TOP COMPONENT FOR ALL REVIEWS AND RATINGS SECTION

import React, { useState } from 'react';
// import { useState } from 'react';
import './ReviewsRatings.css';
import ReviewList from './ReviewsList';
import RatingBreakdown from './RatingBreakdown';

import { getReviewsData, getReviewsMeta } from './exampleData.js';

function ReviewsRatings() {
  const [filters, setFilters] = useState({ ratings: [] });

  const updateFilters = (obj) => {
    setFilters(obj);
  };

  return (
    <div className="ratingsReviewsContainer" id="ratingsReviewsContainerId">
      <ReviewList getReviewsData={getReviewsData} filters={filters} />
      <RatingBreakdown filters={filters} updateFilters={updateFilters} />
    </div>
  );
}

export default ReviewsRatings;
