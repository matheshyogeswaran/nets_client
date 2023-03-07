import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import { useState, useContext } from "react";
import { AppContext } from "../App";

const OverviewReport = () => {
  const { chapter } = useContext(AppContext);
  const { quizSubmission } = useContext(AppContext);
  const [totalScore, setTotalScore] = useState(0);
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

  return (
    <div className="">
      <h1 className="py-4 result-head card ps-5 ">Overview Report</h1>
      <div className="chap-name-select">
        <div className=".emp-name-and-id d-flex py-4 ms-5">
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
            {chapter.map((chap, index) => (
              <tr
                key={index}
                className=" bg-primary bg-opacity-10 leaderboard-tr fw-semibold"
              >
                <td className="leaderboard-td align-middle text-center">
                  {chap.chapterName}
                </td>
                <td className="leaderboard-td align-middle text-center">
                  {chap.unitsOffer.length}
                </td>

                {/* {quizSubmission.map(
                  (quiz) =>
                    chap._id == quiz.chapterId &&
                    console.log("Sub...", quiz.score)
                )} */}
                {/* setTotalScore(
    quizSubmission.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.score;
    })
  );
  console.log(totalScore); */}
                <td className="leaderboard-td align-middle text-center">750</td>
                <td className="leaderboard-td align-middle text-center">75</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewReport;
