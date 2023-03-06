import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Nav.css"
import swal from 'sweetalert';
import RenderIfLoggedIn from "../utils/RenderIfLoggedIn";

const NavBar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    };

    // Un comment this if you want to logout the app from all tabs and windows
    window.addEventListener("storage", (event) => {
        if (event.key === "user" && event.newValue === null) {
            logout();
            swal("Logged Out!", "Sorry, NETS App is Logged out in another Tab or Window", "warning");
        }
    });

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            <li className="nav-item rounded">
                                <Link className="nav-link active" aria-current="page" to="/home"><i className="bi bi-house-fill me-2"></i>Home</Link>
                            </li>
                            {/* <li className="nav-item rounded">
                                <Link className="nav-link active" to="#"><i className="bi bi-people-fill me-2"></i>About</Link>
                            </li> */}
                            <li className="nav-item rounded">
                                <a className="nav-link active" href="tel:0772116778"><i className="bi bi-telephone-fill me-2"></i>Contact</a>
                            </li>
                            <RenderIfLoggedIn>
                                <li className="nav-item dropdown rounded">
                                    <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="me-2">
                                            <img className="rounded-circle" referrerPolicy="no-referrer" width={30} height={30} src={JSON.parse(localStorage.getItem("user"))?.picture} alt="userProfile"></img>
                                        </i>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end  " aria-labelledby="navbarDropdown">
                                        <li>
                                            <button className="disabled dropdown-item " onClick={logout}>
                                                <i class="bi bi-person-check me-2"></i>
                                                <i>Logged in as: </i>
                                                <b>
                                                    {JSON.parse(localStorage.getItem("user"))?.userRole}
                                                </b>
                                            </button>
                                        </li>
                                        <li>
                                            <hr className=" dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link className=" dropdown-item" to="#">
                                                <i className="bi bi-person-lines-fill me-2"></i>
                                                Account
                                            </Link>
                                        </li>
                                        {/* <li><Link className="dropdown-item" to="#">Another action</Link></li> */}
                                        <li>
                                            <hr className=" dropdown-divider" />
                                        </li>
                                        <li>
                                            <button className="dropdown-item " onClick={logout}>
                                                <i className="bi bi-box-arrow-right me-2"></i> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            </RenderIfLoggedIn>

                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;