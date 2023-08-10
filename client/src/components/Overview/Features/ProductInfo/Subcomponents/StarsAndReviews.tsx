import React from 'react';

function StarsAndReviews({reviews}) {
  // finds average of reviews
  function reviewAvg() {
    let total = 0;
    reviews.results.forEach((review) => {
      total += review.rating;
    });
    const average = total / reviews.results.length;
    console.log(average);
    return average;
  }
  // creates stars
  const reviewStars = (num) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(num)) {
        stars.push(<i className="star fa-regular fa-star" />);
      } else if (i - Math.floor(num) < 1) {
        const percent = (num - Math.floor(num)) * 100;
        stars.push(<i className="star fa-regular fa-star" style={{ width: percent }} />);
      } else {
        stars.push(<i className="empty-star fa-regular fa-star" />);
      }
    }
    return stars;
  };
  return (
    <div>
      <div className="star-container">
        {reviewStars(reviewAvg())}
      </div>
      <h4>Read all reviews</h4>
    </div>
  );
}

export default StarsAndReviews;
