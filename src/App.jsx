import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Score from "./Components/Score";
import { useState } from "react";
import Rules from "./Components/Rules";

function App() {
  const [score, setScore] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Home setScore={setScore} />}></Route>
      <Route
        path="/quiz"
        element={<Quiz score={score} setScore={setScore} />}></Route>
      <Route path="/score" element={<Score score={score} />}></Route>

      <Route path="/rule" element={<Rules score={score} />}></Route>
    </Routes>
  );
}

export default App;
