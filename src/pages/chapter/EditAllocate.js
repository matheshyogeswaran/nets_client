import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import users from "../../data/Users.json";
import NavBar from "../../components/NavBar";
import axios from "axios";

const EditAllocate = () => {
  const [chaptername, setChapter] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/chapters/showAllChapters")
      .then(function (response) {
        const filteredChapters = response.data.filter(chapter => chapter.depID !== null);
        setChapter(filteredChapters);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading   ">
          Edit Allocate Chapters
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
            {chaptername.map((item) => {
              return (
                <>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    ></input>
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      {item.chaptername}
                    </label>
                  </div>
                  {/* <tr className="align-middle">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    ></input>
                    <label class="form-check-label">{item.chapter}</label>
                  </tr> */}
                </>
              );
            })}
            <input
              type="submit"
              className="btn btn-primary"
              value="Edit Allocated chapter"
            ></input>{" "}
            &nbsp;
            <input
              type="reset"
              className="btn btn-warning"
              value="Reset"
            ></input>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default EditAllocate;



