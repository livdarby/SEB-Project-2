import React from "react";
import About from "./About";
import Instructions from "./Instructions";

function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-half">
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
