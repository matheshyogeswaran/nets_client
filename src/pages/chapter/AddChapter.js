import React, { useState, useEffect } from "react";
import image4 from "../../images/1.svg";
// import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const AddChapter = () => {
  const [chaptername, setChapterName] = useState("");
  const [departments, setDepartment] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:1337/departments/showAllDepartments")
      .then(function (response) {
        setDepartment(response.data);
      });
  }, []);
  function submitChapter(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/chapters/addChapter", {
        chapterName: chaptername,
        depID: selectedDepartment,
      })
      .then((res) => {
        if (res.data.status === true) {
          swal({
            icon: "success",
            text: res.data.message,
          });
          setChapterName("");
        } else {
          swal({
            icon: "warning",
            text: res.data.message,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="form-control mt-3 bg-dark text-white">Create Chapter</div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={submitChapter}>
          <div className="field">
            <label className="ml-5 createchap">Chapter Name</label>
            <div className="control">
              <input
                type="text"
                name="cname"
                className="input my-3 ml-5"
                placeholder="Name"
                value={chaptername}
                onChange={(e) => setChapterName(e.target.value)}
                required
              />
            </div>
          </div>
          <label className="ml-5 createchap">Suitable Department</label>
          <br></br>
          <div className="col-md-2">
            <select
              onChange={(e) => {
                setSelectedDepartment(e.target.value);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Department</option>
              {departments.map((item) => {
                return <option value={item._id}>{item.depName}</option>;
              })}
            </select>
          </div>
          <br></br>
          <div className="control">
            <button
              type="submit"
              className="btn btn-primary mr-1 column is-half text-white"
            >
              Save
            </button>
          </div>
          <div>
            <img src={image4} draggable={false} alt="this is image" />
          </div>
          <div className="field"></div>
        </form>
      </div>
    </div>
  );
};

export default AddChapter;
