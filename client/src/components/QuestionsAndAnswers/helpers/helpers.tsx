import React from 'react';

// here lies the helpers

const compare = (identifier) =>
  (a, b) => {
    if (a[identifier] < b[identifier]) {
      return 1;
    }
    if (a[identifier] > b[identifier]) {
      return -1;
    }
    return 0;
  };

const sortSellers = (sortedAnswers) => {
  const Sellers = sortedAnswers.filter(answer => answer.answerer_name === 'Seller');
  const nonSellers = sortedAnswers.filter(answer => answer.answerer_name !== 'Seller');

  return Sellers.concat(nonSellers);
}

const expandAnswers = (answersDatabase, setAnswers, shouldExpand) => {
  if (shouldExpand) {
    setAnswers(answersDatabase);
  } else {
    setAnswers(answersDatabase.slice(0, 2));
  }
  return !shouldExpand;
};

const highlighter = (bodyToHighlight, indexToHighlight, queryLength) {
  return (<>
    {bodyToHighlight.slice(0, indexToHighlight)}
    <span className='bg-[#FFEBB7]'>{bodyToHighlight.slice(indexToHighlight, indexToHighlight + queryLength)}</span>
    {bodyToHighlight.slice(indexToHighlight + queryLength)}
  </>);
}




export default { expandAnswers, compare, sortSellers, highlighter };
