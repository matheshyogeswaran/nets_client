import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
const RedirectIfUserDontHavePermission = ({permissionID, children }) => {
    const permissionsArray = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData?.userRoleId?.userRolePermissions;
    if (permissionsArray.includes(permissionID)) {
        return children;
    }
    swal({icon: "warning",text: "Permission Denied"});
    return <Navigate to="/home" />
}
export default RedirectIfUserDontHavePermission;