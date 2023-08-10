import React, { useState, useEffect } from 'react';
import './QuestionsAndAnswers.css';
import Search from './Questions-Answers/Search';
import QandA from './Questions-Answers/QandA';
import ExpandAndAdd from './Questions-Answers/ExpandAndAdd';

function QuestionsAndAnswers() {
  const [numOfQuestions, setNumOfQuestions] = useState(4);
  const [loadQuestions, setLoadQuestions] = React.useState(true);
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    setFakeData(listOfQuestions.slice(0, numOfQuestions));
  }, [numOfQuestions]);
  // console.log(listOfQuestions);
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

  const filterQs = (query) => {
    // only checks question edit for answers later
    // try to reset search to 4 at a time;
    const filtered = listOfQuestions.filter(question => question.question_body.toLowerCase().includes(query.toLowerCase()));

    if (query.length >= 3) {
      setFakeData(filtered);
    } else {
      setFakeData(listOfQuestions);
    }
  };

  return (
    <div className="qa-main-container">
      <div>QUESTIONS & ANSWERS</div>
      <Search />
      <QandA />
      <ExpandAndAdd />
    </div>
  );

}

export default QuestionsAndAnswers
