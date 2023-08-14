import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';
import Sorting from './Sorting';
import NewReviewForm from './NewReviewForm';

function ReviewsList({ filteredReviews, filters, getReviewsMeta }) {
  // console.log('filteredReviews: ', filteredReviews);
  let moreButton;
  const [listLength, setListLength] = useState(2);
  const [aForm, setAForm] = useState(false);
  const [sortedFilteredReviews, setSortedFilteredReviews] = useState(filteredReviews);

  // create this function to allow child components to update sortedFilteredReviews
  const updateSetSortedFilteredReviews = (sortedArray) => {
    setSortedFilteredReviews(sortedArray);
  };

  // this is used to re-render the list when filteres from rating breakdown are applied
  useEffect(() => {
    setSortedFilteredReviews(filteredReviews);
  }, [filters]);

  // renders 2 review tiles at a time using .slice and the listLength state
  const reviewTile = () => {
    // console.log('reviewTile is re-rendering');
    return sortedFilteredReviews.map((review) =>
    <div key={review.review_id}><ReviewTile review={review} /></div>).slice(0, listLength);
  };

  // increases listLength by 2, in turn rendering two more elements
  const handleClick = () => {
    const prevLength = listLength;
    setListLength(prevLength + 2);
  };

  // decides whether or not button should be rendered based on length of results
  if (sortedFilteredReviews.length > 2) {
    moreButton = <button className="moreReviewsButton" type="button" onClick={handleClick}>More Reviews</button>;
  } else {
    moreButton = null;
  }

  const addReviewButton = () => <button type="button" id="add-answer-btn" onClick={() => setAForm(true)} >Add Review</button>

  return (
    <div className="reviewsList">
      <h2>Reviews List</h2>
      {/* TESTING ONLY <NewReviewForm setAForm={setAForm} getReviewsMeta={getReviewsMeta} /> */}
      <Sorting sortedFilteredReviews={sortedFilteredReviews} updateSetSortedFilteredReviews={updateSetSortedFilteredReviews} />
      {reviewTile()}
      {moreButton}
      {addReviewButton()}
      { aForm ? (<NewReviewForm setAForm={setAForm} getReviewsMeta={getReviewsMeta}/>) : null}
    </div>
  );
}

export default ReviewsList;
