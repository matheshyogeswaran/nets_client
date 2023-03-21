import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../routes/AppRoutes";
import axios from "axios";

const OverviewReport = () => {
  const API_BASE = "http://localhost:1337";

  const { chapter } = useContext(AppContext);
  const [chapterScore, setChapterScore] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Overview Report");
  const location = useLocation();
  const propsData = location.state;
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
      .get(API_BASE + "/overviewReport/" + empId)
      .then((res) => setChapterScore(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5 ">Overview Report</h1>
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
            {chapter.map((chap, index) => {
              let score = 0;
              let unitCount = 0;
              {
                chapterScore.map((quiz) => {
                  quiz.chapterId === chap._id && (score += quiz.score);
                  chap._id === quiz.chapterId && unitCount++;
                });
              }
              return (
                unitCount !== 0 && (
                  <tr
                    key={index}
                    className=" bg-primary bg-opacity-10 leaderboard-tr fw-semibold"
                  >
                    <td className="leaderboard-td align-middle text-center">
                      {chap.chapterName}
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      {unitCount}
                    </td>

                    <td className="leaderboard-td align-middle text-center">
                      {score}
                    </td>
                    <td className="leaderboard-td align-middle text-center">
                      {score / unitCount}
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewReport;
