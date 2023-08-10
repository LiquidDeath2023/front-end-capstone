import React from 'react';

interface AnswerProps {
  answer: string;
}

function Answer(props: AnswerProps) {
  const { answer } = props;

  return (
    <>
      <div className="A-container">{`A: ${answer}`}</div>
      <div>
        {'by <username>, <data> | Helpful? Yes(#) | Report'}
      </div>
    </>

  );
}

export default Answer;
