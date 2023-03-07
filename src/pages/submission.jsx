import { useContext, useState } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import { UilFolderDownload } from "@iconscout/react-unicons";
import { generateZip } from "./generateZip";

const Submission = () => {
  const { employee } = useContext(AppContext);
  const [downloadIcon, setDownloadIcon] = useState("");
  return (
    <>
      <h1 className=" py-4 result-head card ps-5 ">
        Final Project Submission{" "}
      </h1>
      <div className="submission table-responsive container-md">
        <table className="table table-striped table-hover mt-sm-5 mt-lg-5">
          <thead>
            <tr className="table-head">
              <th className="emp-id">ID</th>
              <th className="emp-name">Name</th>
              <th className="emp-sub">Submitted date</th>
              <th className="emp-proName">Project Name</th>
              <th className="emp-status">Status</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, index) => (
              <tr
                key={index}
                onMouseEnter={() => setDownloadIcon(emp.empId)}
                onMouseLeave={() => setDownloadIcon("")}
              >
                <td>{emp.empId}</td>
                <td>
                  {emp.firstName} {emp.lastName}
                </td>
                <td></td>
                {/* <td>{emp.date}</td> */}
                <td>
                  React {/* <i class="uil uil-folder-download"></i> */}
                  {downloadIcon == emp.empId && (
                    <UilFolderDownload
                      color="#0198E1"
                      className="download-icon"
                      onClick={generateZip}
                    />
                  )}
                </td>

                <td>
                  <Link
                    to="/evaluate"
                    state={{
                      id: emp.empId,
                      firstName: emp.firstName,
                      lastName: emp.lastName,
                      status: emp.status,
                      subScore: emp.subScore,
                      feedback: emp.feedback,
                    }}
                    className="text-decoration-none text-white"
                  >
                    {emp.status ? (
                      <button className="btn btn-submission btn-sm btn-primary">
                        Edit
                      </button>
                    ) : (
                      <button className="btn btn-submission btn-sm btn-danger">
                        Ungraded
                      </button>
                    )}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Submission;
