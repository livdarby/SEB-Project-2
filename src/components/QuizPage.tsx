import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import DifficultyDropdown from "./DifficultyDropdown";
import ShowQuestions from "./ShowQuestions";
import Confetti from "react-confetti";

function QuizPage() {
  const [questions, setQuestions] = React.useState(null as any);
  console.log(questions);

  const [playerScore, setPlayerScore] = React.useState(0);

  const [revealScore, setRevealScore] = React.useState(false);

  const [numberOfAnswers, setNumberOfAnswers] = React.useState(0);

  const [buttonIsClicked, setButtonIsClicked] = React.useState(false);

  const [highScore, setHighScore] = React.useState(
    localStorage.getItem("highscore")
  );
  console.log(`high score is ${highScore}`);

  function handlePlayerScoreIncrease() {
    setPlayerScore(playerScore + 1);
  }

  function revealScoreClick() {
    setRevealScore(true);
    // if (Number(highScore) === 0 || Number(highScore) < playerScore) {
    //   console.log("new high score!");
    //   localStorage.setItem("highscore", playerScore);
    //   setHighScore(playerScore);
    // }
  }

  function increaseAnswers() {
    setNumberOfAnswers(numberOfAnswers + 1);
  }

  function handleGenerateQuizClick() {
    setButtonIsClicked(true);
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
    // remove quote strings
    setQuestions(data.results);
  }

  return (
    <>
      <body className="background-repeat">
        <section className="section">
          {revealScore && <Confetti />}
          <div className="container has-text-centered">
            {/* <div className="columns">
            <div className="column is-3">
              <CategoryDropdown />
            </div>
            <div className="column is-3">
              <DifficultyDropdown />
            </div> */}
            {/* <div className="column is-3"> */}
            <button
              onClick={handleGenerateQuizClick}
              className="button is-primary is-rounded is-medium"
            >
              Generate Quiz
            </button>
            {/* </div>
          </div> */}
          </div>
        </section>
        <section className="section">
          <div className="container has-text-centered">
            {buttonIsClicked &&
              (!questions ? (
                <p className="spinner"></p>
              ) : (
                questions.map((element: any, i: any) => {
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
                })
              ))}
          </div>
          {questions ? (
            <div className="has-text-centered">
              <button
                className="button is-link is-rounded "
                disabled={numberOfAnswers !== 10}
                onClick={revealScoreClick}
              >
                Reveal Score
              </button>
              {revealScore && (
                <p className="mt-4 p-2 has-background-link-light">
                  <span className="mt-2 p-2 as-text-centered has-text-weight-bold has-text-link">
                    You scored: {playerScore}!
                  </span>
                </p>
              )}
            </div>
          ) : (
            ""
          )}
        </section>
      </body>
    </>
  );
}

export default QuizPage;
