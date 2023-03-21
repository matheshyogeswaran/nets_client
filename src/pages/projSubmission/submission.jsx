//Futur work: should to displayed per supervisor
//downloas file using link

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UilFolderDownload } from "@iconscout/react-unicons";
import { generateZip } from "./generateZip";
import axios from "axios";

const Submission = () => {
  const API_BASE = "http://localhost:1337";
  const [downloadIcon, setDownloadIcon] = useState("");
  const [submissionData, setSubmissionData] = useState([]);

  useEffect(() => {
    axios
      .get(API_BASE + "/getSubmissionTable")
      .then((res) => setSubmissionData(res.data))
      .catch((err) => console.log(err));
    // axios
    //   .get("http://example.com/file.pdf", { responseType: "blob" })
    //   .then((response) => {
    //     const file = new Blob([response.data], { type: "application/pdf" });
    //     const fileURL = URL.createObjectURL(file);

    //     const link = document.createElement("a");
    //     link.href = fileURL;
    //     link.setAttribute("download", "file.pdf");
    //     document.body.appendChild(link);
    //     link.click();
    //   });
  }, []);

  return (
    <>
      <h1 className=" py-4 result-head card ps-5 ">Final Project Submission</h1>
      <div className="submission table-responsive container-lg">
        <table className="table table-striped table-hover mt-sm-5 mt-lg-5">
          <thead>
            <tr className="table-head ">
              <th className="emp-id">ID</th>
              <th className="emp-name">Name</th>
              <th className="emp-sub">Submitted date</th>
              <th className="emp-proName">Project Name</th>
              <th className="emp-status">Status</th>
            </tr>
          </thead>
          <tbody>
            {submissionData?.map((emp, index) => (
              <tr
                key={index}
                onMouseEnter={() => setDownloadIcon(emp.empId)}
                onMouseLeave={() => setDownloadIcon("")}
              >
                <td>{emp.empId}</td>
                <td>
                  {emp.firstName} {emp.lastName}
                </td>
                <td className="ps-4">
                  {emp.submittedYear}-{emp.submittedMonth}-{emp.submittedDate}
                </td>
                <td className="td-download-icon">
                  {emp.projectName}{" "}
                  {downloadIcon === emp.empId && (
                    <UilFolderDownload
                      color="#0198E1"
                      className="download-icon"
                      onClick={generateZip}
                    />
                  )}
                </td>

                <td className="text-center">
                  {emp.status ? (
                    <Link
                      to="/evaluate"
                      state={{
                        empId: emp.empId,
                        firstName: emp.firstName,
                        lastName: emp.lastName,
                        update: true,
                      }}
                      className="text-decoration-none text-white"
                    >
                      <button className="btn btn-submission btn-sm btn-primary">
                        Edit
                      </button>
                    </Link>
                  ) : (
                    <Link
                      to="/evaluate"
                      state={{
                        empId: emp.empId,
                        firstName: emp.firstName,
                        lastName: emp.lastName,
                      }}
                      className="text-decoration-none text-white"
                    >
                      <button className="btn btn-submission btn-sm btn-danger">
                        Evaluate
                      </button>
                    </Link>
                  )}
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
