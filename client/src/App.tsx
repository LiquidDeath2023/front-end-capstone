/* eslint-disable import/no-unresolved */
import React from "react";
import "./app.css";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers";
import Cards from "./components/Related/Cards";

// nothing special here
function App() {
  return (
    <div>
      <h1>Ben Component</h1>
      <h1>Kurt Component</h1>
      <QuestionsAndAnswers />
      <Cards />
    </div>
  );
}

export default App;
