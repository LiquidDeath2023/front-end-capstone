import React from 'react';
import Question from './Question';

function QuestionList({ questions }) {
  return (
    <div>
      {
        // remove index later
        questions.map((question, index) => (<Question question={question} key={index} />))
      }
    </div>
  );
}

export default QuestionList;
