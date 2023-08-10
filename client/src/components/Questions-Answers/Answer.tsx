import React from 'react';

function Answer(props) {
  const { answer } = props;
  const body = answer.body;
  const user = answer.answerer_name;
  const date = answer.date.slice(0, 10);
  const helpfulness = answer.helpfulness;

  return (
    <>
      <div className="A-container">{`A: ${body}`}</div>
      <div>
        {`by ${user}, ${date} | Helpful? Yes (${helpfulness}) | Report`}
      </div>
    </>

  );
}

export default Answer;
