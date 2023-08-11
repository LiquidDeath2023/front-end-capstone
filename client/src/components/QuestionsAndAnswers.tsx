<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import './QuestionsAndAnswers.css'

function QuestionsAndAnswers() {
    return (
        <div className="q-and-a-container">
            <div>QUESTIONS & ANSWERS</div>
            <div>SEARCH BAR COMPONENT</div>
            <div>QUESTIONS AND ANSWERS COMPONENT</div>
            <div>EXPAND QUESTIONS / ADD QUESTIONS COMPONENT</div>
        </div>
    )
=======
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 5f70872 (added fake data modeling from api)
import './QuestionsAndAnswers.css';
// import Search from './Questions-Answers/Search';
import QandA from './Questions-Answers/QandA';
// import ExpandAndAdd from './Questions-Answers/ExpandAndAdd';
import myData from './Questions-Answers/Helpers/fakeData';

function QuestionsAndAnswers() {
  const [fakeData, setFakeData] = useState(myData.fakeData);

  return (
    <div className="qa-main-container">
      <div>QUESTIONS & ANSWERS</div>
      <div>SEARCH COMPONENT HIDDEN</div>
      {/* <Search /> */}
      <QandA fakeData={fakeData} />
      {/* <ExpandAndAdd /> */}
      <div>EXPAND AND ADD COMPONENT HIDDEN</div>
    </div>
  );
>>>>>>> origin/master
}

export default QuestionsAndAnswers
