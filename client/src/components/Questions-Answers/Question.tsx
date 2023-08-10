import React from 'react';
import Answer from './Answer';
import { myFakeAnswers } from './fakeData';

interface QuestionProps {
  question: {
    question_body: string;
  };
}

function Question(props: QuestionProps) {
  const [fakeAnswers, setFakeAnswers] = React.useState(myFakeAnswers.results);

  const { question } = props;

  return (
    <div className="Q-container">
      <div className="Q-liner">
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
