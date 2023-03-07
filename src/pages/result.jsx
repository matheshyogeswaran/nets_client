import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Result = () => {
  const [score] = useState(18);
  const [percent, setPercent] = useState(0); //circular process percentage
  const [noOfQuestion] = useState(40);
  const [percentage] = useState((score / noOfQuestion) * 100);

  const [attemptTime] = useState(new Date("2023-01-04 06:20:46"));
  const [submitTime] = useState(new Date("2023-01-04 7:45:20"));
  const [time] = useState(submitTime - attemptTime);
  const hours = Math.floor(time / (60 * 60 * 1000));
  const min = Math.floor((time % 3600000) / (60 * 1000));
  const sec = Math.floor((time % 60000) / 1000);

  useEffect(() => {
    setTimeout(() => {
      if (percent < percentage) {
        setPercent(percent + 1);
      }
    }, 1);
  });

  return (
    <div className="result ">
      <h1 className="py-4 result-head card ps-5">Unit 1 Quiz </h1>
      <div className="text-center">
        <div className="text d-flex flex-column align-items-center">
          <h2 className="score-header">
            Your Result
            <div className="text-success mt-4">
              {score}/{noOfQuestion}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div style={{ width: 150 }}>
                <CircularProgressbar value={percent} text={`${percent}%`} />
              </div>
            </div>
          </h2>
          <h5 className="">
            Time Taken:
            {hours.toString().padStart(2, "0") +
              ":" +
              min.toString().padStart(2, "0") +
              ":" +
              sec.toString().padStart(2, "0")}
          </h5>
          <div className="cong-msg">
            <h4> Congratualtions!!!</h4>
            <h4>You have Successfully Done the quiz</h4>
          </div>
          <button className="button">
            <Link to="/review" className="showAns text-decoration-none">
              Show Answers
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
