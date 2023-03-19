import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import users from "../../data/Users.json";
import NavBar from "../../components/NavBar";
import axios from "axios";

const EditAllocate = () => {
  const [chaptername, setChapter] = useState([]);
  const [checked, setChecked] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:1337/chapters/showAllChapters")
      .then(function (response) {
        const filteredChapters = response.data.filter(chapter => chapter.depID !== null);
        setChapter(filteredChapters);
      });
  }, []);

  const handleCheck = (event) => {
    setChecked({
      ...checked,
      [event.target.id]: event.target.checked,
    });
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading   ">
          Edit Allocate Chapters
        </div>
        <br></br> <br></br>
        <table className="table">
          <tbody>
            {chaptername.map((item) => {
              return (
                <div key={item.id} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={item.id}
                    checked={checked[item.id]}
                    onChange={handleCheck}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={item.id}
                  >
                    {item.chapterName}
                  </label>
                </div>
              );
            })}
            <input
              type="submit"
              className="btn btn-primary"
              value="Edit Allocated chapter"
            />{" "}
            &nbsp;
            <input
              type="reset"
              className="btn btn-warning"
              value="Reset"
            />
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default EditAllocate;