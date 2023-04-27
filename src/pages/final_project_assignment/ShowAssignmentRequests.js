import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManageFinalProjectAssignmentNav from "./ManageFinalProjectAssignmentNav";
const ShowAssignmentRequests = () => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1337/finalprojectassignment/showRequests')
            .then(response => {
                setRequests(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <>
            <div className="container mt-3">
                <ManageFinalProjectAssignmentNav />
                <div className="bg-dark text-white p-3 rounded ">
                    Final Project Assignment Requests
                </div>
                {
                    (requests.length > 0)
                        ?
                        <table className=" mt-3 table table-striped">
                            <thead className="align-middle">
                                <tr >
                                    <th scope="col">Image</th>
                                    <th scope="col">Request ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Requested On</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Assign</th>
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
                                                        className="rounded-circle"
                                                        style={{ "width": "40px" }}
                                                        alt="user"
                                                        src={item?.userId?.userImage}
                                                        referrerPolicy="no-referrer"
                                                    ></img>
                                                </td>
                                                <td>{item?._id}</td>
                                                <td>{item?.userId?.firstName}</td>
                                                <td>{item?.userId?.lastName}</td>
                                                <td>{new Date(item?.requestedDate).toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-primary form-control" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item?.userID?._id}>
                                                        Show Contact
                                                    </button>
                                                    <div class="modal fade" id={"exampleModal" + item?.userID?._id} tabindex="-1" aria-labelledby={"exampleModalLabel" + item?.userID?._id} aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h1 class="modal-title fs-5" id={"exampleModalLabel" + item?.userID?._id}>Contact Details</h1>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <p>Phone: {item?.userId?.phoneNumber}</p>
                                                                    <hr></hr>
                                                                    <p>Email: <a href={"mailto:" + item?.userId?.emailAddress}> {item?.userId?.emailAddress} </a></p>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary form-control" data-bs-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to={"/assignFinalProjectAssignment/" + item?._id} className="btn btn-outline-success">
                                                        Assign
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <div className="alert alert-info mt-3">
                            No Final Project Assignment Requests Found
                        </div>
                }

            </div>
        </>
    )
}
export default ShowAssignmentRequests