import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import Swal from 'sweetalert2'
const FurtherDetails = (props) => {
    // states to store form data
    const [firstName, setFirstName] = useState(props.userData.given_name);
    const [lastName, setLastName] = useState(props.userData.family_name);
    const [gender, setGender] = useState();
    const [dob, setDob] = useState();
    const [phone, setPhone] = useState();
    const [email] = useState(props.userData.email);
    const [department, setDepartment] = useState();
    const [jobTitle, setJobTitle] = useState();
    const [userImage] = useState(props.userData.picture);
    const [employeeID, setEmployeeID] = useState();
    // To store department data, it contains, department data and job titles data
    const [availableDepartments, setAvailableDepartments] = useState([]);
    // State to store, whether department is available or not
    // if department is available it will be set to true
    const [isDepAvailable, setIsDepAvailable] = useState(false);
    // if user collection is empty true else false will be assigned
    const [noUser, setNoUser] = useState(false);
    // to set calender's maximum and minimum date 
    const currentYear = new Date().getFullYear();
    const maxDate = `${currentYear - 15}-12-31`; // Set maximum date to last day of current year
    const minDate = `${currentYear - 80}-01-01`; // Set minimum date to first day of previous year
    // here use effect to used to fetch department and user availability data in first render
    useEffect(() => {
        axios
            .get("http://localhost:1337/departments/showAllDepartments")
            .then(function (response) {
                setAvailableDepartments(response.data);
                if (response.data.length === 0) {
                    setIsDepAvailable(false);
                } else {
                    setIsDepAvailable(true);
                }
            });
        axios
            .get("http://localhost:1337/users/isUserCollectionEmpty")
            .then(function (response) {
                setNoUser(response.data.status);
            });
    }, [])
    // function to hande form submission
    const submitFurtherDetails = (e) => {
        // to handle page reloading after submission
        e.preventDefault();
        const postData = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            dob: dob,
            phone: phone,
            email: email,
            department: department,
            jobTitle: jobTitle,
            userImage: userImage,
            employeeID: employeeID
        }
        axios.post('http://localhost:1337/authentication/addFurtherDetails', postData)
            .then((res) => {
                // if further data saved successfully
                if (res.data.status === "success") {
                    Swal.fire({
                        title: 'Further Details Added Successfully !',
                        text: "You will be notified via email soon after verification process is complete, See You Soon !",
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Continue'
                    }).then((result) => {
                        window.location.reload();
                    })
                    // if user trying to or, accidently access the page after submit the further details
                    // to prevent duplicate entry in database, email is set to unique in database schema
                } else if (res.data.status === "duplicate") {
                    swal("Warning", res.data.message, "warning")
                }
            }).catch((error) => {
                swal("Error", "Error saving data to the database", "error");
            });

    }
    return (
        <React.Fragment>
            {
                // ((availableDepartments.length === 0 && availableJobTitles.length === 0) && !(noUser))
                ((isDepAvailable === false) && (noUser === false))
                    ?
                    // if super admin, signed in and didnt create the department and job title, this will be displayed
                    <div className="container mt-5">
                        <div className="alert alert-danger"><b>Sorry, Setup in Progress. Try again Later !</b></div>
                    </div>
                    :
                    <div className="container mt-3">

                        {
                            // (availableDepartments.length === 0 && availableJobTitles.length === 0) &&
                            // (availableDepartments.length === 0) &&
                            // it is the state of " is user collection empty" end point
                            // if empty, true else false
                            // if variable is true, this attention alert will be shown
                            (noUser) &&
                            <div className="alert alert-warning">
                                <b><i className="bi bi-info-circle-fill"></i> Attention:</b> You are the very first user of
                                this application, which means
                                <b> you have been automatically assigned the role of Super Admin</b>. Any updates
                                you make to your personal details will affect your account accordingly.
                                Please proceed with caution !
                            </div>
                        }
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
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={firstName}
                                                    onChange={e => setFirstName(e.target.value)}
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
                                                <input
                                                    required
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={lastName}
                                                    onChange={e => setLastName(e.target.value)}
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
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="First Name"
                                                            value={employeeID}
                                                            onChange={e => setEmployeeID(e.target.value)}
                                                            required
                                                            id="employeeid"
                                                        >
                                                        </input>
                                                        <label htmlFor="fname">Employee ID</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <select id="gender" required className="form-control" onChange={e => setGender(e.target.value)}>
                                                            <option selected value="" disabled>Select Gender</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="N/A">Prefer not to say</option>
                                                        </select>
                                                        <label htmlFor="gender">Select your gender</label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* Date of Birth */}
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    required
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Date of Birth"
                                                    max={maxDate}
                                                    min={minDate}
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
                                                <input
                                                    required
                                                    type="text"
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
                                                <input
                                                    required
                                                    type="email"
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
                                    {
                                        (availableDepartments.length !== 0)
                                        &&
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
                                            {

                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3">
                                                        <select id="jt" required className="form-control" onChange={e => setJobTitle(e.target.value)}>
                                                            <option selected value="" disabled>Select Job Title</option>
                                                            {
                                                                availableDepartments.find(jobTitle => jobTitle._id === department)?.Jobtitle.map((e) => {
                                                                    return (
                                                                        <option value={e?._id}>{e.jobTitlename}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                        <label htmlFor="jt">Select your job title</label>
                                                    </div>

                                                </div>
                                            }
                                        </div>
                                    }

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
            }
            <br></br>
        </React.Fragment>
    );
}
export default FurtherDetails;