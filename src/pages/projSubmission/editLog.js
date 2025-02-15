import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import Search from "../../components/search";
import { MdOutlineCheckCircle, MdOutlineCancel } from "react-icons/md";

const Editlog = () => {

  const [editlog, setEditlog] = useState([]);
  const [search, setSearch] = useState("");
  const [showFeedback, setShowFeedback] = useState();
  const [showSearch, setShowSearch] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BASE+"/getScoreEditLog")
      .then((res) => {
        const sortedData = res?.data?.sort((a, b) =>
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
      {editlog?.length !== 0 ? ( // Checking if there is data to show
        <>
          {/* Rendering the search bar component */}
          <div className="d-flex justify-content-between m-4">
            <h3 className="text-secondary ">
              Project Assignment Score Edit Log
            </h3>
            <div id="content-creator" className="mt-2">
              <Search
                handleGetSearchValue={getSearchValue}
                width={{ width: "w-auto" }}
              />
            </div>
          </div>
          <div className="table-responsive m-md-5 mt-4">
            <table className="table table-hover ">
              <thead>
                <tr className="table-dark">
                  <th className="fw-medium">Project Name</th>
                  <th className="fw-medium">Submitted By</th>
                  <th className="fw-medium">Previous Score</th>
                  <th className="fw-medium">Updated Score</th>
                  <th className="fw-medium">Previous Show</th>
                  <th className="fw-medium">Updated Show</th>
                  <th className="fw-medium">Updated By</th>
                  <th className="fw-medium">Updated Time</th>
                  <th className="fw-medium">Department</th>
                </tr>
              </thead>
              <tbody>
                {editlog
                  ?.filter((log) => {
                    // Filtering the editlog data based on the search query
                    if (showSearch) {
                      return log;
                    } else if (
                      log?.submittedBy
                        ?.toLowerCase()
                        ?.includes(search?.toLowerCase())
                    ) {
                      return log;
                    }
                  })
                  ?.map((log, index) =>
                    //Map score array
                    log?.score?.map((score, indexi) =>
                      log?.show?.map((show, indexsh) =>
                        //Map upgraded array
                        log?.upgradedOn?.map((date, indexx) =>
                          log?.upgradedBy?.map(
                            (supervisor, indexs) =>
                              indexi === indexsh &&
                              indexsh === indexx &&
                              indexx === indexs &&
                              indexi > 0 && ( // Rendering table rows for each editlog entry
                                <>
                                  <tr
                                    key={index}
                                    className="score-editlog-pointer-event vertical-align"
                                    onClick={() =>
                                      setShowFeedback(indexi + log?.userEmpId)
                                    }
                                  >
                                    <td>{log?.projectName}</td>
                                    <td>
                                      <span className="ms-3">
                                        <img
                                          className="img-fluid rounded-circle supervisor-avatar"
                                          src={log?.employeeUserImage}
                                          alt={log?.submittedBy}
                                        />
                                        <br></br>
                                        <span className="ms-3">
                                          {log?.userEmpId}
                                        </span>
                                      </span>
                                      <br></br>
                                      {log?.submittedBy}
                                    </td>
                                    <td>{log?.score[indexi - 1]}</td>
                                    <td>{score}</td>
                                    <td className="pt-4 text-center">
                                      {log?.show[indexsh - 1] ? (
                                        <MdOutlineCheckCircle
                                          color="green"
                                          size={25}
                                        />
                                      ) : (
                                        <MdOutlineCancel
                                          color="red"
                                          size={25}
                                        />
                                      )}
                                    </td>
                                    <td className="pt-4 text-center">
                                      {show ? (
                                        <MdOutlineCheckCircle
                                          color="green"
                                          size={25}
                                        />
                                      ) : (
                                        <MdOutlineCancel
                                          color="red"
                                          size={25}
                                        />
                                      )}
                                    </td>
                                    <td>
                                      <span className="ms-3">
                                        <img
                                          className="img-fluid rounded-circle supervisor-avatar"
                                          src={supervisor?.supervisorUserImage}
                                          alt={supervisor?.supName}
                                        />
                                        <br></br>
                                        <span className="ms-3">
                                          {supervisor?.supId}
                                        </span>
                                      </span>
                                      <br></br>
                                      {supervisor?.supName}
                                    </td>
                                    {/* to insert HTML content into the table cell. */}
                                    <td
                                      dangerouslySetInnerHTML={{ __html: date }}
                                    ></td>
                                    <td>{log.department}</td>
                                  </tr>
                                  {showFeedback === indexi + log?.userEmpId && (
                                    <tr>
                                      {log?.feedback?.map(
                                        (feedbackData, indexf) =>
                                          indexf > 0 &&
                                          indexf === indexi && (
                                            <td
                                              key={indexf}
                                              className=" score-edit-log-feedback-td p-4"
                                              colSpan="9"
                                            >
                                              <div className="d-flex justify-content-between">
                                                <span>
                                                  <h4>Previous Feedback</h4>
                                                  <span>
                                                    {log?.feedback[indexf - 1]}
                                                  </span>
                                                </span>
                                                <span className="border-end border-secondary border-2 mx-4"></span>
                                                <span>
                                                  <h4>Updated Feedback</h4>
                                                  <span>{feedbackData}</span>
                                                </span>
                                              </div>
                                            </td>
                                          )
                                      )}
                                    </tr>
                                  )}
                                </>
                              )
                          )
                        )
                      )
                    )
                  )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div
          className="shadow text-center bg-dark text-light"
          width="90px"
          height="90px"
          style={{ margin: "15%", padding: "20px" }}
        >
          <h4>No data available for display</h4>
        </div>
      )}
    </>
  );
};

export default Editlog;
