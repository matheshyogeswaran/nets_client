import React from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
const PendingUserApproval = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container">
                <div className="form-control mt-3 bg-dark text-white">Hired Employee Requests</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Allow</th>
                            <th scope="col">Deny</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) => {
                                return (
                                    (item.userrole === "Hired Employee") ?
                                        <>
                                            <tr className="align-middle">
                                                <th scope="row">{item.id}</th>
                                                <th><img draggable={false} className="rounded-circle" style={{ "width": "40px" }} alt="user" src={item.image}></img></th>
                                                <td>{item.name}</td>
                                                <td>{item.department}</td>
                                                <td>Job Title</td>
                                                <td><button type="button" className="btn btn-outline-success form-control">Allow</button></td>
                                                <td><button type="button" className="btn btn-outline-danger form-control">Deny</button></td>
                                                {/* <td>@mdo</td> */}

                                            </tr>
                                        </>
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
export default PendingUserApproval;