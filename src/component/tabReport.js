import { useEffect, useState } from "react";

// It takes an object destructuring argument "handleGetTabReport" prop.
const TabReport = ({ handleGetTabReport }) => {
  const [show, setShow] = useState(true);

  // The function is run initially when the component mounts
  // and again whenever the value of show changes.
  useEffect(() => {
    handleGetTabReport(show);
  }, [show]);

  return (
    <ul className="nav nav-tabs mx-md-3">
      <li className="nav-item">
        {/* Apply "active" class if show is true 
        and set show to true when Hired Employee tab is clicked*/}
        <a
          className={`nav-link ${show ? "active" : ""}`}
          aria-current="page"
          href="#hired-employee"
          onClick={() => setShow(true)}
        >
          Hired Employees
        </a>
      </li>
      <li className="nav-item">
        {/* Apply "active" class if show is false 
        and set show to false when Content Creators tab is clicked*/}
        <a
          className={`nav-link ${show ? "" : "active"}`}
          href="#content-creator"
          onClick={() => setShow(false)}
        >
          Content Creators
        </a>
      </li>
    </ul>
  );
};

export default TabReport;

// This component is used in Report.jsx file.
