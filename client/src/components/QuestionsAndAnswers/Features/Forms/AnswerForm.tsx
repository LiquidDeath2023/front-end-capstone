import React from 'react';
import '../../qa-styles/Form.styles.css';
import axios from 'axios';

function AnswerForm({ setAForm, currProductName, questionBody, questionId }) {

  // prevents form from being submitted on enter
  const checkKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }
  };

  const imageChecker = (e) => {
    const files = e.target.files;
    let imageDiv = document.getElementById('my-images-div');
    let imageInput = document.getElementById('ans-photos');
    imageDiv.innerHTML = '';
    console.log('HERE');
    if (files.length > 5) {
      alert('You can only upload up to 5 photos!');
      imageInput.value = '';
    } else {
      for (var i = 0; i < files.length; i++) {
        var reader = new FileReader();
        reader.addEventListener("load", (event) => {
          const picFile = event.target;
          const div = document.createElement('div');
          div.innerHTML = `<img className="thumbnail" src="${picFile.result}" alt="${picFile.name}" />`;
          imageDiv?.appendChild(div);
        })
        reader.readAsDataURL(files[i])
      }
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const form = document.getElementById('answer-form');
    const formData = new FormData(form);
    sendAnswer(questionId, formData);
    close();
  }

  const sendAnswer = (question_id, data) => {
    axios.post(`/qa/questions/${question_id}/answers`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .catch(() => console.log('error posting answer', data));
  }

  const close = () => {
    document.body.style.overflow = 'visible';
    setAForm(false);
  }

  return (
    <div id="answer-form-container">
      <div id="answer-form-subcontainer">
        <div id="answer-form-title">
          <h2 className="text-[1.5em]">Submit your Answer</h2>
          <i onClick={() => close()} className="fa-solid fa-x fa-xl" style={{ color: "#ff007b" }} />
        </div>
        <h3 className="text-[1.17em]">{currProductName}:</h3>
        <h3 className="text-[1.17em]">{questionBody}</h3>
        <form id="answer-form" onSubmit={(e) => submitHandler(e)} onKeyDown={(e) => checkKeyDown(e)} encType="multipart/form-data">
          <label>Answer*<br />
            <textarea maxLength="1000" rows="2" name="body" required /></label>
          <label>Name*<br />
            <input type="text" maxLength="60" placeholder="Example: jackson543!" name="name" required /></label>
          <h6>For privacy reasons, do not use your full name or email address</h6>
          <label >E-mail*<br />
            <input type="email" maxLength="60" placeholder="jack@email.com" name="email" required /></label>
          <h6>For authentication reasons, you will not be emailed</h6>
          <label >Upload your photos<br />
            <input id="ans-photos" type="file" name="photos" accept="image/png, image/jpeg" onChange={(e) => imageChecker(e)} multiple /></label>
          <div id="my-images-div"></div>
          <input id="a-submit-btn" type="submit" />
        </form>
      </div>
    </div >
  )
};

export default AnswerForm;