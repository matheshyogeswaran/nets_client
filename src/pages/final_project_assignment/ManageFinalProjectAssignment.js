import { Link } from "react-router-dom";

const ManageFinalProjectAssignment = () => {
    return (
        <div className="mt-3 container">
            <Link to="/finalProjectAssignmentRequests" className="btn btn-light border-dark border form-control">
                View Final Project Assignment Requests
            </Link>
            <Link to="/editAssignedProjectAssignment" className="mt-3 btn btn-light border-dark border form-control">
                Edit Final Peroject Assignment
            </Link>
            <Link to="/overduedAssignments" className="mt-3 btn btn-light border-dark border form-control">
                Overdued Final Project Assignments
            </Link>
            <Link to="/submission" className="mt-3 btn btn-light border-dark border form-control">
                Submissions of Employees
            </Link>
            <Link to="/projectScore" className="mt-3 btn btn-light border-dark border form-control">
                View Project Score
            </Link>
        </div>
    );
}
export default ManageFinalProjectAssignment