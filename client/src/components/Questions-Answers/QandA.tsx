import React from 'react';
import Question from './Question';

function QandA() {
  const fakeQuestions: string[] = ['Fake Question 1', 'Fake Question 2'];

  return (
    <div className="QandA-container">
      {
        fakeQuestions.map((fakeQuestion: string) =>
          (<Question question={fakeQuestion} key={fakeQuestion} />))
      }
    </div>
  );
}

export default QandA;


// <Question question={fakeQuestion} />