import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "./start";
import Quiz from "./quiz";
import Results from "./results";

function App() {
  return (
    <>
      <div className="box">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
