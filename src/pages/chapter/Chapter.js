import React from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Chapter = () => {
  const [chapters, setChapter] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/chapters/showAllChapters")
      .then(function (response) {
        const filteredChapters = response.data.filter(chapter => chapter.depID !== null);
        setChapter(filteredChapters);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">Chapters</div>
        <br></br>
        <div className="row ">
          <div className="col-md-12">
            <Link
              to="/newchap"
              className="btn btn-outline-success form-control"
            >
              Add New Chapter
            </Link>
          </div>
        </div>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col">Chapter name</th>

              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((item) => {
              return (
                <tr className="align-middle" key={item._id}>
                  <th scope="row">{item._id}</th>

                  <td>{item.chaptername}</td>

                  <td>
                    <Link
                      to={"/editchap/" + item._id + "/" + item.chaptername}
                      className="btn btn-outline-primary form-control"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={"/deletechap/" + item._id}
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
export default Chapter;
