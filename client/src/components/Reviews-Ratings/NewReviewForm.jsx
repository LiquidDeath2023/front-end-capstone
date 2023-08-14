import React, { useState } from 'react';

function NewReviewForm({ setAForm, getReviewsMeta }) {
  const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  const [recommendation, setRecommendation] = useState(false);
  const [characteristics, setCharacteristics] = useState({Size: null, Width: null, Comfort: null, Quality: null, Length: null, Fit: null});

  const starMeaning = {
    1: "Poor",
    2: "Fair",
    3: "Average",
    4: "Good",
    5: "Great"
  };

  const updateRecommendation = (value) => {
    setRecommendation(value);
  };

  const updateCharacteristics = (key, value) => {
    const newCharacteristics = { ...characteristics, [key]: value };
    console.log('updated: ', newCharacteristics);
    setCharacteristics(newCharacteristics);
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((index, value) => {
      if (index <= rating) {
        return (
          <div value={index} onClick={() => setRating(index)}>⭐</div>
        )
      } else {
        return (
          <div value={index} onClick={() => setRating(index)}>☆</div>
        )
      }
    })
  };

  const renderCharacteristics = () => {
    return Object.keys(getReviewsMeta.characteristics).map((characteristic) => {
      return (
        <div style={{ display:'flex' }}>{characteristic}
          {
            [1, 2, 3, 4, 5].map((index) => {
              return (
                <label>
                  <input type="radio" name={characteristic} value={index} checked={characteristics[characteristic] === index} onChange={() => updateCharacteristics(characteristic, index)}/>
                </label>
              )
            })
          }
        </div>
      )
    })
  };

  const renderPhotoPage = () => {
    console.log('click');
  };

  const checkKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    // if (e.key === 'Escape') {
    //   e.preventDefault();
    //   close();
    // }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitHandler clicked');
    // const body = e.target.body.value;
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const product_id = currProductId;
    // sendQuestion({ body, name, email, product_id });
    close();
    // console.log({ body, name, email, product_id });
  };

  // const sendQuestion = (data) => {
  //   axios.post('/qa/questions', data)
  //     .catch(() => console.log('error posting question'));
  // }

  const close = () => {
    setForm(false);
  };

  return (
    <div>
      <div>
        <h2>Write a Review</h2>
        <i onClick={() => close()} />
      </div>
      <form onSubmit={(e) => submitHandler(e)} onKeyDown={(e) => checkKeyDown(e)}>
        {/* Overall Rating by Clicking Number of Stars */}
        <label>Overall Rating<br />
          <div className="newReviewStarRating">
            {renderStars()}
            {(rating !== 0) ? <div>{starMeaning[rating]}</div> : null}
          </div>
        </label>
        {/* Boolean Product Recommendation - utilizes radio buttons */}
        <label>Do you recommend this product?<br />
          <label>Yes
            <input type="radio" name="recommendation_true" value={true} checked={recommendation} onChange={() => updateRecommendation(true)}/>
          </label>
          <label>No
            <input type="radio" name="recommendation_false" value={false} checked={!recommendation} onChange={() => updateRecommendation(false)} />
          <br /></label>
        </label>
        {/* Characteristics */}
        <label className="newReviewCharacteristics">Characteristics <br />
          <div>{renderCharacteristics()}</div>
        </label>
        {/* Text Inputs */}
        <label>Review Summary <br />
          <textarea maxLength="100" name="summary" /> <br /></label>
        <label>Review Body <br />
          <textarea maxLength="1000" rows="5" name="body" /> <br /></label>
        <label>Nickname<br />
          <input type="text" name="nickname" placeholder="happycustomer20" /><br /></label>
        <label >E-mail<br />
          <input type="email" maxLength="60" placeholder="jack@email.com" name="email" required /> <br /> </label>
        <button onClick={renderPhotoPage}>Add Photos  </button><br />
        <input id="q-submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default NewReviewForm;
