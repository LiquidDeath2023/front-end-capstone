interface DataInterface {
  'product_id': string;
  'results': Object[];
}

// /GET https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=37314
const fakeData: DataInterface = {
  product_id: '37314',
  results: [
    {
      question_id: 643550,
      question_body: 'Close it ',
      question_date: '2022-10-21T00:00:00.000Z',
      asker_name: 'dsfsa',
      question_helpfulness: 5,
      reported: false,
      answers: {
        5992812: {
          id: 5992812,
          body: 'hi mom!',
          date: '2023-07-06T00:00:00.000Z',
          answerer_name: 'and dad!',
          helpfulness: 3,
          photos: [],
        },
        5992936: {
          id: 5992936,
          body: 'This rocks!',
          date: '2023-08-08T00:00:00.000Z',
          answerer_name: 'Henry',
          helpfulness: 0,
          photos: [],
        },
      },
    },
  ],
};

const fakeAnswers = {
  question: '643550',
  page: 1,
  count: 5,
  results: [
    {
      answer_id: 5992812,
      body: 'hi mom!',
      date: '2023-07-06T00:00:00.000Z',
      answerer_name: 'and dad!',
      helpfulness: 3,
      photos: [],
    },
    {
      answer_id: 5992936,
      body: 'This rocks!',
      date: '2023-08-08T00:00:00.000Z',
      answerer_name: 'Henry',
      helpfulness: 0,
      photos: [],
    },
    {
      answer_id: 59928120001,
      body: 'hi people of the world!',
      date: '2022-01-06T00:00:00.000Z',
      answerer_name: 'johnny test',
      helpfulness: 55,
      photos: [],
    },
    {
      answer_id: 59929360002,
      body: 'boruto is terrible!',
      date: '2022-01-08T00:00:00.000Z',
      answerer_name: 'Naruto Uzumaki',
      helpfulness: 1,
      photos: [],
    },
    {
      answer_id: 59928120003,
      body: 'i like giraffes!',
      date: '2022-01-11T00:00:00.000Z',
      answerer_name: 'giraffe enthusiast',
      helpfulness: 901,
      photos: [],
    },
    {
      answer_id: 59929360004,
      body: 'RUMBLING RUMBLING',
      date: '2022-01-12T00:00:00.000Z',
      answerer_name: 'Eren Jaeger ',
      helpfulness: 2,
      photos: [],
    },
  ],
};

// module.exports = {
//   fakeData,
//   myFakeAnswers: fakeAnswers,
// };

export default { fakeData, fakeAnswers };
