import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import employees from "../../data/Employee.json";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const EnrollRequestSupervisor = () => {
  const depID = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData.department;
  console.log(depID);
  const [chapters, setChapter] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/chapters/getEnrolledChapters/${depID}`)
      .then(function (response) {
        const filteredChapters = response.data.filter(chapter => chapter.depID !== null);
        setChapter(filteredChapters);

      });
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <div className="form-control mt-3 heading">Enroll requests</div>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">EmployeeID</th>
              <th scope="col">Employeename</th>
              <th scope="col">Jobtitle</th>
              <th scope="col">Chapter</th>
              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((item) => {

              if (item.requested.length === 0) {
                return null;
              }
              return (
                <tr key={item._id}>
                  <td>{item.requested}</td>
                  <td>name</td>
                  <td>title</td>
                  <td>{item.chapterName}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success form-control"
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger form-control"
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default EnrollRequestSupervisor;
