import AddChapter from "../pages/chapter/AddChapter";
import AllocateChapter from "../pages/chapter/AllocateChapter";
import Chapter from "../pages/chapter/Chapter";
import CommonChapter from "../pages/chapter/CommonChapter";
import EditCommonChapter from "../pages/chapter/EditCommonChapter";
import DeleteChapter from "../pages/chapter/DeleteChapter";
import DepartmentAddChapter from "../pages/chapter/DepartmentAddChapter";
import DepartmentChapter from "../pages/chapter/DepartmentChapter";
import EditAllocate from "../pages/chapter/EditAllocate";
import EditChapter from "../pages/chapter/EditChapter";
import EnrollRequestEmployee from "../pages/chapter/EnrollRequestEmployee";
import EnrollRequestSupervisor from "../pages/chapter/EnrollRequestSupervisor";
import ListAllChapters from "../pages/chapter/ListAllChapters";
import PermanentDeleteChapter from "../pages/chapter/PermanentDeleteChapter";
import ViewChapter from "../pages/chapter/ViewChapter";
import DeleteChapterPermanent from "../pages/chapter/DeleteChapterPermanent";
import Content from "../pages/Chapter page/Content";
import EditTask from "../pages/Chapter page/EditTask";
export const chapter_routes = [

    {
        path: "/chapter",
        ele: <Chapter />
    },
    {
        path: "/commonchapter",
        ele: <CommonChapter />
    },
    {
        path: "/editcommonchapter/:id/:name",
        ele: <EditCommonChapter />
    },
    {
        path: "/newchap",
        ele: <AddChapter />
    },
    {
        path: "/editchap/:id/:name",
        ele: <EditChapter />
    },
    {
        path: "/deletechap/:id",
        ele: <DeleteChapter />
    },
    {
        path: "/permanentdeletechapter",
        ele: <PermanentDeleteChapter />
    },
    {
        path: "/depchapter",
        ele: <DepartmentChapter />
    },
    {
        path: "/viewchapter",
        ele: <ViewChapter />
    },
    {
        path: "/allocatechapter",
        ele: <AllocateChapter />
    },
    {
        path: "/editallocatechapter/:id/:name",
        ele: <EditAllocate />
    },
    {
        path: "/enrollrequestsupervisor",
        ele: <EnrollRequestSupervisor />
    },
    {
        path: "/enrollrequestemployee",
        ele: <EnrollRequestEmployee />
    },
    {
        path: "/newdepchap",
        ele: <DepartmentAddChapter />
    },
    {
        path: "/deletechapper/:id",
        ele: <DeleteChapterPermanent />
    },
    {
        path: "/chapterPage",
        ele: <Content />
    },
    {
        path: "/edit/:id",
        ele: <EditTask />
    },
]