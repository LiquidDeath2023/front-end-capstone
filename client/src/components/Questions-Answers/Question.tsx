import React from 'react';
import Answer from './Answer';

interface QuestionProps {
  question: string;
}

function Question(props: QuestionProps) {
  const { question } = props;
  const fakeAnswers: string[] = ['Fake Answer A', 'Fake Answer B'];

  return (
    <div className="Q-container">
      <div className="Q-liner">
        <div>
          {`Q: ${question}`}
        </div>
        <div>
          {'Helpful? Yes(#) | <Add Answer>'}
        </div>
      </div>
      {
        fakeAnswers.map((fakeAnswer) => <Answer answer={fakeAnswer} key={fakeAnswer} />)
      }
      <div>LOAD MORE ANSWERS</div>
    </div>
  );
}

export default Question;
