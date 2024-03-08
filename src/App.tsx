import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import QuizPage from "./components/QuizPage"
import QuizButton from "./components/QuizButton";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </main>
    </Router>
  )

}

export default App;
