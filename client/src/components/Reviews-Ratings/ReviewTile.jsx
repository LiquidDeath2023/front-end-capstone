import React from 'react';
import { useState } from 'react';
import ReviewTileBody from './ReviewTileBody';

function ReviewTile({review}) {

  function renderStarRating(rating) {
    let star = '⭐';
    let result = '';

    let numberOfFullStars = Math.trunc(rating);
    let decimal = rating % 1;
    let numberOfPartialStars = (Math.round(decimal * 4) / 4).toFixed(2);

    result = star.repeat(numberOfFullStars) /*+ numberOfPartialStars*/;
    return result;
  }

  const starRating = renderStarRating(review.rating);

  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const reviewSummary = () => {
    if (review.summary.length > 60) {
      return review.summary.slice(0, 57) + "...";
    }
    return review.summary;
  };



  return (
    <div className="reviewTile">
      {/* <h2>Review Tile</h2> */}
      <div className="starRating">{starRating}</div>
      <div className="reviewDate">{formattedDate}</div>
      <div className="reviewSummary">{reviewSummary()}</div>
      <ReviewTileBody review={review}/>
      <div className="reviewRec">{review.recommend}</div>
      <div className="reviewerName">{review.reviewer_name}</div>
      <div className="reviewResponse">{review.response}</div>
      <div className="reviewHelpfulness">{review.helpfulness}</div>
    </div>
  );
}

export default ReviewTile;
