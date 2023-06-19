import UnitHistory from "../pages/Chapter page/UnitHistory";
import KTHistory from "../pages/Unit page/KTHistory";
import ArticleHistory from "../pages/article page/ArticleHistory";
import QuestionEditHistory from "../pages/Quiz/QuestionEditHistory";
import EditHistory from "../components/EditHistory";
import ForumHistory from "../components/Forums/ForumHistory";

export const editlogs_routes = [
  {
    path: "/editunits",
    ele: <UnitHistory />,
  },
  {
    path: "/editkts",
    ele: <KTHistory />,
  },
  {
    path: "/editarticles",
    ele: <ArticleHistory />,
  },
  {
    path: "/editforums",
    ele: <ForumHistory />,
  },
  {
    path: "/editquestions",
    ele: <QuestionEditHistory />,
  },
  {
    path: "/edithistory",
    ele: <EditHistory />,
  },
];
