import AddDepartment from "../pages/department/AddDepartment";
import DeleteDepartment from "../pages/department/DeleteDepartment";
import DeleteJobtitle from "../pages/department/DeleteJobtitle";
import Department from "../pages/department/Department";
import EditDepartment from "../pages/department/EditDepartment";
import AddJobtitle from "../pages/jobtitle/AddJobtitle";
import EditJobtitle from "../pages/jobtitle/EditJobtitle";
import Jobtitle from "../pages/jobtitle/Jobtitle";

export const department_routes = [
    { 
        path: "/department", 
        ele: <Department /> 
    },
    { 
        path: "/jobtitle", 
        ele: <Jobtitle /> 
    },
    { 
        path: "/newdep", 
        ele: <AddDepartment /> 
    },
    { 
        path: "/newjob", 
        ele: <AddJobtitle /> 
    },
    { 
        path: "/editdep/:id/:name", 
        ele: <EditDepartment /> 
    },
    { 
        path: "/editjob/:id/:name", 
        ele: <EditJobtitle /> 
    },
    { 
        path: "/deletedep/:id", 
        ele: <DeleteDepartment /> 
    },
    { 
        path: "/deletejob/:id", 
        ele: <DeleteJobtitle /> 
    },
]