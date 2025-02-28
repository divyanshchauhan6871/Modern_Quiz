import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setScore }) => {
  const navigate = useNavigate();
  const startquiz = () => {
    navigate("/rule");
  };
  setScore(0);
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
        <div className="p-5 text-white row">
          <div className="col-12 sizes text-center">
            START THE QUIZ
            <br />
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
  );
};

export default Home;
