function About() {
  return (
    <>
      <div className="card">
        <div className="card-header has-background-primary">
          <h3 className="card-header-title is-centered has-text-white">About</h3>
        </div>
        <div className="p-5">
          <div className="paragraphs has-text-centered">
            <p>Welcome to Catherine and Liv's quiz! </p> <br />
            <p>
              This general knowledge quiz generates 10 random questions each
              time you play and has been built using the{" "}
              <a href="https://opentdb.com/api_config.php">
                Open Trivia Database API.
              </a>
            </p>
            <br />
            <p>Happy quizzing!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
