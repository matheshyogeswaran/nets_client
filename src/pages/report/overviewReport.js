import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { useState, useEffect } from "react";
import axios from "axios";

const OverviewReport = () => {
  const API_BASE = "http://localhost:1337";

  const [chapterScore, setChapterScore] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Overview Report");
  const [errorHandling, setErrorHandling] = useState("");

  const location = useLocation();
  const propsData = location.state;
  const navigate = useNavigate();

  // handle select options
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    //pass the states to the selected option
    navigate(event.target.value, {
      state: {
        empId: propsData?.empId,
        firstName: propsData?.firstName,
        lastName: propsData?.lastName,
      },
    });
  };

  useEffect(() => {
    let empId = propsData?.empId;
    axios
      .get(API_BASE + "/overviewReport/" + empId)
      .then((res) => setChapterScore(res.data))
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

  return (
    <div className="">
      {errorHandling === "" ? (
        <>
          <h1 className="py-4 result-head card ps-5 ">Overview Report</h1>
          {/* header with employee name and ID */}
          <div className="chap-name-select">
            <div className=".emp-name-and-id d-flex py-4 ms-5 ps-lg-5">
              <Avatar name={`${propsData?.firstName}`} round />
              <div className="d-flex flex-column ps-4">
                <h3>
                  {propsData?.firstName} {propsData?.lastName}
                </h3>
                <h5 className="text-secondary ms-2">{propsData?.empId}</h5>
              </div>
            </div>

            <select
              className="form-select"
              aria-label="Default select example"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="/overviewreport">Overview Report</option>
              <option value="/chapterreport">Chapter Report</option>
            </select>
          </div>

          <div className="">
            <table className="table leaderboard-table container-lg">
              <thead>
                <tr className="table-head">
                  <th className="leaderboard-th align-middle text-center">
                    Chapter
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    # Units
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Total Score
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Average Score
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* chapter details */}
                {chapterScore.map((chap, index) => {
                  return (
                    chap.unitCount !== 0 && (
                      <tr
                        key={index}
                        className=" bg-primary bg-opacity-10 leaderboard-tr fw-semibold"
                      >
                        <td className="leaderboard-td align-middle text-center">
                          {chap.chapterName}
                        </td>
                        <td className="leaderboard-td align-middle text-center">
                          {chap.unitCount}
                        </td>

                        <td className="leaderboard-td align-middle text-center">
                          {chap.score}
                        </td>
                        <td className="leaderboard-td align-middle text-center">
                          {chap.average}
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h3 className="text-center text-danger" style={{ margin: "200px" }}>
          {errorHandling}
        </h3>
      )}
    </div>
  );
};

export default OverviewReport;
