function Instructions() {
  return (
    <>
      <div className="card">
        <div className="card-header has-background-primary">
          <h3 className="card-header-title is-centered has-text-white">
            Instructions
          </h3>
        </div>
        <div className="p-5 has-text-centered">
          <p>
            Click the button below to go to the quiz.
          </p>
          <br />
          <p>
            Think carefully about your answers.. once you've selected your
            answer, it's locked in and cannot be changed! Once you've attempted
            all ten questions, click Reveal Score to find out how you did.
          </p>
        </div>
      </div>
    </>
  );
}

export default Instructions;
