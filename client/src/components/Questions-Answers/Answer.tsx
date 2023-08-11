import React, { useState } from 'react';

function Answer(props) {
  const { answer } = props;
  const body = answer.body;
  const user = answer.answerer_name;
  const date = answer.date.slice(0, 10);

  const [helpfulness, setHelpfulness] = useState([answer.helpfulness, false]);
  const [report, setReport] = useState(['Report', false]);

  const addHelpfulness = () => {
    if (!helpfulness[1]) {
      setHelpfulness([helpfulness[0] + 1, true]);
    }
  };

  const reportFunction = () => {
    if (!report[1]) {
      setReport(['Reported', true]);
    }
  };

  return (
    <div className="answer-container">
      <div>{`A: ${body}`}</div>
      <div>
        {`by ${user}, ${date} | Helpful? `}
        <button type="button" id="answer-yes" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
        {` (${helpfulness[0]}) | `}
        <button type="button" id="report-btn" onClick={() => reportFunction()} onKeyDown={() => reportFunction()}>{report[0]}</button>
      </div>
    </div>

  );
}

export default Answer;
