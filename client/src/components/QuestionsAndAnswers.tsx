<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
>>>>>>> a4ddec7 (completed clickables)
import './QuestionsAndAnswers.css';
// import Search from './Questions-Answers/Search';
import QandA from './Questions-Answers/QandA';
import ExpandAndAdd from './Questions-Answers/ExpandAndAdd';
import myData from './Questions-Answers/Helpers/fakeData';
import utils from './Questions-Answers/Helpers/helpers';

const listOfQuestions = myData.fakeData.results.sort(utils.compare('question_helpfulness'));
const A = listOfQuestions.length;

function QuestionsAndAnswers() {
  const [numOfQuestions, setNumOfQuestions] = useState(4);
  const [loadQuestions, setLoadQuestions] = React.useState(true);
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    setFakeData(listOfQuestions.slice(0, numOfQuestions));
  }, [numOfQuestions]);
  console.log(listOfQuestions);
  const add2 = () => {
    setNumOfQuestions(numOfQuestions + 2);
    if (numOfQuestions + 2 >= A) {
      setLoadQuestions(false);
    }
  };

  const collapse = () => {
    setNumOfQuestions(4);
    setLoadQuestions(true);
  };

  return (
    <div className="qa-main-container">
      <div>QUESTIONS & ANSWERS</div>
      <div>SEARCH COMPONENT HIDDEN</div>
      {/* <Search /> */}
      <QandA fakeData={fakeData} />
      <ExpandAndAdd add2={add2} collapse={collapse} loadQuestions={loadQuestions} />
      {/* <div>EXPAND AND ADD COMPONENT HIDDEN</div> */}
    </div>
  );
>>>>>>> origin/master
}

export default QuestionsAndAnswers
