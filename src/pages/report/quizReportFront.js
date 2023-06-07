import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Search from "./../../subComponents/search";
import swal from "sweetalert";

const QuizReportFront = () => {
  const API_BASE = "http://localhost:1337";
  const [quizReport, setQuizReport] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();

  const navigate = useNavigate();

  //navigate to quiz report page
  const routeToQuizReport = (unitName, unitId) => {
    navigate("/quizreport", { state: { unitName: unitName, unitId: unitId } });
  };

  //store search value using getSearchValue method
  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };

  useEffect(() => {
    axios
      .get(API_BASE + "/quizFront")
      .then((res) => setQuizReport(res.data))
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

  return (
    <div className="pb-5">
      <h1 className="py-4 result-head card ps-5">Quiz Report</h1>
      {quizReport.length > 0 ? ( //check whether quizReport state has values
        <div className="accordion container" id="quiz-report">
          {/* display chapter name */}
          {quizReport.map((chap, index) => {
            return (
              <div key={index} className="accordion-item ">
                <h2 className="accordion-header" id={"heading" + index}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${index}`}
                    aria-expanded="false"
                    aria-controls={"collapse" + index}
                  >
                    {chap.chapterName}
                  </button>
                </h2>
                <div
                  id={index}
                  className={`${
                    index === 0
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }`}
                  aria-labelledby={"heading" + index}
                  data-bs-parent="#quiz-report"
                >
                  <div className="accordion-body ">
                    <div className="mt-2 mb-4">
                      <Search
                        handleGetSearchValue={getSearchValue}
                        width={{ width: "w-100" }}
                      />
                    </div>
                    <ul className="list-group list-group-flush ">
                      {/* display units details */}
                      {chap.units
                        .filter((unit) => {
                          if (showSearch) {
                            return unit;
                          } else if (
                            unit.unitName
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return unit;
                          }
                        })
                        .map((uni) => (
                          <li
                            key={index}
                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                          >
                            <div
                              className="text-primary"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                routeToQuizReport(uni.unitName, uni.unitId)
                              }
                            >
                              {uni.unitName}
                            </div>

                            <span className="badge bg-primary rounded-pill">
                              {uni.count}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          No data to show
        </h3>
      )}
    </div>
  );
};

export default QuizReportFront;
