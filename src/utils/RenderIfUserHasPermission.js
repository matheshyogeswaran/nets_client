import jwt_decode from "jwt-decode";

const RenderIfUserHasPermission = ({permissionID, children }) => {
    const permissionsArray = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData?.userRoleId?.userRolePermissions;
    if (permissionsArray.includes(permissionID)) {
        return children;
    }
    
    return null;
}

export default RenderIfUserHasPermission;