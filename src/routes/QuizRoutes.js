import QuizEntry from "../pages/quiz/QuizEntry";
import Quizpage from "../pages/quiz/Quizpage";
import QuizDisplay from "../pages/quiz/QuizDisplay";
import Result from "../pages/quiz/result";
import Review from "../pages/quiz/review";

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
