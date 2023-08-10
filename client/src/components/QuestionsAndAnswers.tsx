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
import './QuestionsAndAnswers.css';
import Search from './Questions-Answers/Search';
import QandA from './Questions-Answers/QandA';

function QuestionsAndAnswers() {
  return (
    <div className="main-QandA-container">
      <div>QUESTIONS & ANSWERS</div>
      <Search />
      <QandA />
      <div>EXPAND QUESTIONS / ADD QUESTIONS COMPONENT</div>
    </div>
  );
>>>>>>> origin/master
}

export default QuestionsAndAnswers
