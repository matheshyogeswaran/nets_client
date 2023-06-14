import UnitHistory from "../pages/Chapter page/UnitHistory";
import KTHistory from "../pages/Unit page/KTHistory";
import ArticleHistory from "../pages/article page/ArticleHistory";


export const editlogs_routes = [
    {
        path: "/editunits",
        ele: <UnitHistory />
    },
    {
        path: "/editkts",
        ele: <KTHistory />
    },
    {
        path: "/editarticles",
        ele: <ArticleHistory />
    },



]