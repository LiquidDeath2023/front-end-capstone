import React from 'react';
import { useState } from 'react';
import ReviewTileBody from './ReviewTileBody';

function ReviewTile({review}) {
  // credit to Khurram for these helpfulness/report states!
  const [helpfulness, setHelpfulness] = useState([review.helpfulness, false]);
  const [report, setReport] = useState(['Report', false]);

  const addHelpfulness = () => {
    if (!helpfulness[1]) {
      setHelpfulness([helpfulness[0] + 1, true]);
    }
  };

  const reportFunction = () => {
    if (!report[1]) {
      setReport(['Reported', true]);
    }
  };

  // function renderStarRating(rating) {
  //   let star = '⭐';
  //   let result = '';

  //   let numberOfFullStars = Math.trunc(rating);
  //   let decimal = rating % 1;
  //   let numberOfPartialStars = (Math.round(decimal * 4) / 4).toFixed(2);

  //   result = star.repeat(numberOfFullStars) /*+ numberOfPartialStars*/;
  //   return result;
  // }

  // const starRating = renderStarRating(review.rating);

  // format dates properly
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // if summary > 60 characters, truncate it
  const reviewSummary = () => {
    if (review.summary.length > 60) {
      return review.summary.slice(0, 57) + "...";
    }
    return review.summary;
  };

  // based on whether product recommended, render element
  const reviewRecommend = () => {
    if (review.recommend) {
      // console.log('true');
      return <div>✔️ I recommend this product</div>;
    }
    return <div></div>;
  };

  return (
    <div className="reviewTile">
      {/* <h2>Review Tile</h2> */}
      <div className="starRating">⭐⭐⭐</div>
      <div className="reviewDate">{formattedDate}</div>
      <div className="reviewSummary">{reviewSummary()}</div>
      <ReviewTileBody review={review}/>
      <div className="reviewRec">{reviewRecommend()}</div>
      <div className="reviewerName">{review.reviewer_name}</div>
      <div className="reviewResponse">Response from seller: {review.response}</div>
      <div className="reviewHelpfulness">
        {`Helpful? `}
        <button type="button" id="helpfulButton" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
        {` (${helpfulness[0]}) | `}
        <button type="button" id="reportButton" onClick={() => reportFunction()} onKeyDown={() => reportFunction()}>{report[0]}</button>
      </div>
    </div>
  );
}

export default ReviewTile;
