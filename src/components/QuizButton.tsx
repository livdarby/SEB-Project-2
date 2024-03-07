import { Link } from "react-router-dom"

function QuizButton() {
  return (
    <button className="button is-large">
        <Link to="/quiz">Take me to the quiz</Link>
    </button>
  );
}

export default QuizButton;
