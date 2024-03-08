import React from "react";

function ShowQuestions({
  reveal,
  question,
  correct,
  incorrect,
  id,
  increaseFunction,
  increaseNoOfAnswers,
}: any) {
  const allAnswers = [...incorrect, correct];
  console.log("All answers are: ", allAnswers);
  const shuffledAnswers = [...allAnswers].sort();
  console.log("Shuffled answers are: ", shuffledAnswers);

  const [selectedAnswer, setSelectedAnswer] = React.useState(null as any);
  console.log(selectedAnswer);

  function handleAnswerSelection(e: any) {
    setSelectedAnswer(e.currentTarget.value);
    increaseNoOfAnswers();
    console.log(e.currentTarget.value);
    console.log(correct);
    if (e.currentTarget.value === correct) {
      increaseFunction();
    }
  }

  return (
    <div className="container mb-6">
      {/* <h6 className="title">{question}</h6> */}
      <div className="card">
        <div className="card-header has-background-link-light">
          <div className="card-header-title is-centered">{question}</div>
        </div>
        <div className="card-content">
          <div className="control">
            <label className="radio mr-4">
              <input
                className="mr-2"
                disabled={!!selectedAnswer}
                onChange={handleAnswerSelection}
                type="radio"
                name={`answer-${id}`}
                value={shuffledAnswers[0]}
              />
              {shuffledAnswers[0]}
            </label>
            <label className="radio mr-4">
              <input
                className="mr-2"
                disabled={!!selectedAnswer}
                onChange={handleAnswerSelection}
                type="radio"
                name={`answer-${id}`}
                value={shuffledAnswers[1]}
              />
              {shuffledAnswers[1]}
            </label>
            <label className="radio mr-4">
              <input
                className="mr-2"
                disabled={!!selectedAnswer}
                onChange={handleAnswerSelection}
                type="radio"
                name={`answer-${id}`}
                value={shuffledAnswers[2]}
              />
              {shuffledAnswers[2]}
            </label>
            <label className="radio">
              <input
                className="mr-2"
                disabled={!!selectedAnswer}
                onChange={handleAnswerSelection}
                type="radio"
                name={`answer-${id}`}
                value={shuffledAnswers[3]}
              />
              {shuffledAnswers[3]}
            </label>
          </div>
        </div>
      </div>
      <p className="mt-2 has-text-centered has-text-weight-bold has-text-link-dark">
        {reveal &&
          (selectedAnswer === correct
            ? "Correct!"
            : `Incorrect! Correct answer is ${correct}`)}
      </p>
    </div>
  );
}

export default ShowQuestions;
