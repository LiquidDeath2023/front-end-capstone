import React, { useState, useEffect } from 'react';
import axios from 'axios';
import utils from '../../helpers/helpers';
import Question from './Question';

function QuestionList({ setDisplayMore, numOfQuestions, query, currProductId, currProductName }) {
  const [questionsDatabase, setQuestionsDatabase] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [highlightedQuestion, setHighlightedQuestion] = useState([false, null]);

  const fetch = () => {
    axios.get('/qa/questions', { params: { currProductId } })
      .then((res) => {
        return res.data.results.sort(utils.compare('question_helpfulness'))
      })
      .then((sorted) => {
        setQuestionsDatabase(sorted);
        setQuestions(sorted.slice(0, numOfQuestions));
        setDisplayMore(sorted.length > 2);
      })
      .catch(() => console.log('error fetching questions', currProductId));
  }

  useEffect(() => {
    fetch();
  }, [currProductId]);

  useEffect(() => {
    setQuestions(questionsDatabase.slice(0, numOfQuestions))
    if (numOfQuestions >= questionsDatabase.length) {
      setDisplayMore(false);
    }
  }, [numOfQuestions, query])

  useEffect(() => {
    if (query.length > 2) {
      setQuestions(questionsDatabase.filter((q: any) => {
        const answerHasQuery = Object.values(q.answers)
          .map(answer => answer.body)
          .filter(body =>  body.toLowerCase().includes(query.toLowerCase())).length;


        if (q.question_body.toLowerCase().includes(query.toLowerCase()) || answerHasQuery) {
          const qIDX = q.question_body.toLowerCase().indexOf(query.toLowerCase());

          q.question_body2 =
            (<>
              {q.question_body.slice(0, qIDX)}
              <span className='highlight'>{query}</span>
              {q.question_body.slice(qIDX + query.length)}
            </>);
          return true;
        }
      }));
      setDisplayMore(false);
    } else if (query.length === 2) {
      fetch();
    }
    else {
      setQuestions(questionsDatabase.slice(0, numOfQuestions))
      if (numOfQuestions >= questionsDatabase.length) {
        setDisplayMore(false)
      } else {
        setDisplayMore(true)
      }
    }
  }, [query])

  return (
    <div className="questions-container">
      {
        questions.map((question) => {
          return (<Question question={question} key={question.question_id} currProductName={currProductName} highlightedQuestion={highlightedQuestion}
            query={query} />)
        })
      }
    </div>
  );
}

export default QuestionList;
