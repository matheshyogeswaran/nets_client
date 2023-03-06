import React, { useEffect, useState } from "react";
// import "../../App.css"
import { Link } from "react-router-dom";
import axios from "axios"
import NavBar from "../../components/NavBar";
const AvailableUserRoles = () => {
    const [userRoles, setUserRoles] = useState();
    useEffect(() => {
        axios
            .get("http://localhost:1337/userRoles/showAllUserRoles")
            .then(function (response) {
                setUserRoles(response.data);
            });
    }, [])
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-4">
                <div className="alert alert-info">
                    <h5>Available User Roles</h5>
                </div>
                <Link to="/createUserRole" className="border border-dark btn btn-light form-control">+ Create New User Role</Link>
                <hr className="mt-3"></hr>
                <table className="table">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Role</th>
                            <th scope="col">Number of Users</th>
                            <th scope="col">Show Users</th>
                            <th scope="col">Edit User Role</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            userRoles?.map((item) => {
                                return (
                                    <tr>
                                        <th scope="row">{item._id}</th>
                                        <td>{item.userRoleValue}</td>
                                        <td>{item.availableUsers.length}</td>
                                        <td>
                                            <Link to={`/ShowUsersUnderRole/${item._id}`} className="btn form-control btn-outline-success btn-sm">Show Users</Link>
                                        </td>
                                        <td>
                                            <Link to={`/editUserRole/${item._id}`} className="btn form-control btn-outline-dark btn-sm">Edit User Role</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        </React.Fragment>
    );
}
export default AvailableUserRoles;