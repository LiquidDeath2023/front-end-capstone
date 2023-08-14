require('dotenv').config();
const path = require('path');
const express = require('express');
const axios = require('axios');

const reviewsRouter = express.Router();

// reviews section API needs query params - seems you can't just add params to end of link
// right now I have it set so you make a request with /id/sort/count/page from client...
// this can probably be changed to be any order - i couldn't figure out how tho
// to get all the reviews for a product - specify count to absurd number
reviewsRouter.get('/:product_id/:sort/:count/:page', (req, res) => {
  console.log(req.params);
  axios.get(
    path.join(process.env.API_URI, 'reviews'),
    {
      params: {
        product_id: req.params.product_id,
        sort: req.params.sort || 'newest',
        count: req.params.count || 5,
        page: req.params.page || 1,
      },
      headers: {
        Authorization: process.env.AUTH,
      },
    },
  )
    .then((product) => res.status(200).send(product.data))
    .catch((err) => res.status(400).send(err));
});

// get review metadata - also need to use query params for this, can't join the link together
reviewsRouter.get('/meta/:product_id', (req, res) => {
  axios.get(
    path.join(process.env.API_URI, 'reviews/meta'),
    {
      params: {
        product_id: req.params.product_id,
      },
      headers: {
        Authorization: process.env.AUTH,
      },
    },
  )
    .then((reviewsMeta) => res.status(200).send(reviewsMeta.data))
    .catch((err) => res.status(400).send(err));
});

module.exports = reviewsRouter;

/*
======= TODO =======
- Add POST request for reviews
- Add PUT request for reviews to check for if review was helpful
- Add PUT request for reviews to report a review
- Add routes for Cart API
- Add routes for Interactions API
- Optimize authentication by adding middleware (?)
*/