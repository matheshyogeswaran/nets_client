import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Chapters from "../../data/Chapters.json"
import Swal from "sweetalert2"
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";

const ListAllChapters = () => {
    const userid = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData._id
    const [isProjectAssigned, setisProjectAssigned] = useState();
    useEffect(() => {
        axios.get(`http://localhost:1337/finalprojectassignment/isProjectAssigned/${userid}`)
            .then(response => {
                setisProjectAssigned(response.data.status);
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
                axios.get(`http://localhost:1337/finalprojectassignment/request/${userid}`)
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
                <div class="row">
                    {
                        Chapters.map((item) => {
                            return (
                                (item.department === "IT")
                                    ?
                                    (item.chapters).map((chapter) => {
                                        return (
                                            <div class="col-md-6 mt-3">
                                                <div class="card shadow border border-2">
                                                    <div class="card-body">
                                                        <h5 class="card-title"><i class="bi bi-journal-text me-2"></i>{chapter}</h5>
                                                        <hr></hr>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        <Link to="#" class=" btn btn-outline-secondary">Continue <i class="bi bi-arrow-right-circle"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            )
                        })
                    }

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