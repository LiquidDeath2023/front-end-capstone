import React, { useState } from 'react';
import QuestionForm from '../Forms/QuestionForm';
import '../../qa-styles/ExpandAndAdd.styles.css';

import Tester from './Tester';

function ExpandAndAdd({ setNumOfQuestions, displayMore, currProductName, currProductId }) {
  const [qForm, setQForm] = useState(false);

  const expandOrCollapse = () => {
    setNumOfQuestions((state) => state + 2);
  };

  const expandOrCollapseButtons = () => {
    if (displayMore) {
      return <button id="expand-questions-btn" type="button" onClick={expandOrCollapse}>MORE ANSWERED QUESTIONS</button>;
    }
  };

  return (
    <div className="ExpandAndAdd-container">
      {
        expandOrCollapseButtons()
      }
      <button id="add-questions-btn" type="button" onClick={() => {
        document.body.style.overflow = 'hidden';
        setQForm(true)
      }}>
        {'ADD A QUESTION '}
        <i className="fa-solid fa-plus" />
      </button>
      {
        qForm && <QuestionForm setQForm={setQForm}
          currProductName={currProductName}
          currProductId={currProductId} />
      }
      {/* <Tester /> */}
    </div>
  );
}

export default ExpandAndAdd;
