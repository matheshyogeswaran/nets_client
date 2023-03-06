import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import Chapters from "../../data/Chapters.json";
const EnrollRequestEmployee = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">
          Other department Chapters
        </div>
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
            {Chapters.map((item) => {
              return item.department !== "IT"
                ? item.chapters.map((chapter) => {
                  return (
                    <div className="row m-2">
                      <div className="col-md-6">
                        <div className="form-control">{chapter}</div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-control">
                          {"From " + item.department + " Department"}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <Link className="btn btn-outline-primary form-control">
                          Enroll
                        </Link>
                      </div>
                    </div>
                  );
                })
                : null;
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default EnrollRequestEmployee;
