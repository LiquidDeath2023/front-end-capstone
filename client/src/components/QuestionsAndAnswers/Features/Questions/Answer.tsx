import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import requests from '../../helpers/requests';
import AnswerPhoto from './AnswerPhoto';

interface AnswerProps {
  answer: {
    body: string;
    body2?: string;
    answerer_name: string;
    date: string;
    photos: string[];
    helpfulness: number;
    answer_id: number;
  };
  setTheNews: Dispatch<SetStateAction<boolean>>;
  query: string;
}

function Answer({ answer, setTheNews, query }: AnswerProps) {
  const { body, answerer_name, date, photos } = answer;
  const newDate = new Date(date);
  const formatDate = `${newDate.toLocaleString('default', { month: 'long' })} ${newDate.getDate() + 1}, ${newDate.getFullYear()}`;
  const [helpfulness, setHelpfulness] = useState<[number, boolean]>([answer.helpfulness, false]);
  const [report, setReport] = useState(['Report', false]);

  const addHelpfulness = () => {
    if (!helpfulness[1]) {
      setHelpfulness([helpfulness[0] + 1, true]);
      requests.markAnswerHelpful(answer.answer_id);
    }
  };

  const reportFunction = () => {
    if (!report[1]) {
      setReport(['Reported', true]);
      requests.reportAnswer(answer.answer_id);
    }
  };

  const usernameCheck = () => {
    if (answerer_name === 'Seller') {
      return <span className='font-bold'>{answerer_name}</span>
    }
    return <span className='text-[#007185]'>{answerer_name}</span>
  }

  useEffect(() => {
    if (query.length === 3) {
      setTimeout(() => {
        setTheNews(true)
      }, 100)
    }
  }, [])

  return (
    <div className="answer-container bg-gray-500 bg-opacity-10 p-[0.313rem] mx-0 my-[0.313rem]">
      <div className="answer-labeler flex gap-x-[0.313rem]">
        <h3 className="text-[1.17em] font-bold">
          A:
        </h3>
        <h3 className="text-[1.17em]">
          {answer.body2 ? answer.body2 : body}
        </h3>
      </div>
      <div className="answer-photos-container flex gap-x-[0.313rem]">
        {
          photos.map((photo: any) => (
            <AnswerPhoto photo={photo} key={photo.id} />
          ))
        }
      </div>
      <h4 className="text-[1em]">
        {'by '}
        {usernameCheck()}
        {`, ${formatDate} | Helpful? `}
        <button type="button" id="answer-yes" className="hover:underline" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
        {` (${helpfulness[0]}) | `}
        <button type="button" id="report-btn" className="hover:text-red-500" onClick={() => reportFunction()} onKeyDown={() => reportFunction()}>{report[0]}</button>
      </h4>
      {
        delete answer.body2
      }
    </div>
  );
}

export default Answer;
