import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import ManageFinalProjectAssignmentNav from "./ManageFinalProjectAssignmentNav";
import Swal from "sweetalert2"

const OverDuedFinalProjectAssignment = () => {
    const userDocument = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData;
    const depid = userDocument.department;
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:1337/finalprojectassignment/getOverDuedAssignments/${depid}`)
            .then(response => {
                setRequests(response.data);
                if(response.data.length === 0){
                    Swal.fire("","No Overdued Final Project Assignments found","warning");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    function formatDuration(assigndDateTime) {
        const assignmentDeadline = new Date(assigndDateTime);
        const now = new Date()
        const minutes = Math.abs(Math.floor((assignmentDeadline.getTime() - now.getTime()) / 60000));
        let days = Math.floor(minutes / 1440);
        let hours = Math.floor((minutes % 1440) / 60);
        let remainingMinutes = minutes % 60;
        let result = "";
        if (days > 0) {
            result += days + " day" + (days === 1 ? "" : "s") + ", ";
        }
        if (hours > 0) {
            result += hours + " hour" + (hours === 1 ? "" : "s") + ", ";
        }
        result += remainingMinutes + " minute" + (remainingMinutes === 1 ? "" : "s");
        return result;
    }


    return (
        <div className="container mt-3">
            <ManageFinalProjectAssignmentNav />
            <div className="heading text-white p-3 rounded ">
                Over Dued Assignments
            </div>

            <table className=" mt-3 table table-striped">
                <thead className="align-middle">
                    <tr >
                        <th scope="col">Employee Name</th>
                        <th scope="col">Assigned By</th>
                        <th scope="col">Requested On</th>
                        <th scope="col">Assigned On</th>
                        <th scope="col">Overdued By</th>
                        <th scope="col">Reschedule</th>
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
                                    <td>{formatDuration(item?.projectDeadLine)}</td>
                                    <td>
                                        <Link to={"/updateFinalProjectAssignment/" + item?._id} className="btn btn-outline-primary">
                                            Reschedule
                                        </Link>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default OverDuedFinalProjectAssignment