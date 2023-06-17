import QuizEntry from "../pages/Quiz/QuizEntry";
import Quizpage from "../pages/Quiz/Quizpage";
import QuizDisplay from "../pages/Quiz/QuizDisplay";
import Result from "../pages/Quiz/result";
import Review from "../pages/Quiz/review";

export const quiz_routes = [
  {
    path: "/result",
    ele: <Result />,
  },
  {
    path: "/review",
    ele: <Review />,
  },
  {
    path: "/quiz/view",
    ele: <QuizEntry />,
  },
  {
    path: "/quiz/view/:id",
    ele: <QuizEntry />,
  },
  {
    path: "/quiz",
    ele: <Quizpage />,
  },
  {
    path: "/quiz/:id",
    ele: <Quizpage />,
  },
  {
    path: "/quiz/attempt/:id",
    ele: <QuizDisplay />,
  },
];
