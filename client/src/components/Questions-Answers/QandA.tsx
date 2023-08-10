import React from 'react';
import Question from './Question';

interface FakeDataProps {
  fakeData: Object;
}

function QandA(props: FakeDataProps) {
  const { fakeData } = props;

  const fakeQuestions2 = fakeData.results;

  return (
    <div className="QandA-container">
      {
        fakeQuestions2.map((fakeQuestion2: Object) =>
          (<Question question={fakeQuestion2} key={fakeQuestion2} />))
      }
    </div>
  );
}

export default QandA;
