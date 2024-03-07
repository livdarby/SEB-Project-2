import React from "react"

function ShowQuestions({ question, correct, incorrect }) {
  const allAnswers = [...incorrect, correct];
  console.log("All answers are: ", allAnswers);
  const shuffledAnswers = [...allAnswers.sort()];
  console.log("Shuffled answers are: ", shuffledAnswers);

  const [selectedAnswer, setSelectedAnswer] = React.useState(null)
  console.log(selectedAnswer)

  let playerScore = 0

  function handleAnswerSelection(e: any) {
    if (e.currentTarget.innerText === correct) {
      playerScore += 1 
    }
    console.log(playerScore)
  }

  return (
    <section className="section">
      <div className="container">
        <h6>{question}</h6>
        <div className="control">
          <label className="radio" onChange={handleAnswerSelection}>
            <input type="radio" name="answer"/>
            {shuffledAnswers[0]}
          </label>
          <label className="radio" onChange={handleAnswerSelection}>
            <input type="radio" name="answer"/>
            {shuffledAnswers[1]}
          </label>
          <label className="radio" onChange={handleAnswerSelection}>
            <input type="radio" name="answer"/>
            {shuffledAnswers[2]}
          </label>
          <label className="radio" onChange={handleAnswerSelection}>
            <input type="radio" name="answer"/>
            {shuffledAnswers[3]}
          </label>
        </div>
      </div>
    </section>
  );
}

export default ShowQuestions;
