import { useEffect, useState } from "react"
import axios from "axios"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2"
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
const FinalAssignmentSubmission = () => {
    const navigate = useNavigate();
    const userData = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData._id
    const modules = {
        toolbar: [
            [{ font: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "video"],
        ],
    };
    const [assignment, setAssignment] = useState();

    const [note, setNote] = useState();
    const [file, setFiles] = useState();
    const [isAssignmentRequested, setIsAssignmentRequested] = useState(false);
    const [isAssignmentSubmitted, setIsAssignmentSubmitted] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:1337/finalprojectassignment/getOneAssignment/${userData}`)
            .then(response => {
                if (response.data[0] !== null) {
                    setIsAssignmentRequested(true);
                } else {
                    Swal.fire("Info", "Request Assignment First", "info");
                }
                setAssignment(response.data[0]);
                setIsAssignmentSubmitted((response?.data[0]?.submittedDate) ? true : false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const assignmentDeadline = new Date(assignment?.projectDeadLine);
    const now = new Date()
    const diffInMs = (assignmentDeadline.getTime() - now.getTime()) / 60000;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("note", note);
        formData.append("subid", assignment?._id);
        formData.append("ufile", file[0]);
        try {
            axios.post("http://localhost:1337/addFinalProjectSubmission", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
                .then(res => {
                    console.log(res.data);
                    if (res.data.status === true) {
                        Swal.fire("Assignment Submitted Successfully", "", "success");
                        navigate("/home")
                    } else {
                        Swal.fire("Error In Submitting Assignment", res.data.message, "error");
                    }

                }).catch(err => {
                    console.log(err);
                })
        } catch (err) {
            console.log(err);
            alert("Error Occured")
        }
    }

    function formatDuration(minutes) {
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
        <div>
            {
                !isAssignmentRequested &&
                <div className="container">
                    <Link to="/home" className="mt-5 btn btn-light border border-dark form-control">
                        Final Project Assignment is not Requested Yet. Move to Learn Chapter Page to Request
                    </Link>
                </div>
            }
            {
                isAssignmentRequested &&
                <div className="mt-4 container">
                    <div className="bg-dark text-white p-3 rounded">
                        Project Assignment
                    </div>
                    <div className="border rounded p-3 mt-3">
                        <h6>Project Title: {assignment?.projectName}</h6>
                        <h6>Deadline: {new Date(assignment?.projectDeadLine).toLocaleString('en-US', { timeZone: 'Asia/Colombo' })}</h6>
                        <h6>
                            Deadline Status:{" "}
                            {
                                (diffInMs <= 0)
                                    ?
                                    <span style={{ "color": "red" }}>
                                        {"Assignment overdued by " + formatDuration(Math.abs(Math.floor(diffInMs)))}
                                    </span>
                                    :
                                    <span style={{ "color": "green" }}>
                                        {formatDuration(Math.floor(diffInMs)) + " Left"}
                                    </span>
                            }
                        </h6>
                        {
                            (assignment.supAttachFileSize)
                                ?
                                <h6>Attachment:{"  "}
                                    <span>
                                        <a href={assignment?.uploadedFileBySupervisor}>
                                            {
                                                assignment?.supAttachOriginalName
                                            }
                                        </a>
                                        {"  (" + assignment?.supAttachFileSize + " Bytes)"}
                                    </span>
                                </h6>
                                :
                                null
                        }
                        <h6>
                            Assigned By:{"   "}
                            <button
                                className="btn btn-light border border-dark btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target={"#openModal"}
                            >
                                {"  " + assignment?.acceptedBy.firstName + "  " + assignment?.acceptedBy.lastName}
                            </button>
                        </h6>
                        <div className="modal fade" id={"openModal"} tabindex="-1" aria-labelledby={"exampleModal"} aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id={"exampleModal"}>Contact Details</h1>

                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <center>
                                            <img
                                                draggable={false}
                                                referrerPolicy="no-referrer"
                                                width={150}
                                                height={150}
                                                alt="userImage"
                                                src={assignment?.acceptedBy.userImage}
                                                className="p-3 rounded-circle">
                                            </img>
                                        </center>
                                        <hr></hr>
                                        <p>Phone: {assignment?.acceptedBy.phoneNumber}</p>
                                        <hr></hr>
                                        <p>Email: <a href={"mailto:" + assignment?.acceptedBy.emailAddress}> {assignment?.acceptedBy.emailAddress} </a></p>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded p-3 mt-3">
                        <p>
                            <button class="btn btn-light border border-dark form-control" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Show Project Description
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                <div dangerouslySetInnerHTML={{ __html: assignment?.projectDescription }} />
                            </div>
                        </div>
                    </div>
                    {
                        (!isAssignmentSubmitted)
                        &&
                        <div className="border rounded p-3 mt-3 mb-5">
                            <div className="bg-dark text-white p-3 rounded">
                                Submit Your Answer
                            </div>
                            {
                                (diffInMs <= 0)
                                    ?

                                    <div className="alert alert-danger mt-3">
                                        <strong>
                                            Assignment Overdued. Contact{"  "}
                                            <button
                                                className="btn btn-danger btn-sm"
                                                data-bs-toggle="modal"
                                                data-bs-target={"#openModal"}
                                            >
                                                {assignment?.acceptedBy.firstName + "  " + assignment?.acceptedBy.lastName}
                                            </button>
                                            {"  "}
                                            to reschedule.</strong></div>
                                    :
                                    <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" >
                                        <ReactQuill
                                            className="form-floating mb-3 mt-3"
                                            theme="snow"
                                            value={note}
                                            onChange={setNote}
                                            modules={modules}
                                            placeholder="Enter Your Note Here..."
                                        />
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                accept=".zip, .rar"
                                                type="file"
                                                onChange={(e) => { setFiles(e.target.files) }}
                                            />
                                            <font size="2">
                                                <strong>
                                                    <span className="me-3"></span>
                                                    * Only <i>.zip .rar .7zip </i> Files are allowed, File should be less than 50 MB
                                                </strong>
                                            </font>
                                        </div>
                                        <button
                                            type="submit"
                                            className="form-control btn btn-outline-success">
                                            Submit
                                        </button>
                                    </form>
                            }

                        </div>
                    }

                    {
                        (assignment?.submittedDate)
                        &&
                        <div className="border rounded p-3 mt-3">
                            <p>
                                <button
                                    class="btn btn-light border border-dark form-control"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseSubmission"
                                    aria-expanded="false"
                                    aria-controls="collapseSubmission"
                                >
                                    Show Project Submission
                                </button>
                            </p>
                            <div class="collapse" id="collapseSubmission">
                                <div class="card card-body">
                                    <h6>Submitted Note</h6>
                                    <div
                                        className="border rounded p-3 mb-3"
                                        dangerouslySetInnerHTML={{ __html: assignment?.uploadedDescriptionByEmployee }}
                                    />
                                    <h6>Attachment:{"  "}
                                        <a href={assignment?.uploadedFileByEmployee}>
                                            {
                                                assignment?.empAttachOriginalName
                                            }
                                        </a> {"  "}
                                        ({assignment?.empAttachFileSize} bytes)
                                    </h6>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            }
        </div>



    )
}
export default FinalAssignmentSubmission
