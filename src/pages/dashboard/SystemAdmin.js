import { Link } from "react-router-dom";

const SystemAdmin = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 m-2">
                    <Link to="/depchapter" className="btn btn-outline-primary form-control shadow">Manage Chapters</Link>
                    <Link to="/viewchapter" className="btn btn-outline-primary form-control mt-2 shadow">View Chapters</Link>
                    <Link to="/allocatechapter" className="btn btn-outline-primary form-control mt-2 shadow">Assign Default Chapters</Link>
                    <Link to="/pendingrequests" className="btn btn-outline-primary form-control mt-2 shadow">Verify Users</Link>
                    <Link to="/scoreEditLog" className="btn btn-outline-primary form-control mt-2 shadow">View Assignment Score Edit Log</Link>
                </div>
            </div>
        </div>
    );
}
export default SystemAdmin;