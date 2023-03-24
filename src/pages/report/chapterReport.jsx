import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { useState, useEffect } from "react";
import axios from "axios";

const ChapterReport = () => {
  const API_BASE = "http://localhost:1337";

  const [chapterReportDetails, setChapterReportDetails] = useState([]);
  const [navActive, setNavActive] = useState(0);
  const [selectedOption, setSelectedOption] = useState("Chapter Report");
  //get props
  const location = useLocation();
  const propsData = location.state;
  //send props
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
      .get(API_BASE + "/chapterReport/" + empId)
      .then((res) => setChapterReportDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5">Chapter Report</h1>
      <div className="chap-name-select">
        <div className=" d-flex ps-4">
          <Avatar name={`${propsData?.firstName}`} round />
          <div className="d-flex flex-column ps-4">
            <h3>
              {propsData?.firstName} {propsData?.lastName}
            </h3>

            <h5 className="text-secondary ms-2">{propsData?.empId}</h5>
          </div>
        </div>
        <select
          className="form-select mt-sm-4"
          aria-label="Default select example"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="/chapterreport">Chapter Report</option>
          <option value="/overviewreport">OverviewReport</option>
        </select>
      </div>

      <div className=" chapter-content m-3 pt-lg-5">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {chapterReportDetails?.map((chap, index) => (
            <button
              key={index}
              onClick={() => setNavActive(index)}
              className={index == navActive ? "nav-link active" : "nav-link"}
              data-bs-toggle="pill"
              data-bs-target={`#${index}`}
              type="button"
              role="tab"
              aria-controls={index}
              aria-selected={index == navActive ? "true" : "false"}
            >
              {console.log("chapUnitsLength", chap)}
              {chap.chapterName}
            </button>
          ))}
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          {chapterReportDetails?.map((chap, indexi) => (
            <div
              key={indexi}
              className={
                indexi == navActive
                  ? "tab-pane fade active show"
                  : "tab-pane fade"
              }
              id={indexi}
              role="tabpane"
              aria-labelledby={indexi}
              tabIndex={indexi}
            >
              <table className="table leaderboard-table">
                <thead>
                  <tr className="table-head">
                    <th className="leaderboard-th align-middle text-center">
                      Unit Name
                    </th>
                    <th className="leaderboard-th align-middle text-center">
                      Score
                    </th>
                    <th className="leaderboard-th align-middle text-center">
                      Grade
                    </th>
                    <th className="leaderboard-th align-middle text-center">
                      Percentage
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {chap?.units?.map((unit, indexi) => (
                    <tr
                      key={indexi}
                      className=" bg-info bg-opacity-10 leaderboard-tr fw-semibold"
                    >
                      <td className="leaderboard-td align-middle text-center">
                        {unit.unitName}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {unit.score}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {unit.score >= 75
                          ? "A"
                          : unit.score < 75 && unit.score >= 65
                          ? "B"
                          : unit.score < 65 && unit.score >= 55
                          ? "C"
                          : unit.score < 55 && unit.score >= 40
                          ? "S"
                          : "F"}
                      </td>
                      <td className="leaderboard-td align-middle text-center">
                        {unit.score}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterReport;
