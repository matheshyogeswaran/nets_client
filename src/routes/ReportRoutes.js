import Report from "../pages/report/Report";
import ChapterReport from "../pages/report/chapterReport";
import OverviewReport from "../pages/report/overviewReport";
import QuizReport from "../pages/report/quizReport";
import QuizReportFront from "../pages/report/quizReportFront";
import RatingsReport from "./../pages/report/Ratings";
import { userRoles as ur } from "../data/userRole";
export const report_routes = [
  {
    path: "/report",
    ele: <Report />,
    availability: [ur.supervisor]
  },
  {
    path: "/chapterreport",
    ele: <ChapterReport />,
    availability: [ur.supervisor, ur.hiredEmployee]
  },
  {
    path: "/overviewreport",
    ele: <OverviewReport />,
    availability: [ur.supervisor, ur.hiredEmployee]
  },
  {
    path: "/quizreportfront",
    ele: <QuizReportFront />,
    availability: [ur.supervisor]
  },
  {
    path: "/quizreport",
    ele: <QuizReport />,
    availability: [ur.supervisor]
  },
  {
    path: "/ratingsreport",
    ele: <RatingsReport />,
    availability: [ur.supervisor, ur.contentCreator]
  },
];
