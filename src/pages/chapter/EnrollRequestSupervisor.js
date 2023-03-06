import React from "react";
import NavBar from "../../components/NavBar";
import employees from "../../data/Employee.json";
const EnrollRequestSupervisor = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">Enroll requests</div>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">EmployeeID</th>

              <th scope="col">Employeename</th>
              <th scope="col">Jobtitle</th>
              <th scope="col">Chapter</th>

              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item) => {
              return (
                <>
                  <tr className="align-middle">
                    <th scope="row">{item.id}</th>

                    <td>{item.name}</td>
                    <td>{item.jobtitle}</td>
                    <td>{item.chapter}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-success form-control"
                      >
                        Accept
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger form-control"
                      >
                        Decline
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default EnrollRequestSupervisor;
