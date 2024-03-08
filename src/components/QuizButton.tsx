import { Link } from "react-router-dom";

function QuizButton() {
  return (
    <section className="section">
      <div className="container is-flex is-justify-content-center">
        <button className="button is-link is-rounded is-large">
          <Link to="/quiz" className="has-text-white">
            Take me to the quiz!
          </Link>
        </button>
      </div>
    </section>
  );
}

export default QuizButton;
