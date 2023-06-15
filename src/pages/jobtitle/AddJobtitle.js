import React, { useState, useEffect } from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import validator from "validator";
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

    // Validate jobtitle name
    const regex = /^[A-Za-z\s-]+$/;  //contains alphabet,space,-
    if (!validator.matches(jobTitlename, regex)) {
      swal({
        icon: "warning",
        text: "Jobtitle name must contain only alphabet letters.",
      });
      return;
    }

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
      <div className="alert mt-3 heading text-white"><h5>Create Jobtitle</h5></div>
      <div className="columns mt-4">
        <form name="myForm" onSubmit={submitJobtitle}>
          <div className="field">
            <label className="ml-5 createchap">Jobtitle Name</label>
            <div className="control">
              <input
                type="text"
                name="cname"
                className="inputdata my-2 ml-5"
                placeholder="Name"
                value={jobTitlename}
                onChange={(e) => setJobName(e.target.value)}
                required
              />
            </div>
          </div>
          <label className="ml-5 my-3 createchap">Suitable Department</label>
          <div>
            <img src={image4} className="picside" draggable={false} alt="this is image" />
          </div>
          <div className="field"></div>
          <div className="col-md-7">
            <select style={{ "backgroundColor": "MintCream" }}
              onChange={(e) => {
                setSelectedDepartment(e.target.value);
              }}
              className="form-select"
              aria-label="Default select example"
            >
              <option disabled selected>Department</option>
              {departments.map((item) => {
                return <option value={item._id}>{item.depName}</option>;
              })}
            </select>
          </div>
          <br></br>
          <div className="control">
            <button
              type="submit"
              className="btn btn-success mr-1 column is-half text-white col-md-7 my-3"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddJobtitle;
