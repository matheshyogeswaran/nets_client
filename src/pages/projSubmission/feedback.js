import { useState, useEffect } from "react";
import Avatar from "react-avatar";
import swal from "sweetalert";
import axios from "axios";

const Feedback = () => {
  const API_BASE = "http://localhost:1337";
  const [employee, setEmployee] = useState([]);

  const currentUser = jwt_decode(JSON.parse(localStorage.getItem("user")).token)
    .userData._id;

  useEffect(() => {
    axios
      .get(API_BASE + "/getFeedback/" + currentUser)
      .then((res) => setEmployee(res.data))
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
  }, []);

  return (
    <div>
      <h1 className="py-4 result-head card ps-5">Project Submission</h1>
      {employee?.show ? ( // Checking if the employee data contains true in "show" field
        <div className="container feedback shadow ">
          <h3 className="py-3">Feedback</h3>
          <div className="pb-4 d-flex">
            <span className="pe-5">Score</span>
            <span className="ps-4 ms-2">{employee?.score}/100</span>
          </div>
          <div className="pb-5 d-flex">
            <span className="pe-5 me-1">Feedback</span>
            <span>{employee?.feedback}</span>
          </div>
          <div className="pb-4 d-flex">
            <span className="pe-5">Graded on</span>
            <span>{employee?.gradedOn}</span>
          </div>
          <div className="">
            <span className="pe-5">Graded by</span>
            <Avatar round name={employee?.gradedBy} size="80" />
            <span className="ms-2">{employee?.gradedBy}</span>
          </div>
        </div>
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          You are not allowed to view the results
        </h3>
      )}
    </div>
  );
};

export default Feedback;
