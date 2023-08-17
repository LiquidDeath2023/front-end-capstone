// import React from 'react'

// import QuestionForm from '../Forms/QuestionForm';

// //POPUP TEST
// import Popup from 'reactjs-popup';
// import './Popup.css';
// import 'reactjs-popup/dist/index.css';

// function Tester() {
//   return (
//     <Popup
//       trigger={<button className="button"> Open Modal </button>}
//       modal
//       nested>
//       {(close: any) => (
//         <div className="modal">
//           <button className="close" onClick={close}>
//             &times;
//           </button>
//           <h2 className="text-[1.5em]">Ask Your Question</h2>
//           <h3 className="text-[1.17em]">About the currProductName</h3>
//           <form id="question-form"  >
//             <label>Your Question*<br />
//               <textarea maxLength="1000" rows="3" name="body" required /></label>
//             <label>Name*<br />
//               <input type="text" maxLength="60" placeholder="Example: jackson11!" name="name" required /></label>
//             <h6>For privacy reasons, do not use your full name or email address</h6>
//             <label >E-mail*<br />
//               <input type="email" maxLength="60" placeholder="jack@email.com" name="email" required /></label>
//             <h6>For authentication reasons, you will not be emailed</h6>
//             <input id="q-submit-btn" type="submit" />
//           </form>
//           <div className="actions">
//             <button
//               className="button"
//               onClick={() => {
//                 close();
//               }}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </Popup>
//   )
// }

// export default Tester