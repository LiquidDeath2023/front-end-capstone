import React, { useState } from 'react';
import Answer from './Answer';
import myData from './Helpers/fakeData';
import utils from './Helpers/helpers';
const myFakeAnswers1 = myData.fakeAnswers1.results.sort(utils.compare('helpfulness'));
const myFakeAnswers2 = myData.fakeAnswers2.results.sort(utils.compare('helpfulness'));
const myFakeAnswers3 = myData.fakeAnswers3.results.sort(utils.compare('helpfulness'));

function Question(props) {
  const { question } = props;

  const [numOfAns, setNumOfAns] = React.useState(2);
  const [maxLen, setMaxLen] = React.useState(0);
  const [loadAns, setLoadAns] = React.useState(true);
  const [fakeAnswers, setFakeAnswers] = React.useState([]);
  const [helpfulness, setHelpfulness] = useState([question.question_helpfulness, false]);

  React.useEffect(() => {
    if (question.question_id === Number(myData.fakeAnswers1.question)) {
      setFakeAnswers(myFakeAnswers1.slice(0, numOfAns));
     setMaxLen(myFakeAnswers1.length);
    } else if (question.question_id === Number(myData.fakeAnswers2.question)) {
      setFakeAnswers(myFakeAnswers2.slice(0, numOfAns));
      setMaxLen(myFakeAnswers2.length);
    } else if (question.question_id === Number(myData.fakeAnswers3.question)) {
      setFakeAnswers(myFakeAnswers3.slice(0, numOfAns));
      setMaxLen(myFakeAnswers3.length);
    }
  }, [numOfAns]);

  const add2 = () => {
    setNumOfAns(numOfAns + 2);
    if (numOfAns + 2 >= maxLen) {
      setLoadAns(false);
    }
  };

  const collapse = () => {
    setNumOfAns(2);
    setLoadAns(true);
  };

  const addHelpfulness = () => {
    if (!helpfulness[1]) {
      setHelpfulness([helpfulness[0] + 1, true]);
    }
  };

  const addAnswerModule = () => {
    alert('ADD ANSWER FORM HERE');
  };


  return (
    <div className="question-container">
      <div className="question-title-container">
        <div>
          {`Q: ${question.question_body}`}
        </div>
        <div>
          {'Helpful? '}
          <button type="button" id="question-yes" onClick={() => addHelpfulness()} onKeyDown={() => addHelpfulness()}>Yes</button>
          {` (${helpfulness[0]}) | `}
          <button type="button" id="add-answer-btn" onClick={() => addAnswerModule()} onKeyDown={() => addAnswerModule()}>Add Answer</button>
        </div>
      </div>
      {
        fakeAnswers.map((fakeAnswer) => <Answer answer={fakeAnswer} key={fakeAnswer.answer_id} />)
      }
      {
        loadAns && <button type="button" onClick={() => add2()}>LOAD MORE ANSWERS</button>
      }
      {
        !loadAns && <button type="button" onClick={() => collapse()}>COLLAPSE ANSWERS</button>
      }
    </div>
  );
}

export default Question;
