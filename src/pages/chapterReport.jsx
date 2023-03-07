import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { useState, useContext } from "react";
import App, { AppContext } from "../App";

const ChapterReport = () => {
  const { chapter } = useContext(AppContext);
  const { unit } = useContext(AppContext);
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
  
  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5">ChapterReport</h1>
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
          className="form-select"
          aria-label="Default select example"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="/chapterreport">Chapter Report</option>
          <option value="/overviewreport">OverviewReport</option>
        </select>
      </div>

      <div className=" chapter-content m-3 pt-5">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {chapter.map((chap, index) => (
            <>
              <button
                key={index}
                className={index == navActive ? "nav-link active" : "nav-link"}
                data-bs-toggle="pill"
                data-bs-target="#0"
                type="button"
                role="tab"
              >
                {chap.chapterName}
              </button>
            </>
          ))}
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade" id="0" role="tabpanel" tabIndex="0">
            Hello world
          </div>
        </div>
      </div>

      {/* <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            tabIndex="0"
          >
            <table className="table leaderboard-table">
              <thead>
                <tr className="table-head">
                  <th className="leaderboard-th align-middle text-center">
                    Unit Name
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Grade
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Range
                  </th>
                  <th className="leaderboard-th align-middle text-center">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {true && (
                  <tr className=" bg-info bg-opacity-10 leaderboard-tr fw-semibold">
                    <td className="leaderboard-td align-middle text-center">
                      HTML basics
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      50
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      0 -100
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      50%
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-disabled"
            role="tabpanel"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            tabIndex="0"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            tabIndex="0"
          >
            ...
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default ChapterReport;
