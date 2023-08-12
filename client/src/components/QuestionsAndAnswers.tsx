import React, { useState, useEffect } from 'react';
import './QuestionsAndAnswers.css';
import Search from './Questions-Answers/Search';
import ExpandAndAdd from './Questions-Answers/ExpandAndAdd';
import QuestionList from './Questions-Answers/QuestionList';
import utils from './Questions-Answers/Helpers/helpers';
import calls from './Questions-Answers/Helpers/fetchers';

const getQuestions = calls.questionsFetcher;

function QuestionsAndAnswers() {
  const [questionsDatabase, setQuestionsDatabase] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions(setQuestionsDatabase, questionsDatabase, setNumOfQuestions, numOfQuestions, setQuestions);
  }, []);

  useEffect(() => {
    setQuestions(questionsDatabase.slice(0, numOfQuestions[0]));
  }, [numOfQuestions]);

  // currently filtering from local database
  const filterQuestions = (query) => {
    if (query.length >= 3) {
      setQuestions(utils.search(questionsDatabase, query));
    } else {
      setNumOfQuestions([4, questionsDatabase.length]);
    }
  };

  return (
    <div className="qa-main-container">
      <h2>QUESTIONS & ANSWERS</h2>
      <Search filterQuestions={filterQuestions} />
      <QuestionList questions={questions} />
      <ExpandAndAdd
        numOfQuestions={numOfQuestions}
        setNumOfQuestions={setNumOfQuestions}
      />
    </div>
  );

}

export default QuestionsAndAnswers;

// IGNORANCE IS BLISS

// import Search from './Questions-Answers/Search';

  // const filterQs = (query) => {
  //   // only checks question edit for answers later
  //   // try to reset search to 4 at a time;
  //   // const filtered = listOfQuestions.filter(question => question.question_body.toLowerCase().includes(query.toLowerCase()));
  //   const filtered = questionsDatabase.filter(question => question.question_body.toLowerCase().includes(query.toLowerCase()));

  //   if (query.length >= 3) {
  //     setRealData(filtered);
  //     // setFakeData(filtered);
  //   } else {
  //     // setFakeData(listOfQuestions);
  //     setRealData(listOfQuestions);
  //   }
  // };



