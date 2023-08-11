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
      question_helpfulness: 27,
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
    {
      question_id: 643551,
      question_body: 'Open it ',
      question_date: '2022-10-21T00:00:00.000Z',
      asker_name: 'dsfsa',
      question_helpfulness: 19,
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
    {
      question_id: 643552,
      question_body: 'Shift it ',
      question_date: '2022-10-21T00:00:00.000Z',
      asker_name: 'dsfsa',
      question_helpfulness: 25,
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
    {
      question_id: 643550,
      question_body: 'Bop it ',
      question_date: '2022-10-21T00:00:00.000Z',
      asker_name: 'dsfsa',
      question_helpfulness: 21,
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
    {
      question_id: 643551,
      question_body: 'Twist it ',
      question_date: '2022-10-21T00:00:00.000Z',
      asker_name: 'dsfsa',
      question_helpfulness: 23,
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

const fakeAnswers1 = {
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

const fakeAnswers2 = {
  question: '643551',
  page: 1,
  count: 5,
  results: [
    {
      answer_id: 5992812,
      body: 'MONSTER ENERGY',
      date: '2023-07-06T00:00:00.000Z',
      answerer_name: 'THE MAN WITH A HAT!',
      helpfulness: 3,
      photos: [],
    },
    {
      answer_id: 5992936,
      body: 'RED BULL!',
      date: '2023-08-08T00:00:00.000Z',
      answerer_name: 'Larry the Lobster',
      helpfulness: 0,
      photos: [],
    },
    {
      answer_id: 59928120001,
      body: 'BANG! ENERGY @@@',
      date: '2022-01-06T00:00:00.000Z',
      answerer_name: 'Mr. Off The Walls',
      helpfulness: 55,
      photos: [],
    },
  ],
};

const fakeAnswers3 = {
  question: '643552',
  page: 1,
  count: 5,
  results: [
    {
      answer_id: 5992812,
      body: 'MAH DUDE!',
      date: '2023-07-06T00:00:00.000Z',
      answerer_name: 'MAH from SiM',
      helpfulness: 3,
      photos: [],
    },
    {
      answer_id: 5992936,
      body: 'MAH SATO!',
      date: '2023-08-08T00:00:00.000Z',
      answerer_name: 'Masato from coldrain',
      helpfulness: 0,
      photos: [],
    },
    {
      answer_id: 59928120001,
      body: 'MAH IKA!',
      date: '2022-01-06T00:00:00.000Z',
      answerer_name: 'MAIKA from there for tomorrow',
      helpfulness: 55,
      photos: [],
    },
    {
      answer_id: 59929360002,
      body: 'LET ME TALK TO YA',
      date: '2022-01-08T00:00:00.000Z',
      answerer_name: 'LA KNIGHT',
      helpfulness: 1,
      photos: [],
    },
    {
      answer_id: 59928120003,
      body: 'YEAH',
      date: '2022-01-11T00:00:00.000Z',
      answerer_name: 'LA KNIGHT',
      helpfulness: 901,
      photos: [],
    },
  ],
};

export default { fakeData, fakeAnswers1, fakeAnswers2, fakeAnswers3 };
