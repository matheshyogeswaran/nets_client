import React from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Jobtitle = () => {
  const [jobtitles, setJobtitle] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/jobtitles/showAllJobtitles")
      .then(function (response) {
        setJobtitle(response.data);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">Jobtitles</div>
        <br></br>
        <div className="row ">
          <div className="col-md-12">
            <Link to="/newjob" className="btn btn-outline-success form-control">
              Add New Jobtitle
            </Link>
          </div>
        </div>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col">Jobtitle name</th>

              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {jobtitles.map((item) => {
              return (
                <tr className="align-middle" key={item._id}>
                  <th scope="row">{item._id}</th>

                  <td>{item.jobTitlename}</td>

                  <td>
                    <Link
                      to={"/editjob/" + item._id + "/" + item.jobTitlename}
                      className="btn btn-outline-primary form-control"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={"/deletejob/" + item._id}
                      className="btn btn-outline-danger form-control"
                    >
                      Delete
                    </Link>
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
export default Jobtitle;
