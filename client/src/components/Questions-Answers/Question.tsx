import React, { useState } from 'react';
import axios from 'axios';
import Answer from './Answer';
import utils from './Helpers/helpers';
import calls from './Helpers/fetchers';

const getAnswers = calls.answersFetcher;

function Question({ question }) {
  const [answersDatabase, setAnswersDatabase] = useState([]);
  const [numOfAnswers, setNumOfAnswers] = React.useState([]);
  const [answers, setAnswers] = useState([]);

  const [more, setMore] = useState(true);

  const { question_helpfulness } = question;
  const [helpfulness, setHelpfulness] = useState([question_helpfulness, false]);

  React.useEffect(() => {
    // eslint-disable-next-line max-len
    getAnswers(setAnswersDatabase, answersDatabase, setNumOfAnswers, numOfAnswers, setAnswers, question);
  }, []);

  React.useEffect(() => {
    setAnswers(answersDatabase.slice(0, numOfAnswers[0]));
  }, [numOfAnswers]);

  const expandOrCollapse = () => {
    if (more) {
      setMore(!utils.expand(numOfAnswers, setNumOfAnswers));
    } else {
      setMore(utils.collapse(setNumOfAnswers, 2));
    }
  };

  const expandOrCollapseButtons = () => {
    if (numOfAnswers[1] > 2) {
      if (more) {
        return <button className="expand-answers-btn" type="button" onClick={expandOrCollapse}>LOAD MORE ANSWERS</button>;
      }
      return <button className="expand-answers-btn" type="button" onClick={expandOrCollapse}>COLLAPSE ANSWERS</button>;
    }
  };

  const addHelpfulness = () => {
    if (!helpfulness[1]) {
      setHelpfulness([helpfulness[0] + 1, true]);
    }
  };

  const addAnswerModule = () => {
    console.log('ADD ANSWER FORM HERE');
  };

  return (
    <div className="question-container">
      <div className="question-title-container">
        <div>
          {`Q: ${question.question_body}`}
        </div>
        <div>
          {'Helpful? '}
          <button type="button" id="question-yes" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
          {` (${helpfulness[0]}) | `}
          <button type="button" id="add-answer-btn" onClick={() => addAnswerModule()} onKeyDown={() => addAnswerModule()}>Add Answer</button>
        </div>
      </div>
      {
        answers.map((answer) => <Answer answer={answer} key={answer.answer_id} />)
      }
      {
        expandOrCollapseButtons()
      }
    </div>
  );
}

export default Question;
