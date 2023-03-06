import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";

import users from "../../data/Users.json";
const ShowUsersUnderRole = () => {
    const { userRole } = useParams();
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-4">
                <div className="alert alert-success">
                    <h4>{userRole} Details</h4>

                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            {/* <th scope="col">Handle</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) => {
                                return (
                                    (item.userrole === userRole)
                                        ?
                                        <tr className="align-middle">
                                            <th scope="row"><img draggable={false} className="rounded-circle" style={{ "width": "40px" }} alt="user" src={item.image}></img></th>
                                            <td>{item.name}</td>
                                            <td>{item.department}</td>
                                            {/* <td>@mdo</td> */}
                                        </tr>
                                        : null
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
export default ShowUsersUnderRole;