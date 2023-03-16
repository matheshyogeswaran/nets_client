import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./../../App";
import axios from "axios";
import Search from "./../../subComponents/search";
const QuizReportFront = () => {
  const API_BASE = "http://localhost:1337";
  const { chapter } = useContext(AppContext);
  const { unit } = useContext(AppContext);
  const [quizSubmissions, setQuizSubmissions] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();

  const navigate = useNavigate();

  const routeToQuizReport = (unitName, unitId) => {
    navigate("/quizreport", { state: { unitName: unitName, unitId: unitId } });
  };

  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };

  useEffect(() => {
    axios
      .get(API_BASE + "/quizSubmission")
      .then((res) => setQuizSubmissions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pb-5">
      <h1 className="py-4 result-head card ps-5">Quiz Report</h1>
      <div className="accordion container" id="accordionExample">
        {chapter.map((chap, index) => {
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
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body ">
                  <div className="mt-2 mb-4">
                    <Search
                      handleGetSearchValue={getSearchValue}
                      width={{ width: "w-100" }}
                    />
                  </div>
                  <ul className="list-group list-group-flush ">
                    {chap.unitsOffer.map((unitId, index) => {
                      let count = 0;
                      return unit
                        .filter((un) => {
                          if (showSearch) {
                            return un;
                          } else if (
                            un.unitName
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return un;
                          }
                        })
                        .map(
                          (uni) =>
                            uni.unitId === unitId && (
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
                                {quizSubmissions.map(
                                  (quizSub) =>
                                    quizSub.unitId === uni.unitId &&
                                    console.log(++count)
                                )}
                                <span className="badge bg-primary rounded-pill">
                                  {count}
                                </span>
                              </li>
                            )
                        );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizReportFront;
