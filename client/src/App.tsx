/* eslint-disable import/no-unresolved */
import React from 'react';
import './app.css';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import Overview from './components/Overview';
import ReviewsRatings from './components/Reviews-Ratings/ReviewsRatings';
import { List } from './components/Related/List';

function App() {
  return (
    <div>
      <Overview />
      <List/>
      <div id="ratingsReviewsContainerId">
        <ReviewsRatings />
      </div>
      <QuestionsAndAnswers />
    </div>
  );
}

export default App;
