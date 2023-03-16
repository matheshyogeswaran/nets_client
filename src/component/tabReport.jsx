import { useEffect, useState } from "react";

const TabReport = ({ handleGetTabReport }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    handleGetTabReport(show);
  }, [show]);

  return (
    <ul className="nav nav-tabs mx-md-3">
      <li className="nav-item">
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

//./pages/Report.jsx
