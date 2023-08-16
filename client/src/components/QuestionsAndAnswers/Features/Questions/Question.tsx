import React, { useState } from 'react';
import axios from 'axios';
import Answer from '../Answers/Answer';
import utils from '../../helpers/helpers';
import requests from '../../helpers/requests';
import AnswerForm from '../Forms/AnswerForm';

function Question({ question, currProductName, query }) {
  const [answersDatabase, setAnswersDatabase] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [more, setMore] = useState(true);
  const [aForm, setAForm] = useState(false);

  const { question_helpfulness } = question;
  const [helpfulness, setHelpfulness] = useState([question_helpfulness, false]);

  React.useEffect(() => {
    axios.get(`/qa/questions/${question.question_id}/answers`)
      .then((res) => res.data.sort(utils.compare('helpfulness')))
      .then((sortedHelpfulness) => utils.sortSellers(sortedHelpfulness))
      .then((sortedSellers) => {
        setAnswersDatabase(sortedSellers);
        setAnswers(sortedSellers.slice(0, 2));
      });
  }, []);

  const expandOrCollapse = () => {
    setMore(utils.expandAnswers(answersDatabase, setAnswers, more));
  };

  const expandOrCollapseButtons = () => {
    if (answersDatabase.length > 2) {
      if (more) {
        return <button className="expand-answers-btn self-start" type="button" onClick={expandOrCollapse}>LOAD MORE ANSWERS</button>
      }
      return <button className="expand-answers-btn self-start" type="button" onClick={expandOrCollapse}>COLLAPSE ANSWERS</button>
    }
  };

  const addHelpfulness = () => {
    if (!helpfulness[1]) {
      setHelpfulness([helpfulness[0] + 1, true]);
      requests.markQuestionHelpful(question.question_id);
    }
  };
  return (
    <div className="question-container">
      <div className="question-title-container flex justify-between p-[0.313rem]">
        <div className="question-labeler flex gap-x-[0.313rem]">
          <div>
            Q:
          </div>
          <div>
            {question.question_body2 ? question.question_body2 : question.question_body}
          </div>
        </div>
        <div>
          {'Helpful? '}
          <button type="button" id="question-yes" className="hover:underline" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
          {` (${helpfulness[0]}) | `}
          <button type="button" id="add-answer-btn" onClick={() => {
            document.body.style.overflow = 'hidden';
            setAForm(true)
          }} onKeyDown={() => addAnswerModule()}>Add Answer</button>
        </div>
      </div>
      <div className="answers-container">
        {
          answers.map((answer: any) => <Answer answer={answer} key={answer.answer_id} query={query} />)
        }
        {
          expandOrCollapseButtons()
        }
      </div>
      {
        aForm && <AnswerForm setAForm={setAForm} currProductName={currProductName} questionBody={question.question_body} questionId={question.question_id} />
      }
    </div>

  );
}

export default Question;