import React from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Department = () => {
  const [departments, setDepartment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/departments/showAllDepartments")
      .then(function (response) {
        setDepartment(response.data);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">Departments</div>
        <br></br>
        <div className="row ">
          <div className="col-md-12">
            <Link to="/newdep" className="btn btn-outline-success form-control">
              Add New Department
            </Link>
          </div>
        </div>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col">Department name</th>

              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((item) => {
              return (
                <tr className="align-middle" key={item._id}>
                  <th scope="row">{item._id}</th>

                  <td>{item.depName}</td>

                  <td>
                    <Link
                      to={"/editdep/" + item._id + "/" + item.depName}
                      className="btn btn-outline-primary form-control"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={"/deletedep/" + item._id}
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
export default Department;
