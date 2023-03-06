import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
const FurtherDetails = (props) => {
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
                    localStorage.setItem("user", JSON.stringify(props.loginData?.user));
                    navigate("/home")
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
                            <img draggable={false} alt="userImage" src={props.userData.picture} className=" p-3 rounded-circle"></img>
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
                                        <label for="fname">First Name</label>
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
                                        <label for="lastname">Last Name</label>
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
                                        <label for="gender">Select your gender</label>
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
                                        <label for="dob">Select your Date of Birth</label>
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
                                        <label for="phone">Phone Number</label>
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
                                        <label for="email">Email Address</label>
                                    </div>

                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select id="dep" required className="form-control" onChange={e => setDepartment(e.target.value)}>
                                            <option selected value="" disabled>Select Department</option>
                                            <option value="IT">IT</option>
                                            <option value="HR">HR</option>
                                            <option value="ABC">Abc</option>
                                            <option value="XYZ">Xyz</option>
                                        </select>
                                        <label for="dep">Select your department</label>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select id="jt" required className="form-control" onChange={e => setJobTitle(e.target.value)}>
                                            <option selected value="" disabled>Select Job Title</option>
                                            <option value="Intern SE">Intern Software Engineer</option>
                                            <option value="Assistant Manager">Assistant Manager</option>
                                            <option value="Job Abc">Abc</option>
                                            <option value="Job Xyz">Xyz</option>
                                        </select>
                                        <label for="jt">Select your job title</label>
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