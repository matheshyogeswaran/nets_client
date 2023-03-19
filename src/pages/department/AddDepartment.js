import React, { useState } from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const AddDepartment = () => {
  const [depName, setDepName] = useState("");
  function submitDepartment(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/departments/addDepartment", {
        departmentName: depName,
      })
      .then((res) => {
        if (res.data.status === true) {
          swal({
            icon: "success",
            text: res.data.message,
          });
          setDepName("");
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
      <div className="form-control mt-3 bg-dark text-white">
        Create Department
      </div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={submitDepartment}>
          <div className="field">
            <label class="ml-5 createchap">Department Name</label>
            <div className="control">
              <input
                type="text"
                name="cname"
                className="input my-3 ml-5"
                placeholder="Name"
                value={depName}
                onChange={(e) => setDepName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="control">
            <button
              type="submit"
              className="btn btn-primary mr-1 column is-half text-white"
            >
              Save
            </button>
          </div>

          <div>
            <img src={image4} className="picside" draggable={false} alt="this is image" />
          </div>
          <div className="field"></div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;
