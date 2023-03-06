/* global google */

// I think the google variable is already available when you 
// import google map from script in html. This error caused by Eslint, 
// you can try and add the below line to the top of your file to disable ESlint

import React, { useEffect, useState } from "react";
import axios from "axios";
import FurtherDetails from "./FurtherDetails";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import image1 from "../../images/employee.png"
import image2 from "../../images/employeegroup.webp"

const GoogleLogin = () => {
    // purpose of this code is to navigate user to entered required URL before login
    // After successful login, the user will be redirected to the required page
    // if they entered the login URL directly, user will be redirected to home page
    // it is not implemented to signup yet
    const location = useLocation();
    const redirectPath = location.state?.path || "/home"
    
    const navigate = useNavigate();
    
    //state to store login response data from backend
    //should be saved in local storage
    const [loginData, setLoginData] = useState();
    //if user is available in database then set this state to true else false
    const [isUserAvailable, setIsUserAvailable] = useState(true);
    //state to store decoded values of google login response
    const [googleLoginDecodedValues, setGoogleLoginDecodedValues] = useState();
    //function to handle google login response
    const handleGoogle = async (response) => {
        setGoogleLoginDecodedValues(jwt_decode(response.credential));
        fetch("http://localhost:1337/authentication/login", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ credential: response.credential }),
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setLoginData(data);
        }).catch((error) => {
            console.log(error)
            // console.log(error?.message);
        });
    };

    //if loginData is not null then check if user is available in database
    //if user is available in database then set isUserAvailable to true else false
    //if user is not available in database, AddFurtherDetails component will be rendered
    useEffect(() => {
        if (loginData) {
            // console.log(loginData);
            axios.post('http://localhost:1337/users/isUserAvailable', { email: loginData?.user?.email })
                .then((res) => {
                    console.log("User Availability: " + res.data.status)
                    if (res.data.status === true) {
                        localStorage.setItem("user", JSON.stringify(loginData?.user));
                        navigate(redirectPath, { replace: true });
                    } else {
                        setIsUserAvailable(res.data.status);
                        document.getElementById("infoSection").hidden = true;
                    }
                    // console.log(res.data)
                }).catch((error) => {
                    console.log(error)
                });
        }
    }, [loginData, navigate, redirectPath])

    //render google login button
    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "707797281139-4aqd3htq7bnut6nsp76ufc448svl64r9.apps.googleusercontent.com",
            callback: handleGoogle,
        });
        google.accounts.id.renderButton(document.getElementById("loginDiv"), {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "continue_with",
            shape: "square",
        });
        google.accounts.id.prompt();
    }, []);

    return (
        <React.Fragment>
            <div id="infoSection" style={{"userSelect":"none"}}>
                <div className="px-4 py-5 my-5 text-center" >
                    <img className="d-block mx-auto mb-4" draggable={false} src={image1} alt="hello world" width="200" height="200" />
                    <h6 className="display-6 fw-bold">New Employee Training System</h6>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4"  >
                            New Employee Training System (NETS) is designed to provide knowledge
                            about working environment, procedures, what exactly newly hired employees
                            need to do in their particular job position in an efficient and interesting
                            manner by organizing all essential learning materials in one central location.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            {
                                (isUserAvailable === false) ? null : <div id="loginDiv"></div>
                            }
                        </div>
                    </div>
                </div>

                <div className="b-example-divider"></div>

                <div className="container my-5">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-6 fw-bold lh-1">About NETS...</h1>
                            <p className="lead">
                                Introducing our all-in-one website dedicated to managing your learning materials,
                                from KT sessions to articles and quizzes. Our platform is designed to help
                                you stay on top of your educational needs and connect with like-minded
                                individuals through our discussion forums. We understand that even the
                                best learning materials can leave you with questions or doubts, which
                                is why we have a guidance request ticket system in place for personalized
                                support and guidance from our expert team.
                            </p>
                            <div className="b-example-divider"></div>
                            <p className="lead">
                                Join our community today and let's embark on a journey of lifelong learning together!
                            </p>
                        </div>
                        <div className="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" draggable={false} src={image2} alt="" width="720" />
                        </div>
                    </div>
                </div>
            </div>

            {
                (isUserAvailable === false) ? <FurtherDetails loginData={loginData} userData={googleLoginDecodedValues} /> : null
            }


        </React.Fragment>
    );
};

export default GoogleLogin;
