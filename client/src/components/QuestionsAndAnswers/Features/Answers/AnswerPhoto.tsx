import React, { useState } from 'react';

function AnswerPhoto({ photo, index }) {
  const [fullPhoto, setFullPhoto] = useState(false);

  const close = () => {
    document.body.style.overflow = 'visible';
    setFullPhoto(false);
  }

  return (
    <div>
      <img className="answer-photo aspect-[3/2] max-h-[75px] object-cover border border-solid border-transparent hover:border-[black] cursor-pointer" key={photo.id} alt={`photo${index}`} src={photo.url} onClick={() => {
        document.body.style.overflow = 'hidden';
        setFullPhoto(true)
      }} />
      {
        fullPhoto && <div className="full-answer-photo"><img alt={`fphoto${index}`} src={photo.url} /> <i onClick={() => close()} className="fa-solid fa-x fa-xl" style={{ color: "#ff007b" }} /> </div>
      }
    </div>
  );
}

export default AnswerPhoto;
