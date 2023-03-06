import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
import { Link } from "react-router-dom";
import axios from "axios";

const AllocateChapter = () => {
  const [jobTitlename, setJobName] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/jobtitles/showAllJobtitles")
      .then(function (response) {
        setJobName(response.data);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">Allocate Chapters</div>
        <br></br> <br></br>
        <table className="table">
          {/* <thead>
            <tr>
              <th scope="col">Job title</th>

              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead> */}
          <tbody>
            {jobTitlename.map((item) => {
              return (
                <>
                  <tr className="align-middle">
                    <td>{item._id}</td>
                    <td>{item.jobTitlename}</td>

                    <td>
                      <button className="button">
                        <Link
                          to={"/editallocatechapter/" + item._id + "/" + item.jobTitlename}
                          className="showAns text-decoration-none"
                        >
                          Add chapters
                        </Link>
                      </button>

                      {/* <Link
                        to="/editallocatechapter"
                        className="btn btn-primary mr-1"
                      >
                        Add Chapters
                      </Link> */}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default AllocateChapter;
