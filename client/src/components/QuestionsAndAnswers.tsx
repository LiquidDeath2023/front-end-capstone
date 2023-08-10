import React, { useState } from 'react';
import './QuestionsAndAnswers.css';
import Search from './Questions-Answers/Search';
import QandA from './Questions-Answers/QandA';
import ExpandAndAdd from './Questions-Answers/ExpandAndAdd';
import myFakeData from './Questions-Answers/fakeData';

function QuestionsAndAnswers() {
  const [fakeData, setFakeData] = useState(myFakeData.fakeData);

  return (
    <div className="qa-main-container">
      <div>QUESTIONS & ANSWERS</div>
      <Search />
      <QandA fakeData={fakeData} />
      <ExpandAndAdd />
    </div>
  );

}

export default QuestionsAndAnswers
