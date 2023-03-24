import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import swal from 'sweetalert'
import axios from "axios"

const PromoteDemote = () => {
    const [selectedRole, setSelectedRole] = useState("");
    console.log(selectedRole);
    const [userRoles, setUserRoles] = useState();
    const [users, setUsers] = useState();
    const [newuserrole, setnewuserrole] = useState();
    const[loadAgain, setLoadAgain] = useState(1);
    useEffect(() => {
        axios.get('http://localhost:1337/userRoles/showAllUserRoles')
            .then(response => {
                setUserRoles(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('http://localhost:1337/users/showAllUsers')
            .then(response => {
                setUsers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [loadAgain])

    const changeUserRole = (userID) => {
        const newRole = {
            userID: userID,
            newRoleID: newuserrole,
        };
        axios.post('http://localhost:1337/userRoles/changeUserRole', newRole)
            .then((res) => {
                if (res.data.status) {
                    swal({
                        icon: "success",
                        text: res.data.message
                    });
                    setLoadAgain(loadAgain+1);
                }else{
                    swal({
                        icon: "warning",
                        text: res.data.message
                    });
                }
                setSelectedRole('');

            })
            .catch((error) => {
                console.log(error);
                swal({
                    icon: "warning",
                    text: "Network",
                });
            });
    }

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container mt-5">
                <div className="alert alert-success"><h4>Promote or Demote User</h4></div>
                <select className="form-control" onChange={(e) => setSelectedRole(e.target.value)}>
                    <option selected disabled> Select User Role to View</option>
                    {
                        userRoles?.map((item) => {
                            return (
                                (item.userRoleValue === "Super Admin") ? null : <option value={item._id} key={item._id}>{item.userRoleValue}</option>
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
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Select New Role</th>
                                    <th scope="col">Save</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((item) => {
                                        return (
                                            (item.userRoleId._id === selectedRole)
                                                ?
                                                <>
                                                    <tr className="align-middle">
                                                        <th scope="row"><img draggable={false} referrerPolicy="no-referrer" className="rounded-circle" style={{ "width": "40px" }} alt="user" src={item.userImage}></img></th>
                                                        <td>{item?.firstName}</td>
                                                        <td>{item?.lastName}</td>
                                                        <td>{item?.department?.depName}</td>
                                                        <td>
                                                            <select className="form-control" onChange={(e)=>{setnewuserrole(e.target.value)}}>
                                                            <option selected value="" disabled>Select User Role</option>
                                                                {
                                                                    userRoles?.map((item) => {
                                                                        return (
                                                                            (item.userRoleValue === "Super Admin") ? null : <option value={item._id} key={item._id}>{item.userRoleValue}</option>
                                                                        );
                                                                    })
                                                                }
                                                            </select>
                                                        </td>
                                                        <td><button type="button" onClick={() => changeUserRole(item?._id)} className="btn btn-outline-success form-control">Save</button></td>
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