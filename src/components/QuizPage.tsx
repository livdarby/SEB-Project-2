import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DifficultyDropdown from "./DifficultyDropdown";
import ShowQuestions from "./ShowQuestions";

function QuizPage() {
  const [questions, setQuestions] = React.useState(null);
  console.log(questions);

  function handleGenerateQuizClick() {
    fetchQuiz();
  }

  async function fetchQuiz() {
    const resp = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    const data = await resp.json();
    setQuestions(data.results);
  }

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
              <button
                onClick={handleGenerateQuizClick}
                className="button is-primary"
              >
                Generate Quiz
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {!questions ? "Generating questions..." :
          questions.map((element, i) => {
            return (
              <ShowQuestions
                key={i}
                question={element.question}
                correct={element.correct_answer}
                incorrect={element.incorrect_answers}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default QuizPage;
