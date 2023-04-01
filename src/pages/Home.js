import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Function</th>
            <th>Available To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/result">Result</Link>
            </td>
            <td>Hired Employee</td>
          </tr>
          <tr>
            <td>
              <Link to="/review">Review</Link>
            </td>
            <td>Hired Employee</td>
          </tr>
          <tr>
            <td>
              <Link to="/submission"> Submission</Link>
            </td>
            <td>Supervisor</td>
          </tr>
          <tr>
            <td>
              <Link to="/evaluate"> Evaluate Submission</Link>
            </td>
            <td>Supervisor</td>
          </tr>

          <tr>
            <td>
              <Link to="/leaderboard"> Leaderboard</Link>
            </td>
            <td>Hired Employee</td>
          </tr>

          <tr>
            <td>
              <Link to="/feedback">Feedback</Link>
            </td>
            <td>Hired Employee</td>
          </tr>
          <tr>
            <td>
              <Link to="/report">Report</Link>
            </td>
            <td>Supervisor</td>
          </tr>
          <tr>
            <td>
              <Link to="/leaderboardsup">Leaderboard</Link>
            </td>
            <td>Supervisor</td>
          </tr>
          <tr>
            <td>
              <Link to="/chapterreport">Chapter Report</Link>
            </td>
            <td>Supervisor, Hired Employee</td>
          </tr>
          <tr>
            <td>
              <Link to="/overviewreport">Overview Report</Link>
            </td>
            <td>Supervisor, Hired Employee</td>
          </tr>
          <tr>
            <td>
              <Link to="/quizreportfront">Quiz Report Front</Link>
            </td>
            <td>Supervisor</td>
          </tr>
          <tr>
            <td>
              <Link to="/quizreport">Quiz Report </Link>
            </td>
            <td>Supervisor</td>
          </tr>
          <tr>
            <td>
              <Link to="/ratings">Rating Report </Link>
            </td>
            <td>Supervisor, Content Creator</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
