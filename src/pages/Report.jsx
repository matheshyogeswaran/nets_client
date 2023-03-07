import { useContext, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import Search from "./../subComponents/search";
import TabReport from "./../component/tabReport";

const Report = () => {
  const { employee } = useContext(AppContext);
  const { unit } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const routeToChapterReport = (empId, firstName, lastName) => {
    navigate("/chapterreport", {
      state: { empId: empId, firstName: firstName, lastName: lastName },
    });
  };
  const routeToRatingsReport = (empId, firstName, lastName) => {
    navigate("/ratings", {
      state: { empId: empId, firstName: firstName, lastName: lastName },
    });
  };
  const getTabReport = (show) => {
    setShow(show);
  };
  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };
  return (
    <>
      <h1 className="py-4 result-head card ps-5">Employee Report</h1>
      <TabReport handleGetTabReport={getTabReport} />
      <Search handleGetSearchValue={getSearchValue} />
      <table className=" empTable table table-striped table-hover mt-sm-5 mt-lg-5 ">
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {employee
            .filter((emp) => {
              let name = emp.firstName + " " + emp.lastName;
              if (showSearch) {
                return emp;
              } else if (name.toLowerCase().includes(search.toLowerCase())) {
                return emp;
              }
            })
            .map((emp, index) =>
              show
                ? emp.userRoleValue.toLowerCase() == "hired employee" && (
                    <tr
                      key={index}
                      onClick={() =>
                        routeToChapterReport(
                          emp.empId,
                          emp.firstName,
                          emp.lastName
                        )
                      }
                    >
                      <td>{emp.empId}</td>
                      <td>
                        {emp.firstName} {emp.lastName}
                      </td>
                      <td>{emp.department}</td>
                      <td>{emp.jobTitle}</td>
                    </tr>
                  )
                : emp.userRoleValue.toLowerCase() == "content creator" && (
                    <tr
                      key={index}
                      onClick={() =>
                        routeToRatingsReport(
                          emp.empId,
                          emp.firstName,
                          emp.lastName
                        )
                      }
                    >
                      <td>{emp.empId}</td>
                      <td>
                        {emp.firstName} {emp.lastName}
                      </td>
                      <td>{emp.department}</td>
                      <td>{emp.jobTitle}</td>
                    </tr>
                  )
            )}
        </tbody>
      </table>
    </>
  );
};

export default Report;
