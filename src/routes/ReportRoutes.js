import Report from "../pages/report/Report";
import ChapterReport from "../pages/report/chapterReport";
import OverviewReport from "../pages/report/overviewReport";
import QuizReport from "../pages/report/quizReport";
import QuizReportFront from "../pages/report/quizReportFront";
import RatingsReport from "./../pages/report/Ratings";

export const report_routes = [
  {
    path: "/report",
    ele: <Report />,
  },
  {
    path: "/chapterreport",
    ele: <ChapterReport />,
  },
  {
    path: "/overviewreport",
    ele: <OverviewReport />,
  },
  {
    path: "/quizreportfront",
    ele: <QuizReportFront />,
  },
  {
    path: "/quizreport",
    ele: <QuizReport />,
  },
  {
    path: "/ratingsreport",
    ele: <RatingsReport />,
  },
];
