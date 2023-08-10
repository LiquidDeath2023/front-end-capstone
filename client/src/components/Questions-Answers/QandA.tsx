import React from 'react';
import Question from './Question';

function QandA(props) {
  const { fakeData } = props;

  const fakeQuestions2 = fakeData.results;

  return (
    <div>
      {
        fakeQuestions2.map((fakeQuestion2: Object) =>
          (<Question question={fakeQuestion2} key={fakeQuestion2} />))
      }
    </div>
  );
}

export default QandA;
