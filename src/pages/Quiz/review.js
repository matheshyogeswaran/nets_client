import { useState, useEffect } from "react";
import { MdOutlineCancel, MdOutlineCheckCircle } from "react-icons/md";
import { useLocation } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Review = () => {
  const API_BASE = "http://localhost:1337";
  const [review, setReview] = useState({});
  const currentUser =
    // jwt_decode(JSON.parse(localStorage.getItem("user")).token)
    //   .userData._id;
    // jey kumar =
    // "64160c4a7fb077053a2042e9";
    // piruthuviraj
    "6415ebd87fb077053a2042d3";
  // lakshmi
  // "63e492dafcd770ee87359ed8";
  //sagini
  // "63e492acfcd770ee87359ed6";
  const location = useLocation();
  const propsData = location.state;
  const unitId = propsData?.unitId;

  useEffect(() => {
    axios
      .get(API_BASE + "/review/" + currentUser + "/" + unitId)
      .then((res) => setReview(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="py-4 result-head card ps-5">
        {review?.unitName} quiz review
      </h3>
      {Object.keys(review).length !== 0 ? (
        <div className=" container-md">
          {review?.reviewData?.map((review, index) => (
            <div>
              <div className="question">
                <h5 className="quesno d-flex align-items-center justify-content-between">
                  Question: {index + 1}
                  {review?.checkedStatus ? (
                    <MdOutlineCheckCircle className=" fs-2" color="#4fdc6e" />
                  ) : (
                    <MdOutlineCancel className="fs-2" color="#ff0000" />
                  )}
                </h5>
                <div className="que">
                  <p key={index}>{review?.question}</p>
                  <div className="row m-0">
                    {review?.answers?.map((answer, index) => (
                      <div className="col-6">
                        {review?.correctAnswer === index ? (
                          <div
                            className={`badge w-100 ans-badge corr-ans  m-2 `}
                          >
                            {answer}
                          </div>
                        ) : index === review?.submittedAnswer ? (
                          <div
                            className={`badge w-100 ans-badge wrong-ans m-2`}
                          >
                            {answer}
                          </div>
                        ) : (
                          <span
                            className={`badge w-100 ans-badge other-ans m-2`}
                          >
                            {answer}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          No data to show
        </h3>
      )}
    </>
  );
};

export default Review;
