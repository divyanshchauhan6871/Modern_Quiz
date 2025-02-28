import React from "react";
import { useNavigate } from "react-router-dom";

function Score({ score }) {
  const navigate = useNavigate();
  const startquiz = () => {
    navigate("/");
  };

  return (
    <div className="row h100 justify-content-around align-items-center px-5 ">
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
        <div className="h15 text-center">
          <h1 className="sizes overflow-hidden text-white">
            You Scored : {score}
          </h1>
          <div className="p-2">
            <button
              className="mt-3 butt sizes"
              onClick={() => {
                startquiz();
              }}>
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
