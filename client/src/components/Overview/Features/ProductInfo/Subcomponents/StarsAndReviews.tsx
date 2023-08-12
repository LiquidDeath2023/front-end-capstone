import React from 'react';

function StarsAndReviews({reviews}) {
  // finds average of reviews
  function reviewAvg() {
    let total = 0;
    reviews.forEach((review) => {
      total += review.rating;
    });
    const average = total / reviews.length;
    return average;
  }
  // "rounding", using 0.65 and 0.35 for more noticeable impact
  function quarterRound(num) {
    let quarters;
    if (num > 0.625) {
      quarters = 0.65;
    } else if (num > 0.375) {
      quarters = 0.5;
    } else {
      quarters = 0.35;
    }
    return quarters;
  }
  // creates stars
  const reviewStars = (reviewScore) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(reviewScore)) {
        stars.push(<i key={i} className="star fa-regular fa-star" />);
      } else if (i - Math.floor(reviewScore) < 1 && i - reviewScore !== 0) {
        // using base fa-star fontsize (18px)
        const percent = (quarterRound((reviewScore - Math.floor(reviewScore))) * 18);
        stars.push(<i key={i} className="star fa-regular fa-star" style={{ width: percent, marginRight: 18 - percent }} />);
      } else {
        stars.push(<i key={i} className="empty-star fa-regular fa-star" />);
      }
    }
    return (
      <div className="stars">{stars}</div>
    );
  };
  return (
    <div className="stars-reviews">
      <div className="stars-container">
        {reviewStars(reviewAvg())}
      </div>
      <span className="reviews">
        <a className="review-scroll" href="#ratingsReviewsContainerId">Read all reviews</a>
      </span>
    </div>
  );
}

export default StarsAndReviews;
