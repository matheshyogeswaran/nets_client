import UnitHistory from "../pages/Chapter page/UnitHistory";
import KTHistory from "../pages/Unit page/KTHistory";
import ArticleHistory from "../pages/article page/ArticleHistory";
import QuestionEditHistory from "../pages/quiz/QuestionEditHistory";
import EditHistory from "../components/EditHistory";
import { userRoles as ur } from "../data/userRole";
export const editlogs_routes = [
  {
    path: "/editunits",
    ele: <UnitHistory />,
    availability: [ur.superAdmin]
  },
  {
    path: "/editkts",
    ele: <KTHistory />,
    availability: [ur.superAdmin]
  },
  {
    path: "/editarticles",
    ele: <ArticleHistory />,
    availability: [ur.superAdmin]
  },
  {
    path: "/editquestions",
    ele: <QuestionEditHistory />,
    availability: [ur.superAdmin]
  },
  {
    path: "/edithistory",
    ele: <EditHistory />,
    availability: [ur.superAdmin]
  },
];
