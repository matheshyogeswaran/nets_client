import React, { useState } from "react";
import perimssions from "../../data/renderPermissions.json"
import axios from "axios";
import swal from 'sweetalert'
import NavBar from "../../components/NavBar";
const CreateUserRole = () => {
    var permissionsArray = [];
    const [userRoleValue, setUserRoleValue] = useState();

    const submitData = (e) => {
        e.preventDefault();
        const postData = {
            userRoleName:userRoleValue,
            permissions:permissionsArray
        }
        axios.post('http://localhost:1337/userRoles/addUserRole', postData)
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

    const updateArray = (event) => {
        if (permissionsArray.includes(event.target.value)) {
            permissionsArray.pop(event.target.value)
        } else {
            permissionsArray.push(event.target.value)
        }
    }

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-3">
                <form onSubmit={submitData}>
                    <div className="card">
                        <div className="card-header">
                            <h5>Create New User Role</h5>
                        </div>
                        <div className="card-body">
                            <input type="text" onChange={(e) => { setUserRoleValue(e.target.value) }} className="form-control " placeholder="Enter new user role name :"></input>
                            <h6 className="mt-3">
                                Select Permissions
                            </h6>

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
                                                                        <input onChange={(e) => { updateArray(e) }} className="form-check-input" value={permissions.permissionID} type="checkbox" id={permissions.permissionID}></input>
                                                                        <label className="form-check-label" htmlFor={permissions.permissionID}>
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

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="submit" className="btn btn-outline-primary form-control" value="Create User Role"></input>
                                </div>
                                <div className="col-md-6">
                                    <input type="reset" className="btn btn-outline-warning form-control" value="Reset"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
export default CreateUserRole;