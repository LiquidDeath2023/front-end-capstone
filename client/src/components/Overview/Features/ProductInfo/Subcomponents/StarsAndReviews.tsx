import React from 'react';

function StarsAndReviews({reviews}) {
  function reviewAvg() {
    let total = 0;
    reviews.results.forEach((review) => {
      total += review.rating;
    });
    const average = total / reviews.results.length;
    return average;
  }
  // if u get 3.8, should be 3 stars and 80% of last star
  const stars = () => {
    const string = 'hello';
    return string;
  };
  return (
    <div>
      <i className="star fa-regular fa-star" />
      <h4>1 1 1 0.75 0 Read all reviews</h4>
    </div>
  );
}

export default StarsAndReviews;
