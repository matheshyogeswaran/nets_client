import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"
import ManageFinalProjectAssignmentNav from "./ManageFinalProjectAssignmentNav";
const EditAssignedTasks = () => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1337/finalprojectassignment/getAssigned')
            .then(response => {
                setRequests(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    const deleteAssignedAssignment = (projectID) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want delete assigned final project assignment? ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`http://localhost:1337/finalprojectassignment/deleteAssignedAssignment`, { projectID: projectID })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.status === true) {
                            Swal.fire("Success !", res.data.message, "success");
                        } else {
                            Swal.fire("Failed !", res.data.message, "error");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        Swal.fire("Failed !", "Network Error", "error");
                    });
            }
        })
    }
    return (
        <>
            <div className="container mt-3">
                <ManageFinalProjectAssignmentNav />
                <div className="bg-dark text-white p-3 rounded ">
                    Edit assigned final project assignments
                </div>
                <table className=" mt-3 table table-striped">
                    <thead className="align-middle">
                        <tr >
                            <th scope="col">Employee Name</th>
                            <th scope="col">Assigned By</th>
                            <th scope="col">Requested On</th>
                            <th scope="col">Assigned On</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests?.map((item) => {
                                return (
                                    <tr className="align-middle">
                                        <td >
                                            <img
                                                draggable={false}
                                                className="rounded-circle me-2"
                                                style={{ "width": "40px" }}
                                                alt="user"
                                                src={item?.userId?.userImage}
                                                referrerPolicy="no-referrer"
                                            ></img>
                                            {item?.userId?.firstName + "  " + item?.userId?.lastName}
                                        </td>
                                        <td >
                                            <img
                                                draggable={false}
                                                className="rounded-circle me-2"
                                                style={{ "width": "40px" }}
                                                alt="user"
                                                src={item?.acceptedBy?.userImage}
                                                referrerPolicy="no-referrer"
                                            ></img>
                                            {item?.acceptedBy?.firstName + "  " + item?.acceptedBy?.lastName}
                                        </td>
                                        <td>{new Date(item?.requestedDate).toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}</td>
                                        <td>{new Date(item?.assignedOn).toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}</td>
                                        <td>
                                            <Link to={"/updateFinalProjectAssignment/" + item?._id} className="btn btn-outline-success">
                                                Update
                                            </Link>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => { deleteAssignedAssignment(item?._id) }}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default EditAssignedTasks