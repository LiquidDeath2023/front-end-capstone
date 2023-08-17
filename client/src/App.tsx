import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers/QuestionsAndAnswers";
import Overview from "./components/Overview";
import ReviewsRatings from "./components/Reviews-Ratings";
import { List } from "./components/Related/List";
import initial from "./PlaceHolderData.js";

function App() {
  /*
  ===== STATES AND STATE CHANGERS =====
  */
  // states passed to multiple components
  const [product, setProduct] = useState(initial.product);
  const [reviewsMeta, setReviewsMeta] = useState(initial.reviewsMeta);
  const [productId, setProductId] = useState(37324);

  const updProduct = async (id) => {
    const newProduct = await axios.get(`/products/${id}`);
    return newProduct;
  };

  const updReviewsMeta = async () => {
    // const newReviewsMeta = await axios.get(`/reviews/meta/${product.id}
    const newReviewsMeta = await axios.get(`/reviews/meta/${productId}`);
    return newReviewsMeta;
  };

  /*
  TODOS:
  - integrate related state and updRelated fn into Jon's component
  - integrate reviews state and updReviews fn into Kurt's component
  */

  const [related, setRelated] = useState(initial.related);

  // defaults to relevant sorting order - change sort to desired sort order
  const updReviews = async (sort = "relevant", count = "5", page = "1") => {
    const newReviews = await axios.get(
      // `/reviews/${product.id}/${sort}/${count}/${page}`
      `/reviews/${productId}/${sort}/${count}/${page}`
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


  const changeProduct = (() => {
    if (productId === 37324) {
      setProductId(37325);
      updProduct(37325);
      updReviewsMeta();
      updReviews();
    } else {
      setProductId(37324);
      updProduct(37324);
      updReviewsMeta();
      updReviews();
    }
  });

  // changed order of components
  if (reviewsMeta) {
    return (
      <div>
        <Overview product={product} reviewsMeta={reviewsMeta} />
        <List currentProduct={product} updateCurrentProduct={updProduct} />
        <button onClick={() => changeProduct()}>CHANGE PRODUCT</button>
        <QuestionsAndAnswers
          currProductId={productId}
          currProductName={product.name}
        />
        <ReviewsRatings id="ratingsReviewsContainerId" reviewsMeta={reviewsMeta} currProductId={productId} currProductName={product.name} initial={initial} />
      </div>
    );
  }
}

export default App;
