import React from "react";
import ShowQuestions from "./ShowQuestions";

function GenerateQuizButton() {
  const [questions, setQuestions] = React.useState(null);
  console.log(questions);

  async function fetchQuiz() {
    const resp = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await resp.json();
    setQuestions(data.results);
  }

  function handleGenerateQuizClick() {
    fetchQuiz();
    {
      questions?.map((element) => {
        return (
          <ShowQuestions
            question={element.question}
            correct={element.correct_answer}
            incorrect={element.incorrect_answer}
          />
        );
      });
    }
  }

  return (
    <>
      <button onClick={handleGenerateQuizClick} className="button is-primary">
        Generate Quiz
      </button>
    </>
  );
}

export default GenerateQuizButton;
