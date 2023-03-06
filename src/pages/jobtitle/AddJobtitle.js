import React, { useState, useEffect } from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const AddJobtitle = () => {
  const [jobTitlename, setJobName] = useState("");
  const [departments, setDepartment] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:1337/departments/showAllDepartments")
      .then(function (response) {
        setDepartment(response.data);
      });
  }, []);
  function submitJobtitle(e) {
    e.preventDefault();
    console.log(selectedDepartment);
    axios
      .post("http://localhost:1337/jobtitles/addJobtitle", {
        jobtitleName: jobTitlename,
        depID: selectedDepartment,
      })
      .then((res) => {
        if (res.data.status === true) {
          swal({
            icon: "success",
            text: res.data.message,
          });
          setJobName("");
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
        <form name="myForm" onSubmit={submitJobtitle}>
          <div className="field">
            <label class="ml-5 createchap">Jobtitle Name</label>
            <div className="control">
              <input
                type="text"
                name="cname"
                className="input my-3 ml-5"
                placeholder="Name"
                value={jobTitlename}
                onChange={(e) => setJobName(e.target.value)}
                required
              />
            </div>
          </div>
          <label class="ml-5 createchap">Suitable Department</label>
          <br></br>
          <div className="col-md-2">
            <select
              onChange={(e) => {
                setSelectedDepartment(e.target.value);
              }}
              class="form-select"
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

export default AddJobtitle;
