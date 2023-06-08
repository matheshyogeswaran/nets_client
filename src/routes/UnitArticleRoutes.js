import ViewKT from "../pages/KT view/ViewKT";
import UnitContent from "../pages/Unit page/UnitContent";
import ArticleContent from "../pages/article page/ArticleContent";
import ViewContent from "../pages/article view/ViewContent";
import Edit from "../pages/Chapter page/EditUnit";

export const unit_article_routes = [
    {
        path: "/Unit",
        ele: <UnitContent/>
    },
    {
        path: "/Unit/:id",
        ele: <UnitContent/>
    },
    {
        path: "/Unit/View/:id",
        ele: <ViewKT/>
    },
    {
        path: "/article",
        ele: <ArticleContent/>
    },
    {
        path: "/article/View/:id",
        ele: <ViewContent/>
    },
    {
        path: "/edit/:id",
        ele: <Edit/>
    }
]