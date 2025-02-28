import React, { useState } from "react";
import Question from "../Question/Question";
import { useNavigate } from "react-router-dom";

function Quiz({ score, setScore }) {
  const questions = Question();

  questions.forEach((q) => {
    const correctKey = Object.keys(q.sol)[parseInt(q.correct) - 1];
    q.correct = q.sol[correctKey];
  });
  const navigate = useNavigate();
  const [quesno, setQuestno] = useState(
    Math.floor(Math.random() * questions.length)
  );
  const [total, setTotal] = useState(15);

  const checkAns = (option) => {
    if (option === questions[quesno].correct && total > 0) {
      setScore((prevScore) => prevScore + 1);
      setQuestno((prevQuesNo) => {
        let ran = Math.floor(Math.random() * questions.length);
        return (prevQuesNo + ran) % questions.length;
      });
      setTotal((prevTotal) => prevTotal - 1);
    } else {
      navigate("/score");
    }
  };

  if (!questions[quesno]) return <p>Loading...</p>;

  return (
    <div className="row h100 justify-content-around align-items-center p-5">
      <div className="outer2">
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
        <div className="row h50 px-5">
          <div
            className="col-12 text-white text-center h15 p-5"
            style={{ fontSize: "xx-large" }}>
            Q. {questions[quesno].ques}
          </div>
          <div
            className="col-6 row text-center sizes1 optioncontaner"
            onClick={() => checkAns(questions[quesno].sol.a)}>
            <div
              className="justify-content-center align-items-center"
              style={{ height: "fitcontent" }}>
              <button className="optionbutton">
                {questions[quesno].sol.a}
              </button>
            </div>
          </div>
          <div
            className="col-6 row text-center sizes1 optioncontaner"
            onClick={() => checkAns(questions[quesno].sol.b)}>
            <div
              className="justify-content-center align-items-center"
              style={{ height: "fitcontent" }}>
              <button className="optionbutton">
                {questions[quesno].sol.b}
              </button>
            </div>
          </div>
          <div
            className="col-6 row text-center sizes1 optioncontaner"
            onClick={() => checkAns(questions[quesno].sol.c)}>
            <div
              className="justify-content-center align-items-center"
              style={{ height: "fitcontent" }}>
              <button className="optionbutton">
                {questions[quesno].sol.c}
              </button>
            </div>
          </div>
          <div
            className="col-6 row text-center sizes1 optioncontaner"
            onClick={() => checkAns(questions[quesno].sol.d)}>
            <div
              className="justify-content-center align-items-center"
              style={{ height: "fitcontent" }}>
              <button className="optionbutton">
                {questions[quesno].sol.d}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
