import { useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { MdEditNote, MdCheckCircleOutline } from "react-icons/md";

const Evaluate = () => {
  const API_BASE = "http://localhost:1337";

  const gradedBy = jwt_decode(JSON.parse(localStorage.getItem("user")).token)
    .userData._id;

  const location = useLocation();
  const propsData = location.state;
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [show, setShow] = useState();

  useEffect(() => {
    let empId = propsData?.empId;
    axios
      .get(API_BASE + "/getEvaluatedFeedback/" + empId)
      .then((res) => {
        setScore(res.data.projectScore);
        setFeedback(res.data.feedback);
        setShow(res.data.show);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (score !== null) {
      let empId = propsData?.empId;
      try {
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
          : axios
              .post(API_BASE + "/toEvaluateSubmission", {
                empId,
                score,
                feedback,
                show,
                gradedBy,
              })
              .then(() => {
                swal("Evaluated!", "Evaluated successfully", "success");
              });
      } catch (err) {
        console.log(err);
      }
    }
  }
  const handleStoreScore = () => {
    let empId = propsData?.empId;
    let projectName = propsData?.projectName;
    propsData?.update
      ? axios
          .post(API_BASE + "/updateScore", {
            score: score,
            projectName: projectName,
            empId: empId,
            gradedBy,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err))
      : axios
          .post(API_BASE + "/storeScore", {
            score: score,
            projectName: projectName,
            empId: empId,
            gradedBy,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5">
        Grading Final Project Assignment Submission
      </h1>
      <div className="container-md evaluate ">
        <div className="d-flex  py-2">
          <Avatar name={`${propsData?.firstName}`} round />
          <div className="d-flex flex-column ps-4">
            <h2 className="text-dark">
              {propsData?.firstName} {propsData?.lastName}
            </h2>
            <h5 className="text-secondary">{propsData?.empId}</h5>
          </div>
        </div>

        <div className="">
          <form className="w-50" onSubmit={handleSubmit}>
            <div className=" mb-4">
              <label className="form-label fs-4">Score</label>
              <input
                type="number"
                max={"100"}
                min={"0"}
                className="form-control"
                placeholder="Enter score"
                Value={score}
                onChange={(e) => setScore(e.target.value)}
                required={score === null ? true : false}
              />
            </div>

            <div className=" mb-3">
              <label className="form-label fs-4">Feedback</label>
              <textarea
                className="form-control"
                placeholder="Your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>

            <div className=" mb-3">
              <label className="form-check-label fs-4">
                Show result to employee
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
  );
};

export default Evaluate;