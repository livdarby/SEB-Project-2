import React from "react";
import About from "./About";
import Instructions from "./Instructions";

function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <About />
            <Instructions />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
