
import React, { useState, useEffect } from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import validator from "validator";
import jwt_decode from "jwt-decode";
import axios from "axios";

const DepartmentAddChapter = () => {
    const deptID = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData.department;
    const [chaptername, setChapterName] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState();
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:1337/departments/showAllDepartments")
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const selectedDepartmentName = departments.find(department => department._id === deptID)?.depName;
    // console.log(selectedDepartmentName);

    function submitChapter(e) {
        e.preventDefault();

        // Validate chapter name
        if (!validator.isAlpha(chaptername.replace(/[^A-Za-z]/g, ""))) {  //must contain atleast 1 alphabet
            swal({
                icon: "warning",
                text: "Chapter name must contain at least one alphabet letter.",
            });
            return;
        }

        axios
            .post("http://localhost:1337/chapters/addChapter", {
                chapterName: chaptername,
                depID: selectedDepartment,
                userID: jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData._id
            })
            .then((res) => {
                if (res.data.status === true) {
                    swal({
                        icon: "success",
                        text: res.data.message,
                    });
                    setChapterName("");
                } else {
                    swal({
                        icon: "warning",
                        text: res.data.message,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <div className="alert mt-3 heading"><h5>Create Chapter for your department</h5></div>
            <div className="columns mt-4">
                <form name="myForm" onSubmit={submitChapter}>
                    <div className="field">
                        <label className="ml-5">Chapter Name</label>
                        <div className="control">
                            <input
                                type="text"
                                name="cname"
                                className="input my-3 ml-5"
                                placeholder="Name"
                                value={chaptername}
                                onChange={(e) => setChapterName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <label className="ml-5 createchap">Suitable Department</label>
                    <br></br>
                    <div className="col-md-2">
                        <select style={{ "backgroundColor": "MintCream" }}
                            onChange={(e) => {
                                setSelectedDepartment(e.target.value);
                            }}
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option disabled selected>Department</option>
                            {
                                <option value={deptID}>
                                    {selectedDepartmentName}
                                </option>
                            }
                        </select>
                    </div>
                    <br></br>
                    <div className="control">
                        <button
                            type="submit"
                            className="btn btn-success mr-1 column is-half text-white"
                        >
                            Save
                        </button>
                    </div>
                    <div>
                        <img src={image4} className="picside" draggable={false} alt="this is image" />
                    </div>
                    <div className="field"></div>
                </form>
            </div>
        </div>
    );
};

export default DepartmentAddChapter;
