import AddDepartment from "../pages/department/AddDepartment";
import Department from "../pages/department/Department";
import EditDepartment from "../pages/department/EditDepartment";
import AddJobtitle from "../pages/jobtitle/AddJobtitle";
import EditJobtitle from "../pages/jobtitle/EditJobtitle";
import Jobtitle from "../pages/jobtitle/Jobtitle";
import { userRoles as ur } from "../data/userRole";
export const department_routes = [
    {
        path: "/department",
        ele: <Department />,
        availability:[ur.superAdmin]
    },
    {
        path: "/jobtitle",
        ele: <Jobtitle />,
        availability:[ur.superAdmin]
    },
    {
        path: "/newdep",
        ele: <AddDepartment />,
        availability:[ur.superAdmin]
    },
    {
        path: "/newjob",
        ele: <AddJobtitle />,
        availability:[ur.superAdmin]
    },
    {
        path: "/editdep/:id/:name",
        ele: <EditDepartment />,
        availability:[ur.superAdmin]
    },
    {
        path: "/editjob/:id/:name",
        ele: <EditJobtitle />,
        availability:[ur.superAdmin]
    },


]