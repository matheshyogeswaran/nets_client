import PromoteDemote from "../pages/user_role/PromoteDemote";

export const user_role_routes = [
    {
        path: "/promoteDemoteUser",
        ele: <PromoteDemote />, 
        availability:["Super Admin"]
    },
]