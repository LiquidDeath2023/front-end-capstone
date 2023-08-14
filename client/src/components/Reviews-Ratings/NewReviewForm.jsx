import React, { useState } from 'react';
import { characteristicLabels, starMeaning } from './helpers';

function NewReviewForm({ setAForm, getReviewsMeta }) {
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState(false);
  const [characteristics, setCharacteristics] = useState({Size: null, Width: null, Comfort: null, Quality: null, Length: null, Fit: null});

  // used to update the boolean recommend
  const updateRecommendation = (value) => {
    setRecommendation(value);
  };

  // update characteristics
  const updateCharacteristics = (key, value) => {
    const newCharacteristics = { ...characteristics, [key]: value };
    ('updated: ', newCharacteristics);
    setCharacteristics(newCharacteristics);
  };

  // this renders 5 stars that allow user to choose, upon choosing, renders gold stars up to and including what user has selected, fills rest in with grey
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((index, value) => {
      if (index <= rating) {
        return (
          <i key={index} className="star fa-regular fa-star" value={index} onClick={() => setRating(index)}/>
        )
      } else {
        return (
          <i key={index} className="empty-star fa-regular fa-star" value={index} onClick={() => setRating(index)}/>
        )
      }
    })
  };

  // generates radio buttons for users to rank characteristics
  const renderCharacteristics = () => {
    return Object.keys(getReviewsMeta.characteristics).map((characteristic) => {
      // characteristic refers to Size, Width, Comfort, etc.
      // characteristics refers to the state, an object with properties for each characteristic
      const currentCharValue = characteristics[characteristic] // could be null or a number

      return (
        <div style={{ display:'flex', flexDirection: 'column' }}>{characteristic} <br />
          {!currentCharValue ? <div>none selected</div> : <div>{characteristicLabels[characteristic][currentCharValue]}</div>}
          <div>
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
          <div style={{ display:'flex'}}className="characteristicsAxisLabels">
            {<div>{characteristicLabels[characteristic]['1']}</div>}
            {<div>{characteristicLabels[characteristic]['5']}</div>}
          </div>

        </div>
      )
    })
  };

  // TODO - update this to generate popup window where user can add photos
  const renderPhotoPage = () => {
    ('click');
  };

  // Part of Khurram's code
  const checkKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }
  };

  // Part of Khurram's code
  const close = () => {
    setForm(false);
  };

  // TODO - update this to store all values in a massive state
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitHandler clicked');
    // const body = e.target.body.value;
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const product_id = currProductId;
    // sendQuestion({ body, name, email, product_id });
    close();
    // ({ body, name, email, product_id });
  };

  // TODO - update this to post to reviews
  // const sendQuestion = (data) => {
  //   axios.post('/qa/questions', data)
  //     .catch(() => ('error posting question'));
  // }

  return (
    <div>
      <div>
        <h2>Write a Review</h2>
        <i onClick={() => close()} />
      </div>
      <form onSubmit={(e) => submitHandler(e)} onKeyDown={(e) => checkKeyDown(e)}>
        {/* Overall Rating by Clicking Number of Stars */}
        <label required>Overall Rating<br />
          <div className="newReviewStarRating">
            {renderStars()}
            {(rating !== 0) ? <div>{starMeaning[rating]}</div> : null}
          </div>
        </label>
        {/* Boolean Product Recommendation - utilizes radio buttons */}
        <label required>Do you recommend this product?<br />
          <label>Yes
            <input type="radio" name="recommendation_true" value={true} checked={recommendation} onChange={() => updateRecommendation(true)}/>
          </label>
          <label>No
            <input type="radio" name="recommendation_false" value={false} checked={!recommendation}  onChange={() => updateRecommendation(false)} />
          <br /></label>
        </label>
        {/* Characteristics */}
        <label className="newReviewCharacteristics" required>Characteristics <br />
          <div>{renderCharacteristics()}</div>
        </label>
        {/* Text Inputs */}
        <label>Review Summary <br />
          <textarea maxLength="100" name="summary" /> <br /></label>
        <label>Review Body <br />
          <textarea maxLength="1000" rows="5" name="body" required /> <br /></label>
        <label>Nickname<br />
          <input type="text" name="nickname" placeholder="happycustomer20" required /><br /></label>
        <label >E-mail<br />
          <input type="email" maxLength="60" placeholder="jack@email.com" name="email" required /> <br /> </label>
        <button onClick={renderPhotoPage}>Add Photos  </button><br />
        <input id="q-submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default NewReviewForm;
