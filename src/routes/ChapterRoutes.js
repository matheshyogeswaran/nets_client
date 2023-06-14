import AddChapter from "../pages/chapter/AddChapter";
import AllocateChapter from "../pages/chapter/AllocateChapter";
import Chapter from "../pages/chapter/Chapter";
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

import { userRoles as ur } from "../data/userRole";

export const chapter_routes = [
    {
        path: "/chapter",
        ele: <Chapter />,
        availability: [ur.superAdmin]
    },
    {
        path: "/newchap",
        ele: <AddChapter />,
        availability: [ur.superAdmin]
    },
    {
        path: "/editchap/:id/:name",
        ele: <EditChapter />,
        availability: [ur.systemAdmin]
    },
    {
        path: "/deletechap/:id",
        ele: <DeleteChapter />,
        availability: [ur.systemAdmin]
    },
    {
        path: "/permanentdeletechapter",
        ele: <PermanentDeleteChapter />,
        availability: [ur.superAdmin]
    },
    {
        path: "/depchapter",
        ele: <DepartmentChapter />,
        availability: [ur.systemAdmin]
    },
    {
        path: "/viewchapter",
        ele: <ViewChapter />,
        availability: [ur.superAdmin, ur.systemAdmin, ur.supervisor, ur.contentCreator]
    },
    {
        path: "/allocatechapter",
        ele: <AllocateChapter />,
        availability: [ur.systemAdmin]
    },
    {
        path: "/editallocatechapter/:id/:name",
        ele: <EditAllocate />,
        availability: [ur.systemAdmin]
    },
    {
        path: "/enrollrequestsupervisor",
        ele: <EnrollRequestSupervisor />,
        availability: [ur.supervisor]
    },
    {
        path: "/enrollrequestemployee",
        ele: <EnrollRequestEmployee />,
        availability: [ur.hiredEmployee]
    },
    {
        path: "/newdepchap",
        ele: <DepartmentAddChapter />,
        availability: [ur.systemAdmin]
    },
    {
        path: "/deletechapper/:id",
        ele: <DeleteChapterPermanent />,
        availability: [ur.superAdmin]
    },
    {
        path: "/chapterPage",
        ele: <Content />,
        availability:[ur.superAdmin]
    },
]