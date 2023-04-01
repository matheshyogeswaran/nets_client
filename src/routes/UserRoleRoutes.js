import AvailableUserRoles from "../pages/user_role/AvailableUserRoles";
import CreateUserRole from "../pages/user_role/CreateUserRole";
import EditUserRole from "../pages/user_role/EditUserRole";
import PromoteDemote from "../pages/user_role/PromoteDemote";
import ShowUsersUnderRole from "../pages/user_role/SHowUsersUnderRole";

export const user_role_routes = [
    {
        path: "/manageuserrole",
        ele: <AvailableUserRoles />
    },
    {
        path: "/createUserRole",
        ele: <CreateUserRole />
    },
    {
        path: "/editUserRole/:userRole",
        ele: <EditUserRole />
    },
    {
        path: "/showUsersUnderRole/:userRole",
        ele: <ShowUsersUnderRole />
    },
    {
        path: "/promoteDemoteUser",
        ele: <PromoteDemote />
    },
]