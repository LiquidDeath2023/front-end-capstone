import React from 'react';

function ExpandAndAdd({ add2, collapse, loadQuestions }) {
  const addQuestionModule = () => {
    alert('ADD QUESTION FORM HERE');
  };

  return (
    <div className="ExpandAndAdd-container">
      {
        loadQuestions && <button type="button" onClick={() => add2()}>MORE ANSWERED QUESTIONS</button>
      }
      {
        !loadQuestions && <button type="button" onClick={() => collapse()}>COLLAPSE QUESTIONS</button>
      }
      <button type="button" onClick={() => addQuestionModule()}>ADD A QUESTION +</button>
    </div>
  );
}

export default ExpandAndAdd;
