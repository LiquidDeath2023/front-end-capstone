/* eslint-disable import/no-unresolved */
import React from 'react';
import './app.css';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import Overview from './components/Overview';
import ReviewsRatings from './components/Reviews-Ratings/ReviewsRatings';
function App() {
  return (
    <div>
      <Overview />
      <Card/>
      <ReviewsRatings />
      <QuestionsAndAnswers />
    </div>
  );
}

export default App;
