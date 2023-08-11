import React from 'react';
import { useState } from 'react';

// test for commit

import { getReviewsMeta } from './exampleData.js'; // putting this here to until master updated with prev changes

function BreakdownComp({filters, updateFilters}) {
  // data comes from getReviewsMeta

  const filterByRatings = (key) => {
    key = Number(key);
    let prevFilters = filters.ratings;
    let indexOfKey = prevFilters.indexOf(key);

    // this either adds or removes a filter based on current filters
    if (indexOfKey === -1) {
      prevFilters.push(key);
    } else {
      prevFilters.splice(indexOfKey, 1);
    }
    updateFilters({ ratings: prevFilters });
  };

  // sum helper function
  const sumHelper = (array) => {
    let sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  };

  // this function generates the average breakdown bars
  const generateObj = () => {
    const result = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0};
    // update result object w/ actual values
    for (var key in getReviewsMeta.ratings) {
      result[key] = getReviewsMeta.ratings[key];
    };

    // calculate sum of ratings to use later
    let sum = sumHelper(Object.values(result));

    // map jsx and calculate percentage for each review
    return Object.keys(result).map((key) => (
      <div className="breakdownRating">
        <div id="breakdownLabel" onClick={() => filterByRatings(key)}>{key} stars</div>
        <progress id="breakdownBar" max="1" value={result[key] / sum}>a bar</progress>
      </div>
    ));
  };

  // clears all filters
  const resetFilters = () => {
    updateFilters({ ratings: [] });
  };

  // renders a list of applied filters
  const filtersApplied = () => {
    const ratingsDivs = filters.ratings.map((filter) => <div>{filter + ' stars'}</div>);
    return (
      <div>
        Filters Applied:
        <div>{ratingsDivs}</div>
        <button onClick={resetFilters} type="button">Reset Filters</button>
      </div>
    );
  };

  // render jsx
  return (
    <div className="actualBreakdown">
      {generateObj()}
      {filters.ratings.length > 0 ? filtersApplied() : <div></div>}
    </div>
  );
}

export default BreakdownComp;
