import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
const FurtherDetails = (props) => {
    console.log("Hello" + JSON.stringify(props.loginData))
    const navigate = useNavigate();
    // console.log("object")
    const [firstName] = useState(props.userData.given_name);
    const [lastName] = useState(props.userData.family_name);
    const [gender, setGender] = useState("NA");
    const [dob, setDob] = useState();
    const [phone, setPhone] = useState();
    const [email] = useState(props.userData.email);
    const [department, setDepartment] = useState();
    const [jobTitle, setJobTitle] = useState();

    const [availableDepartments, setAvailableDepartments] = useState([]);
    const [availableJobTitles, setAvailableJobTitles] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:1337/departments/showAllDepartments")
            .then(function (response) {
                setAvailableDepartments(response.data);
            });
        axios
            .get("http://localhost:1337/jobtitles/showAllJobtitles")
            .then(function (response) {
                setAvailableJobTitles(response.data);
            });
    }, [])
    const submitFurtherDetails = (e) => {
        e.preventDefault();
        const postData = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dob: dob,
            phone: phone,
            email: email,
            department: department,
            jobTitle: jobTitle
        }
        axios.post('http://localhost:1337/authentication/addFurtherDetails', postData)
            .then((res) => {
                if (res.data.status === "success") {
                    swal("Good job!", res.data.message, "success")
                    swal({
                        title: "Success ! Please Login to NETS",
                        text: res.data.message,
                        icon: "success",
                        buttons: true,
                        dangerMode: false,
                    })
                        .then((willDelete) => {
                            window.location.reload();
                        });
                    // localStorage.setItem("user", JSON.stringify(props.loginData?.user));
                    // navigate("/")
                    // window.location.reload();
                } else if (res.data.status === "duplicate") {
                    swal("Warning", res.data.message, "warning")
                }
            }).catch((error) => {
                swal("Error", "Error saving data to the database", "error");
            });

    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="card shadow shadow-lg" >
                    <div className="card-header bg-dark ">
                        <center>
                            <img draggable={false} referrerPolicy="no-referrer" alt="userImage" src={props.userData.picture} className=" p-3 rounded-circle"></img>
                        </center>
                    </div>
                    <form onSubmit={submitFurtherDetails}>
                        <div className="card-body mt-3">
                            <div className="row m-2">
                                {/* First Name */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                            disabled
                                            className="form-control"
                                            placeholder="First Name"
                                            value={firstName}
                                            required
                                            id="fname"
                                        >
                                        </input>
                                        <label htmlFor="fname">First Name</label>
                                    </div>
                                </div>
                                {/* Last Name */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input required type="text"
                                            disabled
                                            className="form-control"
                                            placeholder="Last Name"
                                            value={lastName}
                                            id="lastname"
                                        >
                                        </input>
                                        <label htmlFor="lastname">Last Name</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row m-2">
                                {/* Gender */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select id="gender" className="form-control" onChange={e => setGender(e.target.value)}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="N/A">Prefer not to say</option>
                                        </select>
                                        <label htmlFor="gender">Select your gender</label>
                                    </div>
                                </div>
                                {/* Date of Birth */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input required type="text"
                                            className="form-control"
                                            placeholder="Date of Birth"
                                            onFocus={(e) => e.target.type = 'date'}
                                            value={dob}
                                            id="dob"
                                            onChange={e => setDob(e.target.value)}
                                        >
                                        </input>
                                        <label htmlFor="dob">Select your Date of Birth</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row m-2">
                                {/* Phone Number */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input required type="text"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            value={phone}
                                            id="phone"
                                            onChange={e => setPhone(e.target.value)}>
                                        </input>
                                        <label htmlFor="phone">Phone Number</label>
                                    </div>

                                </div>
                                {/* Email Address */}
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input required type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            value={email}
                                            id="email"
                                            disabled
                                        // onChange={e => setEmail(e.target.value)}
                                        >
                                        </input>
                                        <label htmlFor="email">Email Address</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select id="dep" required className="form-control" onChange={e => setDepartment(e.target.value)}>
                                            <option selected value="" disabled>Select Department</option>
                                            {
                                                availableDepartments.map((e) => {
                                                    return (
                                                        <option value={e._id}>{e.depName}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <label htmlFor="dep">Select your department</label>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select id="jt" required className="form-control" onChange={e => setJobTitle(e.target.value)}>
                                            <option selected value="" disabled>Select Job Title</option>
                                            {
                                                availableJobTitles.map((e) => {
                                                    return (
                                                        <option value={e._id}>{e.jobTitlename}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <label htmlFor="jt">Select your job title</label>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="m-2 btn btn-outline-success form-control" type="submit" value="Submit Details"></input>
                                </div>
                                <div className="col-md-6">
                                    <input className="m-2 btn btn-outline-warning form-control" type="reset" value="Reset"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br></br>
        </React.Fragment>
    );
}
export default FurtherDetails;