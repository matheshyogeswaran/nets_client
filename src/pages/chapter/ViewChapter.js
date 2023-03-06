import React from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ViewChapter = () => {
  const [chapters, setChapter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/chapters/showAllChapters")
      .then(function (response) {
        setChapter(response.data);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">View Chapters</div>
        <br></br>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Chapter ID"
              />
            </form>

            <tr>
              <th scope="col">#</th>

              <th scope="col">Chapter name</th>
              <th scope="col">Related department</th>
              <th scope="col">Created by</th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((item) => {
              return (
                <tr className="align-middle" key={item._id}>
                  <th scope="row">{item._id}</th>

                  <td>{item.chaptername}</td>
                  <td>{item.depID}</td>
                  <td>{item.createdBy}</td>
                  <td>{item.offeredInJobTitles}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default ViewChapter;
