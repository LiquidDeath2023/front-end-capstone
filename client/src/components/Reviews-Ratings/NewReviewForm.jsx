import React, { useState } from 'react';

function NewReviewForm({ setAForm }) {
  const [recommendation, setRecommendation] = useState(false);

  const updateRecommendation = (value) => {
    setRecommendation(value);
  }
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
  }

  // const sendQuestion = (data) => {
  //   axios.post('/qa/questions', data)
  //     .catch(() => console.log('error posting question'));
  // }

  const close = () => {
    setForm(false);
  }

  return (
    <div>
      <div>
        <div>
          <h2>Write a Review</h2>
          <i onClick={() => close()} />
        </div>
        <h3>About the {'FILL ME IN'}</h3>
        <form onSubmit={(e) => submitHandler(e)} onKeyDown={(e) => checkKeyDown(e)}>
          {/* <label>Overall Rating - INCOMPLETE<br />
            <textarea maxLength="5" rows="3" name="rating" required /></label> */}
          <label>Do you recommend this product? - INCOMPLETE<br />
            <label>Yes
              <input type="radio" name="recommendation_true" value={true} checked={recommendation} onChange={() => updateRecommendation(true)}/>
            </label>
            <label>No
              <input type="radio" name="recommendation_false" value={false} checked={!recommendation} onChange={() => updateRecommendation(false)} />
            </label>
          </label>
          {/* <label >Characteristics - INCOMPLETE <br />
            <input type="text" name="characteristics" required /></label>
          <label>Review Summary<br />
            <textarea maxLength="100" name="summary" /></label>
          <label>Review Body<br />
            <textarea maxLength="1000" rows="5" name="body" /></label>
          <label>Upload Photos - INCOMPLETE<br />
            <textarea maxLength="1000" name="photos" /></label>
          <label>Nickname<br />
            <textarea maxLength="20" rows="3" name="nickname" /></label>
          <label >E-mail<br />
            <input type="email" maxLength="60" placeholder="jack@email.com" name="email" required /></label> */}
          <input id="q-submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default NewReviewForm;
