import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
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
        ); // Sorting the fetched data alphabetically by project name
        setEditlog(sortedData);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle "User not found" error
          swal({
            title: error.response.data.error,
            icon: "warning",
            dangerMode: true,
          });
        } else {
          // Handle other errors
          swal({
            title: error.message,
            icon: "warning",
            dangerMode: true,
          });
        }
      });
  }, []);

  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };
  return (
    <>
      <h1 className="py-4 result-head card ps-5">Grade history</h1>
      {editlog?.length !== 0 ? ( // Checking if there is data to show
        <>
          {/* Rendering the search bar component */}
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
                    // Filtering the editlog data based on the search query
                    if (showSearch) {
                      return log;
                    } else if (
                      log.submittedBy
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return log;
                    }
                  })
                  .map((log, index) =>
                    //Map score array
                    log.score.map((score, indexi) =>
                      //Map upgraded array
                      log.upgradedOn.map(
                        (date, indexx) =>
                          indexi === indexx &&
                          indexi > 0 && ( // Rendering table rows for each editlog entry
                            <tr>
                              <td>{log.projectName}</td>
                              <td>{log.submittedBy}</td>
                              <td>{log.score[indexi - 1]}</td>
                              <td>{score}</td>
                              <td>{log.upgradedBy}</td>
                              {/* to insert HTML content into the table cell. */}
                              <td
                                dangerouslySetInnerHTML={{ __html: date }}
                              ></td>
                            </tr>
                          )
                      )
                    )
                  )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          No data to show
        </h3>
      )}
    </>
  );
};

export default Editlog;
