import React from 'react';

function ReviewTile() {
  return (
    <div className="reviewTile">
      {/* <h2>Review Tile</h2> */}
      <div className="starRating">Star Rating</div>
      <div className="reviewDate">Date of Review</div>
      <div className="reviewSummary">Review Summary</div>
      <div className="reviewBody">Review Body</div>
      <div className="reviewRec">Recommend</div>
      <div className="reviewerName">Reviewer Name</div>
      <div className="reviewResponse">Response to Review</div>
      <div className="reviewHelpfulness">Rating Helpfulness</div>
    </div>
  );
}

export default ReviewTile;
