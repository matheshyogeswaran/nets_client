import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Avatar from "react-avatar";
import axios from "axios";

const Feedback = () => {
  const API_BASE = "http://localhost:1337";
  const [employee, setEmployee] = useState([]);

  const currentUser =
    // jwt_decode(JSON.parse(localStorage.getItem("user")).token)
    //   .userData._id;
    // jey kumar =
    // "64160c4a7fb077053a2042e9";
    // piruthuviraj
    // "6415ebd87fb077053a2042d3";
    // lakshmi
    "63e492dafcd770ee87359ed8";
  //sagini
  // "63e492acfcd770ee87359ed6";

  useEffect(() => {
    axios
      .get(API_BASE + "/getFeedback/" + currentUser)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(employee?.show);
  return (
    <div>
      <h1 className="py-4 result-head card ps-5">Project Submission</h1>
      {employee.hasOwnProperty("error") === false ? (
        employee?.show ? (
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
            No records found
          </h3>
        )
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          {employee.error}
        </h3>
      )}
    </div>
  );
};

export default Feedback;
