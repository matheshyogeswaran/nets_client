import { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Result from "./pages/result";
import Review from "./pages/review";
import Submission from "./pages/submission";
import Evaluate from "./pages/Evaluate";
import Feedback from "./pages/feedback";
import LeaderBoard from "./pages/leaderBoard";
import Report from "./pages/Report";
import LeaderboardSup from "./pages/LeaderboardSup";
import ChapterReport from "./pages/chapterReport";
import OverviewReport from "./pages/overviewReport";
import QuizReportFront from "./pages/quizReportFront";
import QuizReport from "./pages/quizReport";
import Ratings from "./pages/Ratings";

const API_BASE = "http://localhost:8080";

export const AppContext = createContext();

function App() {
  const [employee, setEmployee] = useState([]);
  const [unit, setUnit] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [quizSubmission, setQuizSubmission] = useState([]);
  useEffect(() => {
    GetUsers();
    Getunit();
    GetChapter();
    GetQuizSubmissions();
  }, []);

  const GetUsers = () => {
    axios
      .get(API_BASE + "/users")
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((error) => console.error("Error: ", error));
  };
  const Getunit = () => {
    axios
      .get(API_BASE + "/unit")
      .then((res) => setUnit(res.data))
      .catch((error) => console.log(error));
  };
  const GetChapter = () => {
    axios
      .get(API_BASE + "/chapter")
      .then((res) => setChapter(res.data))
      .catch((error) => console.log(error));
  };
  const GetQuizSubmissions = () => {
    axios
      .get(API_BASE + "/quiz_submission")
      .then((res) => setQuizSubmission(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          employee: employee,
          unit: unit,
          chapter: chapter,
          quizSubmission: quizSubmission,
        }}
      >
        <Router>
          <nav
            className="navbar navbar-expand-lg navbar-light "
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <Link to="/" className="nav-link ms-4">
              NETS
            </Link>
            <button
              className="navbar-toggler me-4 "
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse ms-4"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/result" className="nav-link">
                    Result
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/submission" className="nav-link">
                    Submission
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/leaderboard" className="nav-link">
                    LeaderBoard
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Report
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link to="/report" className="nav-link">
                      Employee Report
                    </Link>
                    <Link to="/quizreportfront" className="nav-link">
                      Quiz Report
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/review" element={<Review />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/evaluate" element={<Evaluate />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/report" element={<Report />} />
            <Route path="/leaderboardsup" element={<LeaderboardSup />} />
            <Route path="/chapterreport" element={<ChapterReport />} />
            <Route path="/overviewreport" element={<OverviewReport />} />
            <Route path="/quizreportfront" element={<QuizReportFront />} />
            <Route path="/quizreport" element={<QuizReport />} />
            <Route path="/ratings" element={<Ratings />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

// , { unit }, { chapter }

// {
//   id: "1234Y",
//   name: "Humill mirin",
//   jobTitle: "Tech Lead",
//   date: "02 Dec 2022",
//   projName: "Web technologies",
//   status: false,
//   score: 297,
//   subScore: 98,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "1123U",
//   name: "Nelli mirror",
//   jobTitle: "UI/UX Developer",
//   date: "01 Dec 2022",
//   projName: "React",
//   status: false,
//   score: 188,
//   subScore: 78,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "2356I",
//   name: "Nenifer Lofess",
//   jobTitle: "Financial Manager",
//   date: "05 Dec 2022",
//   projName: "React",
//   status: true,
//   score: 175,
//   subScore: 24,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "46765P",
//   name: "Jack Jane",
//   jobTitle: "Software Engineer",
//   date: "08 Dec 2022",
//   projName: "Java",
//   status: false,
//   score: 137,
//   subScore: 87,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Kerney samuvel",
// },
// {
//   id: "3244O",
//   name: "Neimar Messi",
//   jobTitle: "HR Manager",
//   date: "09 Dec 2022",
//   projName: "Springboot",
//   status: false,
//   score: 157,
//   subScore: 42,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "4542L",
//   name: "Lionado Davinci",
//   jobTitle: "Software Engineer",
//   date: "09 Dec 2022",
//   projName: "Node.js",
//   status: false,
//   score: 479,
//   subScore: 23,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "8765Q",
//   name: "Jack Sparrow",
//   jobTitle: "Tech Lead",
//   date: "10 Dec 2022",
//   projName: "Flutter",
//   status: true,
//   score: 135,
//   subScore: 85,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "7890Y",
//   name: "Novem Heika",
//   jobTitle: "Front end Developer",
//   date: "12 Dec 2022",
//   projName: "Customer Service",
//   status: false,
//   score: 134,
//   subScore: 35,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Wednesday,30 November 2022, 12:23 AM",
//   gradedBy: "Kerney samuvel",
// },
// {
//   id: "1435K",
//   name: "Aniklar Kejak",
//   jobTitle: "UI/UX Developer",
//   date: "19 Dec 2022",
//   projName: "React",
//   status: false,
//   score: 742,
//   subScore: 35,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "2355K",
//   name: "Jothda Akbar",
//   jobTitle: "Full stak Developer",
//   date: "01 Jan 2023",
//   projName: "Flutter",
//   status: true,
//   score: 123,
//   subScore: 53,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Arjunan V.R Christy",
// },
// {
//   id: "1242P",
//   name: "Craow Dake",
//   jobTitle: "Software Engineer",
//   date: "09 Jan 2023",
//   projName: "React",
//   status: false,
//   score: 103,
//   subScore: 36,
//   feedback:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   gradedOn: "Monday,28 November 2022, 10:40 AM",
//   gradedBy: "Kerney samuvel",
// },
