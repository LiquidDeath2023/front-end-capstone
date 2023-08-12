import React, { useState } from 'react';

function Answer({ answer }) {
  const { body, answerer_name, date } = answer;

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
      <div className="answer-body">{`A: ${body}`}</div>
      <div className="answer-info">
        {`by ${answerer_name}, ${date} | Helpful? `}
        <button type="button" id="answer-yes" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
        {` (${helpfulness[0]}) | `}
        <button type="button" id="report-btn" onClick={() => reportFunction()} onKeyDown={() => reportFunction()}>{report[0]}</button>
      </div>
    </div>

  );
}

export default Answer;
