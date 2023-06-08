import React from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
import axios from "axios";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const DepartmentChapter = () => {
    const userdepartment = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData.department;
    const [chapters, setChapter] = useState([]);

    function deleteChapter(id) {
        swal({
            title: "Confirm",
            text: "Are you absolutely sure you want to delete this Chapter?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .put(`http://localhost:1337/chapters/${id}`, {
                        status: "notactive",
                    })
                    .then((res) => {
                        if (res.data.status === true) {
                            swal(res.data.message, {
                                icon: "success",
                            });

                        } else {
                            swal(res.data.message, {
                                icon: "success",
                            });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                swal("Your Chapter is safe!", {
                    icon: "success",
                });
            }
        });
    }

    useEffect(() => {
        axios.get("http://localhost:1337/chapters/showAllChapters")
            .then(function (response) {
                const filteredChapters = response.data.filter(chapter => chapter.depID !== null && chapter.depID._id === userdepartment);
                setChapter(filteredChapters);
            });
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <div className="alert mt-3 heading"><h5>Chapters</h5></div>
                <div className="row ">
                    <div className="col-md-12">
                        <Link
                            to="/newdepchap"
                            className="btn btn-outline-success form-control"
                        >
                            + Add New Chapter
                        </Link>
                        <hr className="mt-3"></hr>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Chapter name</th>
                            <th scope="col">Edit chapter</th>
                            <th scope="col">Delete chapter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chapters.map((item) => {
                            if (item.status === "notactive") {
                                return null; // If the status is notactive, don't render the row
                            }
                            return (
                                <tr className="align-middle" key={item._id}>
                                    <th scope="row">{item._id}</th>

                                    <td>{item.chapterName}</td>

                                    <td>
                                        <Link
                                            to={"/editchap/" + item._id + "/" + item.chapterName}
                                            className="btn btn-outline-primary form-control"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="submit" onClick={() => deleteChapter(item._id)}
                                            className="btn btn-outline-danger form-control"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
export default DepartmentChapter;
