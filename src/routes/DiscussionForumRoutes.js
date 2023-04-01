import AddReply from "../components/Forums/AddReply";
import CreateForum from "../components/Forums/CreateForum";
import CreatePost from "../components/Forums/CreatePost";
import EditForum from "../components/Forums/EditForum";
import Forums from "../components/Forums/Forums";
import ViewForum from "../components/Forums/ViewForum";

export const discussion_forum_routes = [
    {
        path: "/forums",
        ele: <Forums/>
    },
    {
        path: "/view-forum/:forumId",
        ele: <ViewForum/>
    },
    {
        path: "/create-forum",
        ele: <CreateForum/>
    },
    {
        path: "/edit-forum/:forumId",
        ele: <EditForum/>
    },
    {
        path: "/create-post/:forumId",
        ele: <CreatePost/>
    },
    {
        path: "/add-reply/:forumId/:commentId",
        ele: <AddReply/>
    },
]