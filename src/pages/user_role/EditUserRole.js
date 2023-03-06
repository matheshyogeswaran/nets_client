import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import perimssions from "../../data/renderPermissions.json"
import swal from 'sweetalert'
import NavBar from "../../components/NavBar";
const EditUserRole = () => {
    const { userRole } = useParams();

    const [userRoleValue, setUserRoleValue] = useState("");
    const [permissionsArray, setPermissions] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:1337/userRoles/findOneUserRole/${userRole}`)
            .then(function (response) {
                setUserRoleValue(response.data.userRoleValue);
                setPermissions(response.data.userRolePermissions);
            });
    }, [userRole]);

    const updateArray = (event) => {
        const value = event.target.value;
        if (permissionsArray.includes(value)) {
            const newPermissionsArray = permissionsArray.filter(permission => permission !== value);
            setPermissions(newPermissionsArray);
        } else {
            const newPermissionsArray = [...permissionsArray, value];
            setPermissions(newPermissionsArray);
        }
    };

    const submitForm = (event) => {
        event.preventDefault();
        const postData = {
            userRoleID: userRole,
            userRoleName: userRoleValue,
            permissions: permissionsArray
        }
        axios.post('http://localhost:1337/userRoles/editUserRole', postData)
            .then((res) => {
                if (res.data.status === "success") {
                    swal("Good job!", res.data.message, "success")
                } else if (res.data.status === "duplicate") {
                    swal("Warning", res.data.message, "warning")
                }
            }).catch((error) => {
                // console.log(error);
                swal("Error", "Error saving data to the database", "error");
            });
    }

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-3">
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        onChange={(e) => { setUserRoleValue(e.target.value) }}
                        className="form-control "
                        placeholder="Enter new user role name :"
                        value={userRoleValue}
                    ></input>
                    <div className="alert alert-success mt-2">Edit User Role Permissions</div>
                    {
                        perimssions.map((item) => {
                            const currentID = item.permissionValue.replace(/\s+/g, '');
                            return (
                                <div className="p-2" key={currentID}>
                                    <button className="btn border-dark btn-light form-control" type="button" data-bs-toggle="collapse" data-bs-target={"#" + currentID} aria-expanded="false" aria-controls={currentID}>
                                        {"Select Permissions Related to "}<b>{item.permissionValue}</b>
                                    </button>
                                    <div className="collapse" id={currentID}>
                                        <div className=" p-4">
                                            <div className="card card-body">
                                                {
                                                    item.permissions.map((permissions) => {
                                                        return (
                                                            <div key={permissions.permissionID} className="form-check mt-1">
                                                                <input
                                                                    onChange={(e) => { updateArray(e) }}
                                                                    checked={permissionsArray?.includes(permissions?.permissionID)}
                                                                    className="form-check-input"
                                                                    value={permissions.permissionID}
                                                                    type="checkbox"
                                                                    id={permissions.permissionID}
                                                                ></input>
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor={permissions.permissionID}
                                                                >
                                                                    {permissions.permissionValue}
                                                                </label>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="card-footer mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="submit" className="btn btn-outline-primary form-control" value="Update User Role"></input>
                            </div>
                            <div className="col-md-6">
                                <input type="reset" className="btn btn-outline-warning form-control" value="Reset"></input>
                            </div>
                        </div>
                    </div>
                </form>
                <br></br><br></br>
            </div>
        </React.Fragment>
    );
}
export default EditUserRole;