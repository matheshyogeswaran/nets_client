import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { MdEditNote, MdCheckCircleOutline } from "react-icons/md";

const Evaluate = () => {
  const API_BASE = "http://localhost:1337";

  // get the evaluator's ID from the JWT
  const gradedBy = jwt_decode(JSON?.parse(localStorage?.getItem("user"))?.token)
    ?.userData?._id;

  const location = useLocation();
  const propsData = location.state;
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [show, setShow] = useState();
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    let empId = propsData?.empId;
    axios
      .get(API_BASE + "/getEvaluatedFeedback/" + empId)
      .then((res) => {
        setScore(res?.data?.projectScore);
        setFeedback(res?.data?.feedback);
        setShow(res?.data?.show);
        setUserImage(res?.data?.userImage);
      })
      .catch((error) => {
        if (error?.response && error?.response?.status === 404) {
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
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      isNaN(score) ||
      score === " " ||
      score === null ||
      score === "" ||
      score === undefined
    ) {
      // Score input is required
      swal({
        title: "Score is required",
        text: "score is required to complete evaluation",
        icon: "warning",
        dangerMode: true,
      });
      return;
    }
    if (score < 0 || score > 100) {
      // Score input must be a number between 0 and 100 and
      swal({
        title: "Not valid score",
        text: "Score must be a number between 0 and 100",
        icon: "warning",
        dangerMode: true,
      });
      return;
    }
    // if score is a valid number continue the procedure
    if (
      !isNaN(score) &&
      score !== " " &&
      score !== null &&
      score !== "" &&
      score !== undefined
    ) {
      let empId = propsData?.empId;
      try {
        //if it is a updating score, not first time
        propsData?.update
          ? swal({
              title: "Are you sure?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                axios
                  .post(API_BASE + "/toEvaluateSubmission", {
                    empId,
                    score,
                    feedback,
                    show,
                    gradedBy,
                  })
                  .then(() => {
                    swal("Updated!", "Upgraded successfully", "success");
                  });
              }
            })
          : // if it is first time evaluating
            axios
              .post(API_BASE + "/toEvaluateSubmission", {
                empId,
                score,
                feedback,
                show,
                gradedBy,
              })
              .then(() => {
                //if evaluated successfully
                swal("Evaluated!", "Evaluated successfully", "success");
              });
      } catch (err) {
        // if evaluation is failure
        swal({
          title: err.message,
          icon: "warning",
          dangerMode: true,
        });
      }
    }
  }
  const handleStoreScore = () => {
    if (
      !isNaN(score) &&
      score !== " " &&
      score !== null &&
      score !== "" &&
      score !== undefined &&
      score > 0 &&
      score < 100
    ) {
      let empId = propsData?.empId;
      let projectName = propsData?.projectName;
      propsData?.update
        ? // if score is already exist (evaluated already)
          axios
            .put(API_BASE + "/updateScore", {
              score: score,
              feedback,
              show,
              projectName: projectName,
              empId: empId,
              gradedBy,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        : //first time evaluating
          axios
            .post(API_BASE + "/storeScore", {
              score: score,
              feedback,
              show,
              projectName: projectName,
              empId: empId,
              gradedBy,
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }
  };
  return (
    <div className="evaluate-grid">
      <div></div>
      <div className="shadow mt-lg-3">
        <h4 className="evaluate-header">
          {propsData?.update ? "Upgrading" : "Evaluating"} Project Assignment
          Submission
        </h4>
        <div className="container-md evaluate">
          <div className="d-flex  py-2">
            <img
              className="img-fluid rounded-circle leaderboard-avatar"
              src={userImage}
              alt={propsData?.firstName}
            />
            <div className="d-flex flex-column ps-4">
              <h2 className="">
                {propsData?.firstName} {propsData?.lastName}
              </h2>
              <h5 className="text-secondary">{propsData?.empId}</h5>
            </div>
          </div>

          <div className="feedback-submit-form">
            <form className="" onSubmit={handleSubmit}>
              <div className=" mb-4">
                <label className="form-label fs-4">Score</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter score"
                  Value={score}
                  onChange={(e) => setScore(e.target.value)}
                />
              </div>

              <div className=" mb-3">
                <label className="form-label fs-4">Feedback</label>
                <textarea
                  className="form-control"
                  placeholder="Your feedback"
                  value={feedback}
                  rows={3}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
              </div>

              <div className=" mb-3">
                <label className="form-check-label fs-4">
                  Show feedback to employee
                </label>
                <div className="form-check checkbox-lg form-switch mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={show}
                    onChange={(e) => setShow(e.target.checked)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary mt-2 px-4"
                onClick={handleStoreScore}
              >
                {/* icon selection for evaluating and updating */}
                {propsData?.update ? (
                  <span className="fs-5">
                    Upgrade{"  "}
                    <MdEditNote size={25} />
                  </span>
                ) : (
                  <span className="fs-5">
                    Save <MdCheckCircleOutline size={23} />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
