import { Link } from "react-router-dom";
import Swal from "sweetalert2"
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bs2CircleFill, BsFillChatTextFill } from "react-icons/bs";
import { GiBirdCage } from "react-icons/gi";

const ListAllChapters = () => {
    const userDocument = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData;
    const userid = userDocument._id;
    const depid = userDocument.department;
    const jobid = userDocument.jobPosition;

    const [isProjectAssigned, setisProjectAssigned] = useState();
    const [chapters, setChapters] = useState([]);
    const [additionalChapters, setAdditionalChapters] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:1337/finalprojectassignment/isProjectAssigned/${userid}`)
            .then(response => {
                setisProjectAssigned(response.data.status);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get(`http://localhost:1337/chapters/loadAllocatedChapters/${depid}/${jobid}`)
            .then(response => {
                setChapters(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get(`http://localhost:1337/chapters/loadAdditionalChapters/${userid}`)
            .then(response => {
                setAdditionalChapters(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    const sendProjectRequest = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to send Final Project Assignment Request to your Supervisor ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Request'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.get(`http://localhost:1337/finalprojectassignment/request/${userid}/${depid}`)
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
        <div>
            <div className="container mt-3">
                <div className="card">
                    <div className="card-header heading">
                        <h5> Department Chapters</h5>
                    </div>
                    <div className="card-body">
                        <div class="row">
                            {
                                chapters?.chaptersAllocated?.map((item) => {
                                    return (
                                        <div class="col-md-6 mt-3">
                                            <div class="card shadow border border-2">
                                                <div class="card-body">
                                                    <h5 class="card-title"><i class="bi bi-journal-text me-2"></i>{item?.chapterName}</h5>
                                                    <hr></hr>
                                                    <Link to={"/viewChapter/" + item?._id} class=" btn btn-outline-secondary">Continue <i class="bi bi-arrow-right-circle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header heading">
                        <h5>Common Chapters</h5>
                    </div>
                    <div className="card-body">
                        <div class="row">
                            {
                                chapters?.chaptersAllocated?.map((item) => {
                                    return (
                                        <div class="col-md-6 mt-3">
                                            <div class="card shadow border border-2">
                                                <div class="card-body">
                                                    <h5 class="card-title"><i class="bi bi-journal-text me-2"></i>{item?.chapterName}</h5>
                                                    <hr></hr>
                                                    <Link to={"/viewChapter/" + item?._id} class=" btn btn-outline-secondary">Continue <i class="bi bi-arrow-right-circle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header heading">
                        <h5>Enrolled Additional Chapters:  <Link to="/enrollrequestemployee">Request More</Link></h5>
                    </div>
                    <div className="card-body">
                        <div class="row">
                            {
                                additionalChapters?.acceptedAdditionalChapter?.map((item) => {
                                    return (
                                        <div class="col-md-6 mt-3">
                                            <div class="card shadow border border-2">
                                                <div class="card-body">
                                                    <h5 class="card-title"><i class="bi bi-journal-text me-2"></i>{item?.chapterName}</h5>
                                                    <hr></hr>
                                                    <Link to={"/viewChapter/" + item?._id} class=" btn btn-outline-secondary">Continue <i class="bi bi-arrow-right-circle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    isProjectAssigned &&
                    <Link to="/submitanswer" className="form-control btn btn-outline-dark btn-lg shadow-lg mt-3 mb-5">
                        Goto Your Final Project Assignment
                    </Link>
                }
                {
                    !isProjectAssigned &&
                    <button onClick={sendProjectRequest} className="form-control btn btn-outline-dark btn-lg shadow-lg mt-3 mb-5">Get Your Final Project Assignment !</button>
                }
            </div>
            <br></br><br></br>
        </div>
    );
}
export default ListAllChapters