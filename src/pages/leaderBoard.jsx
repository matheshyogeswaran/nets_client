import React from "react";
import { AppContext } from "../App";
import { useContext, useState } from "react";

const LeaderBoard = () => {
  const { employee } = useContext(AppContext);
  const [scoreArr] = useState([]);
  {
    employee.map((emp) =>
      scoreArr.push({ id: emp.id, name: emp.name, score: emp.score })
    );
  }
  {
    scoreArr.sort((a, b) => b.score - a.score);
  }
  return (
    <div>
      <h1 className="py-4 result-head card ps-5"> Leaderboard</h1>
      <div className="container-md bg-light my-lg-3 p-md-4">
        <h2 className="top-gainers">Top Gainers</h2>
        <div className="row m-0 justify-content-center gy-3">
          <div className="col col-12 col-md-12 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header `}>
                <h2 className="w-100">{scoreArr[0].score}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {scoreArr[0].name}
                </h5>
                <h5 className="card-title leaderboard-desc">
                  {scoreArr[0].id}
                </h5>
              </div>
            </div>
          </div>

          <div className="col col-12 col-md-6 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div
                className={`card-header leaderboard-header bg-primary text-white `}
              >
                <h2 className="w-100">{scoreArr[1].score}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {scoreArr[1].name}
                </h5>
                <h5 className="card-title leaderboard-desc">
                  {scoreArr[1].id}
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-6 col-lg-3">
            <div className="card leaderboard-card text-center">
              <div className={`card-header leaderboard-header `}>
                <h2 className="w-100">{scoreArr[2].score}</h2>
              </div>
              <div className="leaderboard-avatar-wrapper">
                <img
                  className="img-fluid rounded-circle leaderboard-avatar"
                  src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title leaderboard-title">
                  {scoreArr[2].name}
                </h5>
                <h5 className="card-title leaderboard-desc">
                  {scoreArr[2].id}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <img src="gold.png" className="badge ms-5" draggable="false" />
          <div className=" d-flex justify-content-center ">
            <div class="score-alert alert alert-info ms-5" role="alert">
              You Need{" "}
              <span className="text-primary fw-bold">
                {scoreArr[0].score - scoreArr[1].score}
              </span>{" "}
              score to beat{" "}
              <span className="text-primary"> {scoreArr[0].name}</span>
            </div>
          </div>
        </div>

        <div className="leaderboard-table-wrapper">
          <h4 className="top-gainers">All Employees</h4>
          <table className="table leaderboard-table">
            <thead>
              <tr className="table-head">
                <th className="leaderboard-th align-middle text-center">ID</th>
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
              {scoreArr.map(
                (emp, index) =>
                  index > 3 && (
                    <tr className="leaderboard-tr">
                      <td className="leaderboard-td align-middle text-center">
                        <div className="d-flex align-items-center h-100">
                          <img
                            className="img-fluid rounded-circle leaderboard-table-avatar"
                            src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                          />
                          <div className="d-flex flex-column px-3">
                            <span className="text-start leaderboard-table-name">
                              {emp.id}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {emp.name}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {emp.score}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {index}
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
