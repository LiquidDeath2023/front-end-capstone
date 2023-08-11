import React from 'react';
import Question from './Question';

function QandA({ fakeData }) {
  return (
    <div>
      {
        fakeData.map((question) =>
          (<Question question={question} key={question.question_id} />))
      }
    </div>
  );
}

export default QandA;
