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
    <section className="section">
      <div className="container">
        <h6>{question}</h6>
        <div className="control">
          <label className="radio">
            <input
              disabled={!!selectedAnswer}
              onChange={handleAnswerSelection}
              type="radio"
              name={`answer-${id}`}
              value={shuffledAnswers[0]}
            />
            {shuffledAnswers[0]}
          </label>
          <label className="radio">
            <input
              disabled={!!selectedAnswer}
              onChange={handleAnswerSelection}
              type="radio"
              name={`answer-${id}`}
              value={shuffledAnswers[1]}
            />
            {shuffledAnswers[1]}
          </label>
          <label className="radio">
            <input
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
      {reveal &&
        (selectedAnswer === correct
          ? "Correct!"
          : `Incorrect! Correct answer is ${correct}`)}
    </section>
  );
}

export default ShowQuestions;
