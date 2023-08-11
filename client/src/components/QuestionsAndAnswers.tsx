import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuestionsAndAnswers.css';
import ExpandAndAdd from './Questions-Answers/ExpandAndAdd';
import QuestionList from './Questions-Answers/QuestionList';

function QuestionsAndAnswers() {
  const [questionsDatabase, setQuestionsDatabase] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState([]);
  const [questions, setQuestions] = useState([]);

  const realQuestionsFetcher = () => {
    axios.get('/qa/questions')
      .then((res) => {
        const triple = res.data.results;
        // const triple = res.data.results
        //   .concat(res.data.results)
        //   .concat(res.data.results);

        setQuestionsDatabase(triple);
        setNumOfQuestions([4, triple.length]);
        setQuestions(triple.slice(0, 4));
      })
      .catch(() => console.log('err obtaining questions'));
  };

  useEffect(() => {
    realQuestionsFetcher();
  }, []);

  useEffect(() => {
    setQuestions(questionsDatabase.slice(0, numOfQuestions[0]));
  }, [numOfQuestions]);

  return (
    <div className="qa-main-container">
      <div>QUESTIONS & ANSWERS</div>
      <div>SEARCH COMPONENT HIDDEN</div>
      {/* <Search filterQs={filterQs} /> */}
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



