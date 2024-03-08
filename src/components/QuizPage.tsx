import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DifficultyDropdown from "./DifficultyDropdown";
import ShowQuestions from "./ShowQuestions";

function QuizPage() {
  const [questions, setQuestions] = React.useState(null as any);
  console.log(questions);

  const [playerScore, setPlayerScore] = React.useState(0);

  const [revealScore, setRevealScore] = React.useState(false);

  const [numberOfAnswers, setNumberOfAnswers] = React.useState(0);

  function handlePlayerScoreIncrease() {
    setPlayerScore(playerScore + 1);
  }

  function revealScoreClick() {
    setRevealScore(true);
  }

  function increaseAnswers() {
    setNumberOfAnswers(numberOfAnswers + 1);
  }

  // 1) piece of state that we can update for the players selected answer
  // 2) this starts as an empty array
  // 3) object shape with id property, isCorrect

  function handleGenerateQuizClick() {
    fetchQuiz();
    setRevealScore(false);
    setPlayerScore(0);
    setNumberOfAnswers(0);
  }

  async function fetchQuiz() {
    const resp = await fetch(
      "https://opentdb.com/api.php?amount=10&type=multiple"
    );
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
                className="button is-primary is-rounded is-medium"
              >
                Generate Quiz
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {!questions
            ? "Generating questions..."
            : questions.map((element: any, i: any) => {
                return (
                  <ShowQuestions
                    increaseFunction={handlePlayerScoreIncrease}
                    increaseNoOfAnswers={increaseAnswers}
                    reveal={revealScore}
                    key={element.question}
                    id={i}
                    question={element.question}
                    correct={element.correct_answer}
                    incorrect={element.incorrect_answers}
                  />
                );
              })}
        </div>
        <div className="has-text-centered">
          <button
            className="button is-link is-rounded "
            disabled={numberOfAnswers !== 10}
            onClick={revealScoreClick}
          >
            Reveal Score
          </button>
          {revealScore && (
            <p className="has-text-weight-bold mt-3">
              You scored: {playerScore}!
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default QuizPage;
