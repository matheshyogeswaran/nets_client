import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const QuizReportFront = () => {
  const [chapter] = useState([
    {
      chapter: "React",
      unit: [
        { name: "Installation", noOfAttempts: 23 },
        { name: "Hooks", noOfAttempts: 44 },
        { name: "States", noOfAttempts: 32 },
        { name: "Props", noOfAttempts: 47 },
        { name: "Installation", noOfAttempts: 64 },
        { name: "Props", noOfAttempts: 26 },
        { name: "States", noOfAttempts: 85 },
        { name: "Installation", noOfAttempts: 23 },
        { name: "Hooks", noOfAttempts: 74 },
      ],
    },
    {
      chapter: "Java",
      unit: [
        { name: "Installation", noOfAttempts: 73 },
        { name: "Class", noOfAttempts: 34 },
        { name: "Object", noOfAttempts: 86 },
        { name: "Props", noOfAttempts: 26 },
        { name: "Installation", noOfAttempts: 74 },
        { name: "Props", noOfAttempts: 97 },
        { name: "States", noOfAttempts: 85 },
        { name: "Installation", noOfAttempts: 23 },
        { name: "Hooks", noOfAttempts: 85 },
      ],
    },
    {
      chapter: "Flutter",
      unit: [
        { name: "Installation", noOfAttempts: 73 },
        { name: "Class", noOfAttempts: 34 },
        { name: "Object", noOfAttempts: 86 },
        { name: "Props", noOfAttempts: 26 },
        { name: "Installation", noOfAttempts: 74 },
        { name: "Props", noOfAttempts: 97 },
        { name: "States", noOfAttempts: 85 },
        { name: "Installation", noOfAttempts: 23 },
        { name: "Hooks", noOfAttempts: 85 },
      ],
    },
  ]);
  return (
    <div className="pb-5">
      <h1 className="py-4 result-head card ps-5"> React Quiz Report</h1>
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
                  {chap.chapter}
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
                  <form className="d-flex mb-3 search ">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search Quiz"
                    />
                    <button className="btn btn-outline-primary" type="submit">
                      Search
                    </button>
                  </form>
                  <ul className="list-group list-group-flush ">
                    {chap.unit.map((unit, index) => (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                      >
                        <Link
                          to="/quizreport"
                          className="text-decoration-none "
                        >
                          {unit.name} Quiz
                        </Link>
                        <span class="badge bg-primary rounded-pill">
                          {unit.noOfAttempts}
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
    </div>
  );
};

export default QuizReportFront;
