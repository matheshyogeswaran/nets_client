import { Link } from "react-router-dom";

const ManageFinalProjectAssignmentNav = () => {
    return (
        <>
            <div className="row mb-3">
                <div className="col-md-4">
                    <Link to="/finalProjectAssignmentRequests" className="btn btn-light border-dark border form-control">
                        View Final Project Assignment Requests
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/editAssignedProjectAssignment" className="btn btn-light border-dark border form-control">
                        Edit Final Project Assignment
                    </Link>
                </div>
                <div className="col-md-4">
                    <Link to="/overduedAssignments" className="btn btn-light border-dark border form-control">
                        Overdued Final Project Assignments
                    </Link>
                </div>
            </div>
        </>
    );
}
export default ManageFinalProjectAssignmentNav;