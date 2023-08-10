<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable import/no-unresolved */
=======
>>>>>>> 5b3a492 (tailwind)
import React from "react";
import "./app.css";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers";
import Cards from "./components/Related/Cards";
=======
import React from 'react';
import './app.css';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import Overview from './components/Overview';
import ReviewsRatings from './components/Reviews-Ratings/ReviewsRatings';
>>>>>>> 4c6f0c2 (Structure overview file system and add placeholder data for Product Info)

// nothing special here
function App() {
  return (
    <div>
<<<<<<< HEAD
      <h1>Ben Component</h1>
      <h1>Kurt Component</h1>
=======
      <Overview />
      <ReviewsRatings />
>>>>>>> 4c6f0c2 (Structure overview file system and add placeholder data for Product Info)
      <QuestionsAndAnswers />
      <Cards />
    </div>
  );
}

export default App;
