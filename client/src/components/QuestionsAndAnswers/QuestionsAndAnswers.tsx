import React, { useState } from 'react';
import './qa-styles/QuestionsAndAnswers.styles.css';
import Search from './Features/Search/Search';
import ExpandAndAdd from './Features/ExpandAndAdd/ExpandAndAdd';
import QuestionList from './Features/Questions/QuestionList';

function QuestionsAndAnswers({ currProductId, currProductName }) {
  const [displayMore, setDisplayMore] = useState(true);
  const [numOfQuestions, setNumOfQuestions] = useState(2);
  const [query, setQuery] = useState('');

  const [triggor, setTriggor] = useState(false);

  return (
    <div className="qa-main-container">
      <h2 id="qa-main-title" className="h-[5vh] text-[2rem]">QUESTIONS & ANSWERS</h2>
      <Search setQuery={setQuery} />
      <QuestionList
        setDisplayMore={setDisplayMore}
        numOfQuestions={numOfQuestions}
        query={query}
        currProductName={currProductName}
        currProductId={currProductId}
        triggor={triggor} />
      <ExpandAndAdd
        displayMore={displayMore}
        setNumOfQuestions={setNumOfQuestions}
        currProductName={currProductName}
        currProductId={currProductId}
        setTriggor={setTriggor}
      />
    </div>
  );
}

export default QuestionsAndAnswers;