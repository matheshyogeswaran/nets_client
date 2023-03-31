import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
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
import DepartmentChapter from "../pages/chapter/DepartmentChapter";
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
import DeleteChapterPermanent from "../pages/chapter/DeleteChapterPermanent";
import AddJobtitle from "../pages/jobtitle/AddJobtitle";
import EditJobtitle from "../pages/jobtitle/EditJobtitle";
import DeleteJobtitle from "../pages/department/DeleteJobtitle";
import AddChapter from "../pages/chapter/AddChapter";
import EditChapter from "../pages/chapter/EditChapter";
import DeleteChapter from "../pages/chapter/DeleteChapter";
import DepartmentAddChapter from "../pages/chapter/DepartmentAddChapter";
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
import Result from "../pages/quiz/result";
import Review from "../pages/quiz/review";
import Submission from "../pages/projSubmission/submission";
import Evaluate from "../pages/projSubmission/Evaluate";
import Feedback from "../pages/projSubmission/feedback";
import LeaderBoard from "../pages/leaderboard/leaderBoard";
import Report from "../pages/report/Report";
import LeaderboardSup from "../pages/leaderboard/LeaderboardSup";
import ChapterReport from "../pages/report/chapterReport";
import OverviewReport from "../pages/report/overviewReport";
import QuizReportFront from "../pages/report/quizReportFront";
import QuizReport from "../pages/report/quizReport";
import Ratings from "../pages/report/Ratings";
import Home from "../pages/home_pages/Home";
import MainDashBoard from "../pages/home_pages/MainDashBoard";
import ArticleContent from "../pages/article page/ArticleContent";
import Content from "../pages/Chapter page/Content";
import UnitContent from "../pages/Unit page/UnitContent";
import ViewKT from "../pages/KT view/ViewKT";
import ViewContent from "../pages/article view/ViewContent";
import EditTask from "../pages/Chapter page/EditTask";
import QuizEntry from "../pages/quiz/QuizEntry";
import Quizpage from "../pages/quiz/Quizpage";
import Editlog from "../pages/projSubmission/editLog";

const AppRoutes = () => {
  return (
    <>
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
                {" "}
                <GoogleLogin />{" "}
              </RedirectIfLoggedIn>
            }
          />
          <Route
            exact
            path="/ishvini"
            element={
              <RequireAuth>
                {" "}
                <Home />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <RequireAuth>
                {" "}
                <MainDashBoard />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/manageuserrole"
            element={
              <RequireAuth>
                {" "}
                <AvailableUserRoles />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/createUserRole"
            element={
              <RequireAuth>
                {" "}
                <CreateUserRole />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/editUserRole/:userRole"
            element={
              <RequireAuth>
                {" "}
                <EditUserRole />{" "}
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
                {" "}
                <PromoteDemote />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/pendingrequests/"
            element={
              <RequireAuth>
                {" "}
                <PendingUserApproval />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/hiredemployee/"
            element={
              <RequireAuth>
                {" "}
                <HiredEmployee />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/assignFinalProjectAssignment/"
            element={
              <RequireAuth>
                {" "}
                <AssignFinalAssignment />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/department/"
            element={
              <RequireAuth>
                <Department />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/jobtitle/"
            element={
              <RequireAuth>
                <Jobtitle />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/chapter/"
            element={
              <RequireAuth>
                {" "}
                <Chapter />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/depchapter/"
            element={
              <RequireAuth>
                <DepartmentChapter />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/viewchapter/"
            element={
              <RequireAuth>
                {" "}
                <ViewChapter />{" "}
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
                {" "}
                <ProfileOverview />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sample/"
            element={
              <RequireAuth>
                {" "}
                <Sample />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/permanentdeletechapter/"
            element={
              <RequireAuth>
                {" "}
                <PermanentDeleteChapter />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/enrollrequestsupervisor"
            element={
              <RequireAuth>
                {" "}
                <EnrollRequestSupervisor />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/enrollrequestemployee/"
            element={
              <RequireAuth>
                {" "}
                <EnrollRequestEmployee />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/newdep/"
            element={
              <RequireAuth>
                {" "}
                <AddDepartment />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/editdep/:id/:name"
            element={
              <RequireAuth>
                {" "}
                <EditDepartment />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/deletedep/:id"
            element={
              <RequireAuth>
                {" "}
                <DeleteDepartment />
              </RequireAuth>
            }
          />
          <Route exact path="/newjob/" element={<AddJobtitle />} />
          <Route
            exact
            path="/editjob/:id/:name"
            element={
              <RequireAuth>
                {" "}
                <EditJobtitle />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/deletejob/:id"
            element={
              <RequireAuth>
                {" "}
                <DeleteJobtitle />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/newchap/"
            element={
              <RequireAuth>
                {" "}
                <AddChapter />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/editchap/:id/:name"
            element={
              <RequireAuth>
                {" "}
                <EditChapter />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/deletechap/:id"
            element={
              <RequireAuth>
                {" "}
                <DeleteChapter />{" "}
              </RequireAuth>
            }
          />
          <Route exact path="/newdepchap/" element={<DepartmentAddChapter />} />
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
                <ViewForum />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/create-forum"
            element={
              <RequireAuth>
                {" "}
                <CreateForum />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/edit-forum/:forumId"
            element={
              <RequireAuth>
                {" "}
                <EditForum />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/create-post/:forumId"
            element={
              <RequireAuth>
                {" "}
                <CreatePost />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/add-reply/:forumId/:commentId"
            element={
              <RequireAuth>
                {" "}
                <AddReply />{" "}
              </RequireAuth>
            }
          />
          <Route
            exactpath="/request-guidance-ticket"
            element={
              <RequireAuth>
                {" "}
                <RequestGuidanceTickets />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/direct-guidance-ticket"
            element={
              <RequireAuth>
                {" "}
                <DirectGuidanceTickets />{" "}
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/complete-guidance-ticket"
            element={
              <RequireAuth>
                {" "}
                <CompleteGuidanceTickets />{" "}
              </RequireAuth>
            }
          />
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
          <Route path="/editlog" element={<Editlog />} />

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
            path="/deletechapper/:id"
            element={
              <RequireAuth>
                <DeleteChapterPermanent />
              </RequireAuth>
            }
          />
          <Route exact path="/comments" element={<CommentSection />} />
          <Route exact path="/forums" element={<Forums />} />
          <Route exact path="/view-forum/:forumId" element={<ViewForum />} />
          <Route exact path="/create-forum" element={<CreateForum />} />
          <Route exact path="/edit-forum/:forumId" element={<EditForum />} />
          <Route exact path="/create-post/:forumId" element={<CreatePost />} />
          <Route
            exact
            path="/add-reply/:forumId/:commentId"
            element={<AddReply />}
          />
          <Route
            exact
            path="/request-guidance-ticket"
            element={<RequestGuidanceTickets />}
          />
          <Route
            exact
            path="/direct-guidance-ticket"
            element={<DirectGuidanceTickets />}
          />
          <Route
            exact
            path="/complete-guidance-ticket"
            element={<CompleteGuidanceTickets />}
          />
          <Route exact path="/chapterPage" element={<Content />} />

          <Route exact path="/Unit" element={<UnitContent />} />
          <Route exact path="/Unit/:id" element={<UnitContent />} />

          <Route exact path="/article" element={<ArticleContent />} />
          <Route exact path="/article/View" element={<ViewContent />} />
          <Route exact path="/Unit/View" element={<ViewKT />} />
          <Route exact path="/edit/:id" element={<EditTask />} />

          <Route exact path="/quiz/view" element={<QuizEntry />} />
          <Route exact path="/quiz/view/:id" element={<QuizEntry />} />

          <Route exact path="/quiz" element={<Quizpage />} />
          <Route exact path="/quiz/:id" element={<Quizpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRoutes;
