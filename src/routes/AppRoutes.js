//React Imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Sagini
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_BASE = "http://localhost:8080";

export const AppContext = createContext();

// Util Imports
import RequireAuth from "../utils/RequireAuth";
import RedirectIfLoggedIn from "../utils/RedirectIfLoggedIn";

// Page Imports

import AvailableUserRoles from "../pages/user_role/AvailableUserRoles";
import CreateUserRole from "../pages/user_role/CreateUserRole";
import HiredEmployee from "../pages/home_pages/HiredEmployee";
import EditUserRole from "../pages/user_role/EditUserRole";
import GoogleLogin from "../pages/login/GoogleLogin";
import PendingUserApproval from "../pages/login/PendingUserApproval";
import PromoteDemote from "../pages/user_role/PromoteDemote";
import ShowUsersUnderRole from "../pages/user_role/SHowUsersUnderRole";
import Jobtitle from "../pages/jobtitle/Jobtitle";
import Chapter from "../pages/chapter/Chapter";
import ViewChapter from "../pages/chapter/ViewChapter";
import AllocateChapter from "../pages/chapter/AllocateChapter";
import EditAllocate from "../pages/chapter/EditAllocate";
import Department from "../pages/department/Department";
import EnrollRequestSupervisor from "../pages/chapter/EnrollRequestSupervisor";
import EnrollRequestEmployee from "../pages/chapter/EnrollRequestEmployee";
import AddDepartment from "../pages/department/AddDepartment";
import EditDepartment from "../pages/department/EditDepartment";
import DeleteDepartment from "../pages/department/DeleteDepartment";
import ProfileOverview from "../pages/profile/ProfileOverview";
import PermanentDeleteChapter from "../pages/chapter/PermanentDeleteChapter";
import AddJobtitle from "../pages/jobtitle/AddJobtitle";
import EditJobtitle from "../pages/jobtitle/EditJobtitle";
import DeleteJobtitle from "../pages/department/DeleteJobtitle";
import AddChapter from "../pages/chapter/AddChapter";
import EditChapter from "../pages/chapter/EditChapter";
import DeleteChapter from "../pages/chapter/DeleteChapter";
import Sample from "../pages/Sample";
import AddReply from "../components/Forums/AddReply";
import CreateForum from "../components/Forums/CreateForum";
import CreatePost from "../components/Forums/CreatePost";
import EditForum from "../components/Forums/EditForum";
import Forums from "../components/Forums/Forums";
import ViewForum from "../components/Forums/ViewForum";
import CompleteGuidanceTickets from "../components/GuidanceTickets/CompleteTickets/CompleteGuidanceTickets";
import DirectGuidanceTickets from "../components/GuidanceTickets/DirectTickets/DirectGuidanceTickets";
import RequestGuidanceTickets from "../components/GuidanceTickets/RequestTickets/RequestGuidanceTickets";
import CommentSection from "../components/Comments/CommentSection";
import AssignFinalAssignment from "../pages/final_project_assignment/AssignFinalAssignment";
import NoInternet from "../pages/NoInternet";

import Result from "./pages/Quiz/result";
import Review from "./pages/Quiz/review";
import Submission from "./pages/ProjSubmission/submission";
import Evaluate from "./pages/ProjSubmission/Evaluate";
import Feedback from "./pages/ProjSubmission/feedback";
import LeaderBoard from "./pages/Leaderboard/leaderBoard";
import Report from "./pages/Report/Report";
import LeaderboardSup from "./pages/Leaderboard/LeaderboardSup";
import ChapterReport from "./pages/Report/chapterReport";
import OverviewReport from "./pages/Report/overviewReport";
import QuizReportFront from "./pages/Report/quizReportFront";
import QuizReport from "./pages/Report/quizReport";
import Ratings from "./pages/Report/Ratings";
import Home from "../pages/home_pages/Home";

const AppRoutes = () => {
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
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <RedirectIfLoggedIn>
              <GoogleLogin />
            </RedirectIfLoggedIn>
          }
        />
        <Route
          exact
          path="/login/"
          element={
            <RedirectIfLoggedIn>
              <GoogleLogin />
            </RedirectIfLoggedIn>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/availableuserroles"
          element={
            <RequireAuth>
              <AvailableUserRoles />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/createUserRole"
          element={
            <RequireAuth>
              <CreateUserRole />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/editUserRole/:userRole"
          element={
            <RequireAuth>
              <EditUserRole />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/ShowUsersUnderRole/:userRole"
          element={
            <RequireAuth>
              <ShowUsersUnderRole />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/promoteDemoteUser/"
          element={
            <RequireAuth>
              <PromoteDemote />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/pendingrequests/"
          element={
            <RequireAuth>
              <PendingUserApproval />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/hiredemployee/"
          element={
            <RequireAuth>
              <HiredEmployee />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/assignFinalProjectAssignment/"
          element={
            <RequireAuth>
              <AssignFinalAssignment />
            </RequireAuth>
          }
        />

        <Route
          exact
          path="/department/"
          element={
            <RequireAuth>
              <Department />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/jobtitle/"
          element={
            <RequireAuth>
              <Jobtitle />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/chapter/"
          element={
            <RequireAuth>
              <Chapter />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/viewchapter/"
          element={
            <RequireAuth>
              <ViewChapter />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/allocatechapter/"
          element={
            <RequireAuth>
              <AllocateChapter />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/editallocatechapter/:id/:name"
          element={
            <RequireAuth>
              <EditAllocate />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/profile/"
          element={
            <RequireAuth>
              <ProfileOverview />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/sample/"
          element={
            <RequireAuth>
              <Sample />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/permanentdeletechapter/"
          element={
            <RequireAuth>
              <PermanentDeleteChapter />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/enrollrequestsupervisor/"
          element={
            <RequireAuth>
              <EnrollRequestSupervisor />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/enrollrequestemployee/"
          element={
            <RequireAuth>
              <EnrollRequestEmployee />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/newdep/"
          element={
            <RequireAuth>
              <AddDepartment />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/editdep/:id/:name"
          element={
            <RequireAuth>
              <EditDepartment />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/deletedep/:id"
          element={
            <RequireAuth>
              <DeleteDepartment />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/newjob/"
          element={
            <RequireAuth>
              <AddJobtitle />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/editjob/:id/:name"
          element={
            <RequireAuth>
              <EditJobtitle />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/deletejob/:id"
          element={
            <RequireAuth>
              <DeleteJobtitle />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/newchap/"
          element={
            <RequireAuth>
              <AddChapter />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/editchap/:id/:name"
          element={
            <RequireAuth>
              <EditChapter />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/deletechap/:id"
          element={
            <RequireAuth>
              <DeleteChapter />
            </RequireAuth>
          }
        />

        <Route
          exact
          path="/comments"
          element={
            <RequireAuth>
              <CommentSection />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/forums"
          element={
            <RequireAuth>
              <Forums />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/view-forum/:forumId"
          element={
            <RequireAuth>
              <ViewForum />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/create-forum"
          element={
            <RequireAuth>
              <CreateForum />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/edit-forum/:forumId"
          element={
            <RequireAuth>
              <EditForum />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/create-post/:forumId"
          element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/add-reply/:forumId/:commentId"
          element={
            <RequireAuth>
              <AddReply />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/request-guidance-ticket"
          element={
            <RequireAuth>
              <RequestGuidanceTickets />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/direct-guidance-ticket"
          element={
            <RequireAuth>
              <DirectGuidanceTickets />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/complete-guidance-ticket"
          element={
            <RequireAuth>
              <CompleteGuidanceTickets />{" "}
            </RequireAuth>
          }
        />

        <AppContext.Provider
          value={{
            employee: employee,
            unit: unit,
            chapter: chapter,
            quizSubmission: quizSubmission,
          }}
        >
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
        </AppContext.Provider>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
