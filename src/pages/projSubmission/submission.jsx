//Futur work: should to displayed per supervisor

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UilFolderDownload } from "@iconscout/react-unicons";
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
  }, []);

  const handleGetZipFile = (empId) => {
    axios
      .get(API_BASE + "/getZipFile/" + empId)
      .then((res) => downloadFile(res.data))
      .catch((err) => console.log(err));
  };
  const downloadFile = async (fileURL) => {
    try {
      const response = await fetch(fileURL);
      let fileNameIndex = fileURL.lastIndexOf("/");
      let fileName = fileURL.slice(fileNameIndex + 1);
      const blob = await response.blob(); //to convert the response into a Blob object.
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error(error);
    }
  };
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
                      onClick={() => handleGetZipFile(emp.empId)}
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
