import PromoteDemoteSuperAdmin from "../pages/user_role/PromoteDemoteSuperAdmin";
import PromoteDemoteSystemAdmin from "../pages/user_role/PromoteDemoteSystemAdmin";


export const user_role_routes = [
    {
        path: "/promoteDemoteUser/superadmin",
        ele: <PromoteDemoteSuperAdmin />,
        availability: ["Super Admin"]
    },
    {
        path: "/promoteDemoteUser/systemadmin",
        ele: <PromoteDemoteSystemAdmin />,
        availability: ["System Admin"]
    },
]