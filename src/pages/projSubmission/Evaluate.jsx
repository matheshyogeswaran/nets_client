import { useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";

const Evaluate = (props) => {
  const API_BASE = "http://localhost:1337";
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (score !== null) {
      let empId = propsData?.empId;
      try {
        await axios
          .post(API_BASE + "/toEvaluateSubmission", {
            empId,
            score,
            feedback,
            show,
          })
          .then((res) => {
            res.data === true && propsData?.update === true
              ? swal("Updated!", "Updated successfully", "success")
              : swal("Evaluated!", "Evaluated successfully", "success");
          });
      } catch (err) {
        console.log(err);
      }
    }
  }
  console.log();

  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5">
        Grading Final Project Assignment Submission
      </h1>
      <div className="container-md evaluate ">
        <div className="d-flex  py-4">
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
            <>
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

              <p className="text-danger"></p>
            </>

            <>
              <label className="form-label fs-4">Feedback</label>
              <textarea
                className="form-control"
                placeholder="Your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <p></p>
            </>
            <div className="form-check form-switch pe-3 checkbox-lg">
              <input
                className="form-check-input"
                type="checkbox"
                checked={show}
                onChange={(e) => setShow(e.target.checked)}
              />
              <label className="form-check-label fs-5 ps-3">Show grade</label>
            </div>
            <button type="submit" className="btn btn-outline-primary mt-2 px-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
