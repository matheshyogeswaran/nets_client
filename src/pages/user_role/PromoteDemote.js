import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import userroles from "../../data/UserRoles.json";
import users from "../../data/Users.json";
const PromoteDemote = () => {
    const [selectedRole, setSelectedRole] = useState("");
    console.log(selectedRole);

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-5">
                <div className="alert alert-success"><h4>Promote or Demote User</h4></div>
                <select className="form-control" onChange={(e) => setSelectedRole(e.target.value)}>
                    <option selected disabled> Select User Role to View</option>
                    {
                        userroles.map((item) => {
                            return (
                                (item.value === "Super Admin")?null:<option value={item.value} key={item.id}>{item.value}</option>
                            );
                        })
                    }
                </select>
                {
                    (selectedRole === "")
                        ?
                        <div className="mt-5 alert alert-danger">Please select a user role</div>
                        :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Select New Role</th>
                                    <th scope="col">Save</th>
                                    <th scope="col">Reset</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item) => {
                                        return (
                                            (item.userrole === selectedRole)
                                                ?
                                                <>
                                                    <tr className="align-middle">
                                                        <th scope="row"><img draggable={false} className="rounded-circle" style={{ "width": "40px" }} alt="user" src={item.image}></img></th>
                                                        <td>{item.name}</td>
                                                        <td>{item.department}</td>
                                                        <td>
                                                            <select className="form-control">
                                                                {
                                                                    userroles.map((roleitem) => {
                                                                        return (
                                                                            (roleitem.value !== "Super Admin") ? <option key={roleitem.id}>{roleitem.value}</option> : null
                                                                        );
                                                                    })
                                                                }
                                                            </select>
                                                        </td>
                                                        <td><button type="button" className="btn btn-outline-success form-control">Save</button></td>
                                                        <td><button type="reset" className="btn btn-outline-warning form-control">Reset</button></td>
                                                        {/* <td>@mdo</td> */}

                                                    </tr>
                                                </>

                                                : null
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                }

            </div>

        </React.Fragment>
    );
}
export default PromoteDemote;