const axios = require('axios');

require('dotenv').config();

const base_uri = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

// hard coded for product_id=37313
const questionsFetcher = () => {
  const uri = `${base_uri}/qa/questions/?product_id=37324&page=2&count=10`;

  return axios.get(uri, {
    headers: {
      Authorization: process.env.AUTH,
    },
  });
};

const answersFetcher = (questionId) => {
  const uri = `${base_uri}/qa/questions/${questionId}/answers`;

  return axios.get(uri, {
    headers: {
      Authorization: process.env.AUTH,
    },
  });
};

module.exports = {
  questionsFetcher,
  answersFetcher,
};
