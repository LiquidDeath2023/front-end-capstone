import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";

// NAVBAR and FOOTER
import Navbar from "../../NavbarFooter/Navbar";
import NavSearch from "../../NavbarFooter/NavSearch";
import Footer from "../../NavbarFooter/Footer";

// HELPERS
import utils from "../helpers/helpers";
import fakeData from "../helpers/fakeData";

// COMPONENTS
import QuestionsAndAnswers from "../QuestionsAndAnswers";
import Search from "../Features/Search/Search";
import QuestionList from "../Features/Questions/QuestionList";
import Question from "../Features/Questions/Question";
import Answer from "../Features/Questions/Answer";
import AnswerPhoto from "../Features/Questions/AnswerPhoto";
import AnswerForm from "../Features/Questions/AnswerForm";
import ExpandAndAdd from "../Features/ExpandAndAdd/ExpandAndAdd";
import QuestionForm from "../Features/ExpandAndAdd/QuestionForm";

const currProductId = 37324;
const currProductName = "Jaylen Backpack";
const questionBody = "Quam aperiam est dignissimos velit.";
const questionId = 300483;

jest.mock("axios");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));
import { useState } from "react";

describe("ability to render all components and subcomponents", () => {
  beforeEach(() => {
    useState.mockImplementation(jest.requireActual("react").useState);
    //other preperations
  });
  ////////////////////////////////////////
  // Question And Answer Component
  ////////////////////////////////////////
  test("question and answers component renders", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [] }));

    render(
      <QuestionsAndAnswers
        currProductId={currProductId}
        currProductName={currProductName}
      />
    );
  });

  ////////////////////////////////////////
  // Search Bar
  ////////////////////////////////////////
  test("search bar component renders", async () => {
    render(<Search />);
  });

  ////////////////////////////////////////
  // Question Component
  ////////////////////////////////////////
  //  => Question List
  // test("question list component renders", async () => {
  //   axios.get.mockImplementation(() => Promise.resolve({ data: [] }));

  //   const setDisplayMore = jest.fn(); // Create a mock function
  //   jest.spyOn(React, "useState").mockReturnValue([false, setDisplayMore]);

  //   act(() => {
  //     render(
  //       <QuestionList
  //         currProductId={currProductId}
  //         currProductName={currProductName}
  //         moreQuestions={false}
  //         query=""
  //         setDisplayMore={setDisplayMore}
  //       />
  //     );
  //   });
  // });

  // // => => Question
  // test("question component renders", async () => {
  //   axios.get.mockImplementation(() => Promise.resolve({ data: [] }));
  //   act(() => {
  //     render(
  //       <Question
  //         question={{
  //           question_id: 300494,
  //           question_helpfulness: 28,
  //         }}
  //         currProductName={currProductName}
  //         query=""
  //       />
  //     );
  //   });
  // });

  // => => => Answer
  test("answer component renders", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [] }));

    render(
      <Answer
        answer={{
          answer_id: 2803976,
          body: "Velit porro similique suscipit ut consequatur culpa ab autem.",
          date: "2020-12-17T00:00:00.000Z",
          answerer_name: "Quinton.Hoppe",
          helpfulness: 11,
          photos: [],
        }}
        query=""
      />
    );
  });

  // => => => => AnswerPhoto
  test("answer photo component renders", () => {
    const { getByTestId } = render(
      <AnswerPhoto
        photo={{
          id: 2481511,
          url: "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80",
        }}
      />
    );

    fireEvent.click(getByTestId("answer-photo-test"));

    const image = getByTestId("answer-photo-test");
    expect(image.src).toContain(
      "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
    );
  });

  // => => => Answer Form
  test("check if answer form pops-up", async () => {
    const { getByTestId } = render(
      <AnswerForm
        currProductId={currProductId}
        questionBody={questionBody}
        questionId={questionId}
      />
    );

    fireEvent.click(getByTestId("add-answer-btn"));

    const nameWarning = screen.getByText(
      /For privacy reasons, do not use your full name or email address/i
    );
    expect(nameWarning).toBeInTheDocument();

    const emailWarning = screen.getByText(
      /For authentication reasons, you will not be emailed/i
    );
    expect(emailWarning).toBeInTheDocument();
  });

  ////////////////////////////////////////
  // ExpandAndAdd Component
  ////////////////////////////////////////
  test("expand and add component renders", () => {
    render(
      <ExpandAndAdd
        currProductId={currProductId}
        currProductName={currProductName}
      />
    );
  });

  // => Question Form
  test("check if question form pops-up", async () => {
    const { getByTestId } = render(
      <QuestionForm
        currProductId={currProductId}
        currProductName={currProductName}
      />
    );

    fireEvent.click(getByTestId("add-questions-btn"));

    const nameWarning = screen.getByText(
      /For privacy reasons, do not use your full name or email address/i
    );
    expect(nameWarning).toBeInTheDocument();

    const emailWarning = screen.getByText(
      /For authentication reasons, you will not be emailed/i
    );
    expect(emailWarning).toBeInTheDocument();
  });
});

describe("testing helper functions for questions and answers", () => {
  test("should sort by a property", () => {
    const sortByHelpfulness = fakeData.fakeData.results.sort(
      utils.compare("question_helpfulness")
    );

    const max = sortByHelpfulness[0].question_helpfulness;
    for (var i = 1; i < sortByHelpfulness.length; i++) {
      if (sortByHelpfulness[i].question_helpfulness > max) {
        max = sortByHelpfulness[i].question_helpfulness;
      }
    }

    expect(max).toBe(sortByHelpfulness[0].question_helpfulness);
  });

  test("should sort by username Seller", () => {
    const sortedBySellers = utils.sortSellers(fakeData.fakeAnswers3.results);

    expect(sortedBySellers[0].answerer_name).toBe("Seller");
  });

  test("should sort by username Seller", () => {
    const sortedBySellers = utils.sortSellers(fakeData.fakeAnswers3.results);

    expect(sortedBySellers[0].answerer_name).toBe("Seller");
  });
});

describe("testing render of navbar and footer", () => {
  test("should render navbar", () => {
    render(<Navbar />);
  });

  test("should render navbar search", () => {
    render(<NavSearch />);
  });

  test("should render footer", () => {
    render(<Footer />);
  });
});
