import React from 'react';

function ReviewTile({review}) {
  console.log('hello world');
  function renderStarRating(rating) {
    let star = '⭐';
    let result = '';

    let numberOfFullStars = Math.trunc(rating);
    let decimal = rating % 1;
    let numberOfPartialStars = (Math.round(decimal * 4) / 4).toFixed(2);


    result = star.repeat(numberOfFullStars) + numberOfPartialStars;
    console.log(result);
  }

  renderStarRating(3.76);

  return (
    <div className="reviewTile">
      {/* <h2>Review Tile</h2> */}
      <div className="starRating">***</div>
      <div className="reviewDate">{review.date}</div>
      <div className="reviewSummary">{review.summary}</div>
      <div className="reviewBody">{review.body}</div>
      <div className="reviewRec">{review.recommend}</div>
      <div className="reviewerName">{review.reviewer_name}</div>
      <div className="reviewResponse">{review.response}</div>
      <div className="reviewHelpfulness">{review.helpfulness}</div>
    </div>
  );
}

export default ReviewTile;
