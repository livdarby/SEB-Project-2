import React from "react";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";
import DifficultyDropdown from "./DifficultyDropdown";
import GenerateQuizButton from "./GenerateQuizButton";
import ShowQuestions from "./ShowQuestions";

function QuizPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <CategoryDropdown />
            </div>
            <div className="column is-3">
              <DifficultyDropdown />
            </div>
            <div className="column is-3">
              <GenerateQuizButton />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ShowQuestions />
        </div>
      </section>
    </>
  );
}

export default QuizPage;
