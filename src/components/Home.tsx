import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Instructions from "./Instructions";
import QuizButton from "./QuizButton";

function Home() {
  return (
    <>
      <body className="background">
        <section className="section is-medium ml-3 mr-3">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <About />
              </div>
              <div className="column is-half">
                <Instructions />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <QuizButton />
          </div>
        </section>
      </body>
    </>
  );
}

export default Home;
