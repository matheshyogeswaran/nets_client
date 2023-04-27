import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UilFolderDownload } from "@iconscout/react-unicons";
import axios from "axios";
import swal from "sweetalert";

const Submission = () => {
  //  Base URL of the API
  const API_BASE = "http://localhost:1337";
  // States
  const [downloadIcon, setDownloadIcon] = useState("");
  const [submissionData, setSubmissionData] = useState([]);
  const [errorHandling, setErrorHandling] = useState("");
  // Fetch data on mount
  useEffect(() => {
    axios
      .get(API_BASE + "/getSubmissionTable")
      .then((res) => setSubmissionData(res.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle "User not found" error
          setErrorHandling(error.response.data.error);
        } else {
          // Handle other errors
          setErrorHandling(error.message);
        }
      });
  }, []);

  // Download zip file of the submitted project
  const handleGetZipFile = (empId) => {
    axios
      .get(API_BASE + "/getZipFile/" + empId)
      .then((res) => downloadFile(res.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle "User not found" error
          swal({
            title: "Not found",
            text: error.response.data.error,
            icon: "warning",
            dangerMode: true,
          });
        } else {
          // Handle other errors
          setErrorHandling(error.message);
        }
      });
  };
  // Download file using the provided URL
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
      console.log(error);
    }
  };

  return (
    <>
      {/* checking whether there is error or not */}
      {errorHandling === "" ? (
        <>
          <h1 className=" py-4 result-head card ps-5 ">
            Final Project Submission
          </h1>
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
                  // when mouse enter the tr set state downloadIcon as employee ID when leave the mouse cursor set it to empty string
                  <tr
                    key={index}
                    onMouseEnter={() => setDownloadIcon(emp.empId)}
                    onMouseLeave={() => setDownloadIcon("")}
                  >
                    <td>{emp.empId}</td>
                    <td>
                      {emp.firstName} {emp.lastName}
                    </td>
                    <td
                      className="ps-4"
                      dangerouslySetInnerHTML={{ __html: emp.submittedOn }}
                    ></td>
                    <td className="td-download-icon">
                      {emp.projectName}{" "}
                      {/* if downloadIcon is equal to current employeeID the download icon will appear */}
                      {downloadIcon === emp.empId && (
                        <UilFolderDownload
                          color="#0198E1"
                          className="download-icon"
                          // click to download file and pass employeeId as argument
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
                            projectName: emp.projectName,
                            update: emp.status,
                          }}
                          className="text-decoration-none text-white"
                        >
                          <button className="btn btn-submission btn-sm btn-primary">
                            Upgrade
                          </button>
                        </Link>
                      ) : (
                        <Link
                          to="/evaluate"
                          state={{
                            empId: emp.empId,
                            firstName: emp.firstName,
                            projectName: emp.projectName,
                            lastName: emp.lastName,
                            update: emp.status,
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
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          {errorHandling}
        </h3>
      )}
    </>
  );
};

export default Submission;
