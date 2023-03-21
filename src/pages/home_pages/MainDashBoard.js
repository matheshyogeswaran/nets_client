import NavBar from "../../components/NavBar"
import jwt_decode from "jwt-decode";
import HomePageButtons from "../../data/renderHomePage.json";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import RenderIfUserHasPermission from "../../utils/RenderIfUserHasPermission";
// import { AppContext } from "../../routes/AppRoutes";
const MainDashBoard = () => {
    // const { userData } = useContext(AppContext);
    const navigate = useNavigate();
    const [depIsEmpty, setDepIsEmpty] = useState(false);
    const userData = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData;
    console.log(userData)
    useEffect(() => {
        axios.get("http://localhost:1337/general/depisempty")
            .then(function (response) {
                setDepIsEmpty(response.data.status)
            });
    }, [])
    const initRoles = () => {
        const reqUrl = "http://localhost:1337/userRoles/initRoles/" + userData._id
        axios.get(reqUrl)
            .then((res) => {
                if (res.data.status === true) {
                    swal({
                        title: "Success !",
                        text: res.data.message,
                        icon: "success",
                        buttons: true,
                        dangerMode: false,
                    })
                        .then((willDelete) => {
                            localStorage.removeItem("user");
                            navigate("/login", { replace: true });
                        });
                } else if (res.data.status === false) {
                    swal("Warning", res.data.message, "warning")
                }
            }).catch((err) => {
                swal("Warning", "Network Error", "warning")
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mt-4">
                <div className="alert alert-success">
                    <h5>{"Hello " + userData?.firstName + " !"}</h5>
                </div>
                {
                    (!userData?.userRoleId) && <div className="alert alert-danger">
                        <b className="me-2">
                            <i className="bi bi-info-circle-fill me-2"></i>
                            Please Initialize Basic User Roles Here, Until that Application will not be available for users.
                        </b>
                        <button onClick={initRoles} className="btn btn-danger btn-sm">Initialize</button>
                    </div>
                }
                {
                    depIsEmpty && <div className="alert alert-danger mt-12">
                        <b className="me-2">
                            <i className="bi bi-info-circle-fill me-2"></i>
                            Please Create Departments and Job Titles, Until that Application will not be available for users.
                        </b>
                        <Link to={"/department"} className="btn btn-danger btn-sm me-2">Create Department</Link>
                        <Link to={"/jobtitle"} className="btn btn-danger btn-sm me-2">Create JobTitle</Link>
                    </div>
                }
                <hr></hr>
                <h5>Available Features</h5>
                <hr></hr>
                <div className="row">
                    {
                        HomePageButtons.map((button) => {
                            return (
                                <RenderIfUserHasPermission permissionID={button.permissionID}  key={button.permissionID}>
                                    <Link to={button.buttonLink} className="col-md-3 m-1">
                                        <button disabled={button.buttonLink === ""} class="form-control form-control-lg btn btn-outline-dark">{button.buttonText}</button>
                                    </Link>
                                </RenderIfUserHasPermission>
                            )
                        })
                    }
                </div>
                <br></br><br></br>
            </div>
        </div>
    )
}
export default MainDashBoard