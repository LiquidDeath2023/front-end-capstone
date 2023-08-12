import React from 'react';
import Question from './Question';

function QuestionList({ questions }) {
  return (
    <div>
      {
        // remove index later
        questions.map((question, index) => (<Question question={question} key={index} />))
      }
      {
        !questions.length && <span>no results found</span>
      }
    </div>
  );
}

export default QuestionList;
