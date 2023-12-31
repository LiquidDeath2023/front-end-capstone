import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import utils from '../../helpers/helpers';
import requests from '../../helpers/requests';
import AnswerForm from './AnswerForm';

interface QuestionProps {
  question: {
    question_helpfulness: number;
    question_id: number
    question_body: string;
    question_body2: JSX.Element;
  };
  currProductName: string;
  query: string
}

function Question({ question, currProductName, query }: QuestionProps) {
  const [answersDatabase, setAnswersDatabase] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [more, setMore] = useState(true);
  const { question_helpfulness } = question;
  const [helpfulness, setHelpfulness] = useState<[number, boolean]>([question_helpfulness, false]);
  const [report, setReport] = useState(['Report', false]);

  const ansFetcher = async () => {
    await axios.get(`/qa/questions/${question.question_id}/answers`)
      .then((res) => res.data.sort(utils.compare('helpfulness')))
      .then((sortedHelpfulness) => utils.sortSellers(sortedHelpfulness))
      .then((sortedSellers) => {
        setAnswersDatabase(sortedSellers);
        setAnswers(sortedSellers.slice(0, 2));
      })
  }
  useEffect(() => {
    ansFetcher();
  }, []);

  const expandOrCollapse = () => {
    setMore(utils.expandAnswers(answersDatabase, setAnswers, more));
  };

  const expandOrCollapseButtons = () => {
    if (answersDatabase.length > 2 && query.length < 3) {
      if (more) {
        return <button className="expand-answers-btn self-start" type="button" onClick={expandOrCollapse}>LOAD MORE ANSWERS</button>
      }
      return <button className="expand-answers-btn self-start" type="button" onClick={expandOrCollapse}>COLLAPSE ANSWERS</button>
    }
  };

  interface FilteredAnsProps {
    body: string;
    body2: JSX.Element;
  }

  const [theNews, setTheNews] = useState<boolean>(false);
  useEffect(() => {
    if (query.length >= 3) {
      setAnswers(answersDatabase.reduce((filtered: any, ans: FilteredAnsProps) => {
        if (ans.body.toLowerCase().includes(query.toLowerCase())) {
          const aIDX = ans.body.toLowerCase().indexOf(query.toLowerCase());
          ans.body2 = utils.highlighter(ans.body, aIDX, query.length);
          filtered.push(ans);
        }
        return filtered;
      }, []))
    } else {
      ansFetcher();
    }
  }, [query, theNews])

  const addHelpfulness = () => {
    if (!helpfulness[1]) {
      setHelpfulness([helpfulness[0] + 1, true]);
      requests.markQuestionHelpful(question.question_id);
    }
  };

  const reportFunction = () => {
    if (!report[1]) {
      setReport(['Reported', true]);
      requests.reportQuestion(question.question_id);
    }
  };

  return (
    <div className="question-container">
      <div className="flex justify-between p-[0.313rem] items-end">
        <div className="question-labeler flex gap-x-[0.313rem]">
          <h3 className="text-[1.17em] font-bold">
            Q:
          </h3>
          <h3 className="text-[1.17em] font-bold">
            {question.question_body2 ? question.question_body2 : question.question_body}
          </h3>
        </div>
        <h4 className="text-[1em]">
          {'Helpful? '}
          <button type="button" id="question-yes" className="hover:underline" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
          {` (${helpfulness[0]}) | `}
          <button type="button" id="report-btn" className="hover:text-red-500" onClick={() => reportFunction()} onKeyDown={() => reportFunction()}>{report[0]}</button>{' | '}
          <AnswerForm currProductName={currProductName} questionBody={question.question_body} questionId={question.question_id} />
        </h4>
      </div>
      <div className="answers-container">
        {
          answers.map((answer: any) => (<Answer answer={answer} key={answer.answer_id}
            setTheNews={setTheNews}
            query={query}
          />))
        }
        {
          expandOrCollapseButtons()
        }
      </div>
      <hr className="mt-[0.313rem]" />
    </div>

  );
}

export default Question;
