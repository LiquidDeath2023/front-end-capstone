import React, { useState } from "react";
import Answer from "./Answer";
import { myFakeAnswers } from "./fakeData";

interface QuestionProps {
  question: {
    question_body: string;
  };
}

function Question(props: QuestionProps) {
  const [fakeAnswers, setFakeAnswers] = React.useState(myFakeAnswers.results);

  const { question } = props;

  return (
    <div className="question-container">
      <div className="question-title-container">
        <div>{`Q: ${question.question_body}`}</div>
        <div>
          {`Helpful? Yes (${question.question_helpfulness}) | <Add Answer>`}
        </div>
      </div>
      {fakeAnswers.map((fakeAnswer) => (
        <Answer answer={fakeAnswer} key={fakeAnswer.answer_id} />
      ))}
    </div>
  );
}

export default Question;
