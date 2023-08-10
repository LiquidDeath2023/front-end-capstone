import React from 'react';

function Answer(props) {
  const { answer } = props;
  const body = answer.body;
  const user = answer.answerer_name;
  const date = answer.date.slice(0, 10);
  const helpfulness = answer.helpfulness;

  return (
    <div className="answer-container">
      <div>{`A: ${body}`}</div>
      <div>
        {`by ${user}, ${date} | Helpful? Yes (${helpfulness}) | Report`}
      </div>
    </div>

  );
}

export default Answer;
