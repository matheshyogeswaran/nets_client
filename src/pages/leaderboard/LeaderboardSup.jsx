import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./../../subComponents/search";
const LeaderboardSup = () => {
  const API_BASE = "http://localhost:1337";
  const [score, setScore] = useState([]);
  const [search, setSearch] = useState();
  const [showSearch, setShowSearch] = useState();
  let filtering = 3;

  useEffect(() => {
    axios
      .get(API_BASE + "/getLeaderboardData")
      .then((res) => setScore(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };

  return (
    <>
      <h1 className="py-4 result-head card ps-5">Leaderboard</h1>
      <div className="container-md bg-light my-lg-3 p-md-4">
        <h2 className="top-gainers">Top Gainers</h2>
        <div className="row m-0 justify-content-center gy-3">
          <div className="col col-12 col-md-12 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header `}>
                <h2 className="w-100">{score?.[0]?.totalScore}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {score?.[0]?.firstName} {score?.[0]?.lastName}
                </h5>
                <h5 className="card-title leaderboard-desc">
                  {score?.[0]?.empId}
                </h5>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header `}>
                <h2 className="w-100">{score?.[1]?.totalScore}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {score?.[1]?.firstName} {score?.[1]?.lastName}
                </h5>
                <h5 className="card-title leaderboard-desc">
                  {score?.[1]?.empId}
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header `}>
                <h2 className="w-100">{score?.[2]?.totalScore}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {score?.[2]?.firstName} {score?.[2]?.lastName}
                </h5>
                <h5 className="card-title leaderboard-desc">
                  {score?.[2]?.empId}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="leaderboard-table-wrapper ">
          <div div className="d-flex justify-content-between my-5">
            <h4 className="top-gainers">All Employees</h4>
            <div id="" className="mt-2 float-end">
              <Search
                handleGetSearchValue={getSearchValue}
                width={{ width: "w-auto" }}
              />
            </div>
          </div>
          <table className="table leaderboard-table">
            <thead>
              <tr className="table-head">
                <th className="leaderboard-empId leaderboard-th">ID</th>
                <th className="leaderboard-th align-middle text-center">
                  Name
                </th>
                <th className="leaderboard-th align-middle text-center">
                  score
                </th>
                <th className="leaderboard-th align-middle text-center">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              {score
                .filter((emp1) => {
                  let name = emp1.firstName + " " + emp1.lastName;
                  if (showSearch) {
                    console.log("emp1....", emp1); // works at normal stage and click search
                    return emp1;
                  } else if (
                    name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    filtering = 0;
                    console.log(emp1); // works when filtering
                    return emp1;
                  }
                })
                .map((emp, index) =>
                  index >= filtering ? (
                    <tr className="leaderboard-tr " key={index}>
                      <td className="leaderboard-td ps-lg-5 align-middle text-center">
                        <div className="d-flex align-items-center h-100">
                          <img
                            className="img-fluid rounded-circle leaderboard-table-avatar"
                            src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                            alt="avatar"
                          />
                          <div className="d-flex flex-column px-3">
                            <span className="text-start">{emp.empId}</span>
                          </div>
                        </div>
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {emp.firstName} {emp.lastName}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {emp.totalScore}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {score.indexOf(emp) + 1}
                      </td>
                    </tr>
                  ) : null
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default LeaderboardSup;
