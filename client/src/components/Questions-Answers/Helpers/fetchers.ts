import axios from 'axios';
import utils from './helpers';

const questionsFetcher = (setQuestionsDatabase, questionsDatabase  setNumOfQuestions, numOfQuestions, setQuestions) => {
  axios.get('/qa/questions')
    .then((res) => res.data.results.sort(utils.compare('question_helpfulness')))
    .then((sorted) => {
      setQuestionsDatabase(sorted);
      setNumOfQuestions([4, sorted.length]);
    })
    .then(() => {
      setQuestions(questionsDatabase.slice(0, numOfQuestions[0]));
    })
    .catch(() => console.log('err obtaining questions'));
};

const answersFetcher = (setAnswersDatabase, answersDatabase, setNumOfAnswers, numOfAnswers, setAnswers, question) => {
  axios.get(`/qa/questions/${question.question_id}/answers`)
    .then((res) => res.data.sort(utils.compare('helpfulness')))
    .then((sorted) => {
      setAnswersDatabase(sorted);
      setNumOfAnswers([2, sorted.length]);
    })
    .then(() => {
      setAnswers(answersDatabase.slice(0, numOfAnswers[0]));
    })
    .catch(() => {
      console.log('err obtaining answers');
    });
};

export default { questionsFetcher, answersFetcher };