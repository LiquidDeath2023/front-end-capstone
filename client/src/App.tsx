import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers";
import Overview from "./components/Overview";
import ReviewsRatings from "./components/Reviews-Ratings/ReviewsRatings";
import { List } from "./components/Related/List";
import initial from "./PlaceHolderData.js";

function App() {
  /*
  ===== STATES AND STATE CHANGERS =====
  */
  // states passed to multiple components
  const [product, setProduct] = useState(initial.product);
  const [reviewsMeta, setReviewsMeta] = useState(initial.reviewsMeta);

  const updProduct = async (id) => {
    const newProduct = await axios.get(`/products/${id}`);
    return newProduct;
  };

  const updReviewsMeta = async () => {
    const newReviewsMeta = await axios.get(`/reviews/meta/${product.id}`);
    return newReviewsMeta;
  };

  /*
  TODOS:
  - integrate related state and updRelated fn into Jon's component
  - integrate reviews state and updReviews fn into Kurt's component
  */

  const [related, setRelated] = useState(initial.related);
  const [reviews, setReviews] = useState(initial.reviews);

  const updRelated = async () => {
    const newRelated = await axios.get(`/products/${product.id}/related`);
    return newRelated;
  };
  // defaults to relevant sorting order - change sort to desired sort order
  const updReviews = async (sort = "relevant", count = "5", page = "1") => {
    const newReviews = await axios.get(
      `/reviews/${product.id}/${sort}/${count}/${page}`
    );
    return newReviews;
  };

  /*
  ====== FUNCTIONALITY =====
  */

  // update reviewsMeta every time product changes
  useEffect(() => {
    updReviewsMeta()
      .then((reviewsMetaUpd) => setReviewsMeta(reviewsMetaUpd.data))
      .catch((err) => console.error(err));
  }, [product]);

  /*
  TODOS:
  - onCardClick fn that updates product
  - onSearchProduct fn that updates product
  */

  // TESTING TESTING
  useEffect(() => {
    console.log({
      "reviews meta data": reviewsMeta,
      "current product": product,
    });
  }, [reviewsMeta]);

  // changed order of components
  if (reviewsMeta) {
    return (
      <div>
        {/* <Overview
          product={product}
          reviewsMeta={reviewsMeta}
          reviews={reviews}
        />
        <List currentProduct={product} />
        <QuestionsAndAnswers
          currProductId={product.id}
          currProductName={product.name}
        /> */}
        <div id="ratingsReviewsContainerId">
          <ReviewsRatings />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Overview product={product} reviewsMeta={reviewsMeta} />
      <List />
      <QuestionsAndAnswers
        currProductId={product.id}
        currProductName={product.name}
      />
      <div id="ratingsReviewsContainerId">
        <ReviewsRatings />
      </div>
    </div>
  );
}

export default App;
