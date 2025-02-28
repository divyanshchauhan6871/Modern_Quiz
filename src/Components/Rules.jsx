import React from "react";
import { useNavigate } from "react-router-dom";

function Rules() {
  const navigate = useNavigate();
  const startquiz = () => {
    navigate("/quiz");
  };
  return (
    <div className="h100 p-5">
      <div className="outer">
        <div className="inner1">
          <div className="in1con"></div>
        </div>
        <div className="inner2">
          <div className="in2con"></div>
        </div>
        <div className="inner3">
          <div className="in3con"></div>
        </div>
        <div className="inner4">
          <div className="in4con"></div>
        </div>
        <div className="p-3 text-white row">
          <div className="col-12 text-center" style={{ fontSize: "60px" }}>
            Rules
            <br />
            <p style={{ fontSize: "large" }}>
              MCQ Format - The quiz consists only of multiple-choice questions
              (MCQs). <br />
              Scoring System - Each correct answer earns 1 mark; there is no
              partial marking. <br />
              Elimination Rule - A wrong answer immediately ends the quiz
              attempt. <br />
              No Time Limit - Participants can take as much time as needed for
              each question. <br />
              Fair Play - Cheating, use of external help, or multiple attempts
              from different accounts is prohibited. <br />
              Technical Issues - The platform is not responsible for internet or
              device failures during the quiz. <br />
              Leaderboard & Results - Scores are based on the number of correct
              answers before elimination.
            </p>
            <div className="p-3">
              <button
                className="mt-3 butt"
                onClick={() => {
                  startquiz();
                }}>
                Go ahead
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
