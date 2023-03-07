import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
const QuizReport = () => {
  const { employee } = useContext(AppContext);
  return (
    <>
      <h3 className="py-4 result-head card ps-5">React Quiz Report</h3>
      <div id="content-creator" className="mt-2">
        <form className="d-flex con-creat">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Employee ID"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <table className=" empTable table table-striped table-hover mt-sm-5 mt-lg-5 ">
          <thead>
            <tr className="table-head ">
              <th>ID</th>
              <th>Name</th>
              <th>Submitted Date</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, index) => (
              <tr key={index}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.date}</td>
                <td>{emp.subScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuizReport;
