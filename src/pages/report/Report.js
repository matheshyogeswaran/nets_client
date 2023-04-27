import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../subComponents/search";
import TabReport from "../../component/tabReport";
import axios from "axios";
import swal from "sweetalert";

const Report = () => {
  const API_BASE = "http://localhost:1337";

  const [reportDetails, setReportDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState();
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  // navigate to chapter report page
  const routeToChapterReport = (empId, firstName, lastName) => {
    navigate("/chapterreport", {
      state: { empId: empId, firstName: firstName, lastName: lastName },
    });
  };
  // navigate to ratings report page
  const routeToRatingsReport = (empId, firstName, lastName) => {
    navigate("/ratings", {
      state: { empId: empId, firstName: firstName, lastName: lastName },
    });
  };

  // whether show the tab report or not
  const getTabReport = (show) => {
    setShow(show);
  };
  //store search value, show search value into states
  const getSearchValue = (search, showSearch) => {
    setSearch(search);
    setShowSearch(showSearch);
  };
  useEffect(() => {
    axios
      .get(API_BASE + "/showAllUsers")
      .then((res) => setReportDetails(res.data))
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
    <>
      <h1 className="py-4 result-head card ps-5">Employee Report</h1>
      {reportDetails?.length > 0 ? ( //checking whether system has data to show
        <>
          <TabReport handleGetTabReport={getTabReport} />
          <div className="mt-5">
            <Search
              handleGetSearchValue={getSearchValue}
              width={{ width: "w-auto" }}
            />
          </div>
          <table className=" empTable table table-striped table-hover mt-sm-5 mt-lg-5 ">
            <thead>
              <tr className="table-head table-dark">
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Job Title</th>
              </tr>
            </thead>
            <tbody>
              {/* filtering employees */}
              {reportDetails
                .filter((emp) => {
                  let name = emp.firstName + " " + emp.lastName;
                  if (showSearch) {
                    return emp;
                  } else if (
                    name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return emp;
                  }
                })
                .map((emp, index) =>
                  show //allow only hired employees
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
                          <td>{emp.depName}</td>
                          <td>{emp.jobTitle}</td>
                        </tr>
                      )
                    : emp.userRoleValue.toLowerCase() == "content creator" && ( //allow only content creators
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
                          <td>{emp.depName}</td>
                          <td>{emp.jobTitle}</td>
                        </tr>
                      )
                )}
            </tbody>
          </table>
        </>
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          No data to show
        </h3>
      )}
    </>
  );
};

export default Report;
