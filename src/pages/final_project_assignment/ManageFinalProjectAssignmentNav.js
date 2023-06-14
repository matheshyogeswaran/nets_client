import { Link } from "react-router-dom";
import image4 from "../../images/manageFinalProject/viewFinalProjectAssignment.svg";
import image1 from "../../images/manageFinalProject/editFinalProjectAssignment.svg";
import image2 from "../../images/manageFinalProject/overDue.svg";
import image3 from "../../images/manageFinalProject/submissions.svg";
import image5 from "../../images/manageFinalProject/viewProjectScore.svg";
const ManageFinalProjectAssignmentNav = () => {
    return (
        <div className="row">
            <div className="col-md-4 mb-3">
                <div className="card shadow" >
                    <Link to="/finalProjectAssignmentRequests" className="btn btn-outline-dark">
                        <center>
                            <img src={image4} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
                        </center>
                        <div className="card-body">
                            <h6>View Final Project Assignment Requests</h6>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card shadow">
                    <Link to="/editAssignedProjectAssignment" className="btn btn-outline-dark">
                        <center>
                            <img src={image1} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
                        </center>
                        <div className="card-body">
                            <h6>Edit Final Project Assignment</h6>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-md-4 mb-3">
                <div className="card shadow">
                    <Link to="/overduedAssignments" className="btn btn-outline-dark">
                        <center>
                            <img src={image2} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
                        </center>
                        <div className="card-body">
                            <h6>Overdued Final Project Assignments</h6>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default ManageFinalProjectAssignmentNav;