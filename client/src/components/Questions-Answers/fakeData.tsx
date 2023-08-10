interface DataInterface {
  'product_id': string;
  'results': Object[];
}

// /GET https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=37314
const fakeData: DataInterface = {
  product_id: '37314',
  results: [
    {
      question_body: 'Close it ',
      question_date: '2022 - 10 - 21T00:00:00.000Z',
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

module.exports = {
  fakeData,
};
