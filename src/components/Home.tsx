import React from "react";
import { Link } from "react-router-dom"
import About from "./About";
import Instructions from "./Instructions";
import QuizButton from "./QuizButton";

function Home() {

  return (
    <>
      <section className="section">
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
      </section>
    </>
  );
}

export default Home;
