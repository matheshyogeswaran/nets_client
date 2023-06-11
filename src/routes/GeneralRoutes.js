import Ratings from "../components/Ratings/Ratings";
import MainDashBoard from "../pages/dashboard/MainDashBoard";
import ProfileOverview from "../pages/profile/ProfileOverview";
import PendingUserApproval from "../pages/login/PendingUserApproval";
export const general_routes = [
    {
        path: "/home",
        ele: <MainDashBoard />
    },
    {
        path: "/pendingrequests",
        ele: <PendingUserApproval />
    },
    {
        path: "/profile",
        ele: <ProfileOverview />
    },
    {
        path: "/ratings",
        ele: <Ratings />
    },
]