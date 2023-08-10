import React from 'react';
import Answer from './Answer';
import myData from './fakeData';

const myFakeAnswers = myData.fakeAnswers.results;

function Question(props) {
  const [fakeAnswers, setFakeAnswers] = React.useState(myFakeAnswers);
  const { question } = props;

  return (
    <div className="question-container">
      <div className="question-title-container">
        <div>
          {`Q: ${question.question_body}`}
        </div>
        <div>
          {`Helpful? Yes (${question.question_helpfulness}) | <Add Answer>`}
        </div>
      </div>
      {
        fakeAnswers.map((fakeAnswer) => <Answer answer={fakeAnswer} key={fakeAnswer.answer_id} />)
      }
      <div>LOAD MORE ANSWERS</div>
    </div>
  );
}

export default Question;
