import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2"
import axios from "axios"
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
const AssignFinalAssignment = () => {
    const { id } = useParams();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [deadline, setDeadline] = useState();
    const [files, setFiles] = useState([]);
    const [showUploadFileInput, setShowUploadFileInput] = useState(false);
    const handleShowUpload = () => {
        if (showUploadFileInput === false) {
            setShowUploadFileInput(true);
        } else {
            setShowUploadFileInput(false);
        }
    }
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

    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const userData = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData._id
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("finalprojectassignmentid", id);
        formData.append("description", description);
        formData.append("deadline", deadline);
        if (showUploadFileInput) {
            formData.append("ufile", files[0])
        }
        formData.append("supervisor", userData)
        try {
            axios.post("http://localhost:1337/addFinalAssignment", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percentCompleted)
                }
            }).then(res => {
                if (res.data.status === true) {
                    Swal.fire("", "Assignment Submitted Successfully", "success");
                } else {
                    Swal.fire("Error", res.data.message, "error");
                }
                setLoading(false);

            }).catch(err => {
                console.log(err)
            })
        } catch (err) {
            setLoading(false);
            console.log(err);
        }

    }
    const date = new Date();
    // "2023-04-18T00:00"
    const minDate = `${date.getFullYear().toString().padStart(4,"0")}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")}T${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}`
    // const minDate = `${date.getFullYear().toString().padStart(4,"0")}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")}T11:10`
    const maxDate = `${date.getFullYear().toString().padStart(4,"0")}-${(date.getMonth()+1+6).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")}T${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}`
    console.log(minDate)
    console.log(maxDate)
    return (
        <React.Fragment>
            <div className="mt-4 container">
                <div className="bg-dark text-white p-3 rounded">
                    <b>Assign Final Project Assignment</b>
                </div>
                <form className="mt-4" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                    <div className="form-floating mb-3">
                        <input

                            type="text"
                            className="form-control"
                            placeholder="Final Project Assignment Title"
                            id="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                        <label htmlFor="title">Final Project Assignment Title</label>
                    </div>

                    <ReactQuill
                        className="form-floating mb-3"
                        theme="snow"
                        value={description}
                        onChange={setDescription}
                        modules={modules}
                        placeholder="Enter Final Project Assignment Description"
                    />
                    <div className="form-floating mb-3">
                        <input

                            type="text"
                            className="form-control"
                            placeholder="Deadline"
                            onFocus={(e) => (e.target.type = "datetime-local")}
                            min={minDate}
                            max={maxDate}
                            onChange={(e) => { setDeadline(e.target.value) }}
                            id="dl"></input>
                        <label htmlFor="dl">Select Deadline</label>
                    </div>

                    <div className="form-control mb-3">
                        <input
                            type="checkbox"
                            className="me-3"
                            onChange={handleShowUpload}
                            id="dx"
                        ></input>
                        <label htmlFor="dx">
                            <strong>Check this if you want to update the uploaded file also.</strong>
                        </label>
                        {
                            showUploadFileInput &&
                            <div className="mb-3 mt-3">
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
                        }
                    </div>

                    {/* <div className="mb-3">
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
                    </div> */}
                    <div className="row">
                        <div className="col-md-6">
                            {
                                (loading === true)
                                    ?
                                    <button
                                        type="button"
                                        className="disabled form-control btn btn-outline-info">
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Uploading File {progress} %
                                    </button>
                                    :
                                    <button
                                        type="submit"
                                        className="form-control btn btn-outline-primary">
                                        Submit
                                    </button>
                            }
                        </div>
                        <div className="col-md-6">
                            <button
                                type="reset"
                                className="form-control btn btn-outline-warning">
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};
export default AssignFinalAssignment;
