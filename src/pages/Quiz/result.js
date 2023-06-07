import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import swal from "sweetalert";

const Result = () => {
  const API_BASE = "http://localhost:1337";
  const currentUser = jwt_decode(JSON.parse(localStorage.getItem("user")).token)
    .userData._id;

  const location = useLocation();
  const propsData = location.state;
  const unitId = propsData?.unitId;

  const [result, setResult] = useState({});
  const [percentage, setPercentage] = useState(0); //circular process percentage

  useEffect(() => {
    // Fetch result
    axios
      .get(API_BASE + "/result/" + currentUser + "/" + unitId)
      .then((res) => setResult(res.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle "User not found" error
          swal({
            title: error.response.data.error,
            icon: "warning",
            dangerMode: true,
          });
        } else {
          // Handle other errors
          swal({
            title: error.message,
            icon: "warning",
            dangerMode: true,
          });
        }
      });
    // store badge for the current user if he will be below rank 4
    axios
      .get(API_BASE + "/storeBadge/" + currentUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // circular progress
    setTimeout(() => {
      if (percentage < result?.score) {
        setPercentage(percentage + 1);
      }
    }, 1);
  });

  return (
    <div className="result ">
      <h1 className="py-4 result-head card ps-5">{result?.unitName} quiz </h1>
      <div className="text-center">
        <div className="text d-flex flex-column align-items-center">
          <h2 className="score-header">
            Your Result
            <div className="text-success mt-4">
              {result?.numOfCorrectAns}/{result?.totalNumOfQuestions}
            </div>
            <div className="d-flex justify-content-center mt-4">
              <div style={{ width: 150 }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${result?.score}%`}
                />
              </div>
            </div>
          </h2>
          <h5 className="">{result?.timeTaken}</h5>
          <div className="cong-msg">
            <h4> Congratualtions!!!</h4>
            <h4>You have Successfully Done the quiz</h4>
          </div>
          <button className="button-result">
            <Link
              to="/review"
              state={{ unitId: unitId }}
              className="showAns text-decoration-none"
            >
              Show Answers
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
