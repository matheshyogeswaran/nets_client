import React from "react";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search from "./../../subComponents/search";
import axios from "axios";
const QuizReport = () => {
  const API_BASE = "http://localhost:1337";

  const location = useLocation();
  const propsData = location.state;
  const [users, setUsers] = useState([]);
  const [quizSubmission, setQuizSubmission] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();
  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };
  useEffect(() => {
    axios
      .get(API_BASE + "/showAllUsers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
    axios
      .get(API_BASE + "/quizSubmission")
      .then((res) => setQuizSubmission(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="py-4 result-head card ps-5">{propsData?.unitName}</h3>
      <div id="content-creator" className="mt-2">
        <Search
          handleGetSearchValue={getSearchValue}
          width={{ width: "w-auto" }}
        />
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
            {users
              .filter((emp) => {
                let name = emp.firstName + " " + emp.lastName;
                if (showSearch) {
                  return emp;
                } else if (name.toLowerCase().includes(search.toLowerCase())) {
                  return emp;
                }
              })
              .map(
                (emp, index) =>
                  emp.userRoleValue.toLowerCase() == "hired employee" &&
                  quizSubmission.map(
                    (quizSub) =>
                      quizSub.empId === emp.empId &&
                      quizSub.unitId === propsData?.unitId && (
                        <tr key={index}>
                          <td>{emp.empId}</td>
                          <td>
                            {emp.firstName} {emp.lastName}
                          </td>
                          <td>
                            {new Date(quizSub.submittedTime).getFullYear()}-
                            {new Date(quizSub.submittedTime).getMonth() < 10
                              ? (
                                  new Date(quizSub.submittedTime).getMonth() +
                                  parseInt(1)
                                )
                                  .toString()
                                  .padStart(2, 0)
                              : new Date(quizSub.submittedTime).getMonth() + 1}
                            -{new Date(quizSub.submittedTime).getDate()}
                          </td>
                          <td>{quizSub.score}</td>
                        </tr>
                      )
                  )
              )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuizReport;
