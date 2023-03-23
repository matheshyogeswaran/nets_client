import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./../../subComponents/search";

const Editlog = () => {
  const API_BASE = "http://localhost:1337";
  const [editlog, setEditlog] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();

  useEffect(() => {
    axios
      .get(API_BASE + "/getScoreEditLog")
      .then((res) => {
        const sortedData = res.data.sort((a, b) =>
          a.projectName.localeCompare(b.projectName)
        );
        setEditlog(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };
  return (
    <>
      <h1 className="py-4 result-head card ps-5">Grade history</h1>

      <Search
        handleGetSearchValue={getSearchValue}
        width={{ width: "w-auto" }}
      />

      <div className="table-responsive m-md-5 mt-4">
        <table className="table table-hover ">
          <thead>
            <tr className="table-dark">
              <th>Project Name</th>
              <th>Submitted by</th>
              <th>Previous score</th>
              <th>Current sore</th>
              <th>Updraded by</th>
              <th>Upgraded time</th>
            </tr>
          </thead>
          <tbody>
            {editlog
              .filter((log) => {
                if (showSearch) {
                  return log;
                } else if (
                  log.submittedBy.toLowerCase().includes(search.toLowerCase())
                ) {
                  return log;
                }
              })
              .map((log, index) =>
                log.score.map((score, indexi) =>
                  log.upgradedOn.map(
                    (date, indexx) =>
                      indexi === indexx &&
                      indexi > 0 && (
                        <tr>
                          <td>{log.projectName}</td>
                          <td>{log.submittedBy}</td>
                          <td>{log.score[indexi - 1]}</td>
                          <td>{score}</td>
                          <td>Piruthuviraj Ravichandran</td>
                          <td>{date}</td>
                        </tr>
                      )
                  )
                )
              )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Editlog;
