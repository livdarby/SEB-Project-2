import React from "react";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";
import DifficultyDropdown from "./DifficultyDropdown";

function QuizPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <CategoryDropdown />
            </div>
            <div className="column is-2">
              <DifficultyDropdown />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizPage;
