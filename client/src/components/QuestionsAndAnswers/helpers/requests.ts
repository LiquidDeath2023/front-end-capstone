import axios from 'axios';


// mark question helpful PUT request
const markQuestionHelpful = (questionId) => {
  axios.put(`qa/questions/${questionId}/helpful`)
    .catch(() => console.log('err marking question helpful'));
}

// report answer PUT request
const reportQuestion = (answerId) => {
  axios.put(`qa/answers/${answerId}/report`)
    .catch(() => console.log('err reporting question'));
}

// mark answer helpful PUT request
const markAnswerHelpful = (answerId) => {
  axios.put(`qa/answers/${answerId}/helpful`)
    .catch(() => console.log('err marking answer helpful'));
}

// report answer PUT request
const reportAnswer = (answerId) => {
  axios.put(`qa/answers/${answerId}/report`)
    .catch(() => console.log('err reporting answer'));
}

export default { markQuestionHelpful, reportQuestion, markAnswerHelpful, reportAnswer };