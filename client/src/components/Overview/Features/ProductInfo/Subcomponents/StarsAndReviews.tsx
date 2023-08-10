import React from 'react';

function StarsAndReviews({reviews}) {
  function reviewAvgs({reviews}) {
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
  // finds average of reviews
  function reviewAvg() {
    let total = 0;
    reviews.results.forEach((review) => {
      total += review.rating;
    });
    const average = total / reviews.results.length;
    return average;
  }
  // creates stars
  const reviewStars = () => {
    const average = reviewAvg();
    const stars = [];
    for (let i = 0; i < Math.floor(average); i++) {
      stars.push(<i className="star fa-regular fa-star" />);
    }
    if (average - Math.floor(average) > 0) {
      const percent = (average - Math.floor(average)) * 100;
      stars.push(<i className="star fa-regular fa-star" style={{ width: percent }} />);
    }
    return stars;
  };
  return (
    <div>
      {reviewStars()}
      <h4>Read all reviews</h4>
    </div>
  );
}

export default StarsAndReviews;
