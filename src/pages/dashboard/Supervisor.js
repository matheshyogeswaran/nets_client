import { Link } from "react-router-dom";

const Supervisor = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-4 m-2">
                    <Link to="/manageFinalProjectAssignment" className="btn btn-outline-primary form-control shadow">Manage Final Project Assignment</Link>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">Direct Guidance request</button>
                    <Link to="/leaderboardsup" className="btn btn-outline-primary form-control mt-2 shadow">Show Leader Board</Link>
                    <Link to="/viewchapter" className="btn btn-outline-primary form-control mt-2 shadow">View All Chapters</Link>
                    <Link to="/manageFinalProjectAssignment" className="btn btn-outline-primary form-control mt-2 shadow">Manage Final Project Assignment</Link>
                    <Link to="/enrollrequestsupervisor" className="btn btn-outline-primary form-control mt-2 shadow">Accept Additional Chapter Request</Link>
                </div>
                <div className="col-md-4 m-2">
                    <div className="border border-dark rounded shadow">
                        <div className="p-3">
                            <div className="text-center"><b>View Employee Reports</b></div><hr></hr>
                            <Link to="/report" className="btn btn-outline-success form-control mt-1 shadow">View Employee Report</Link>
                            <Link to="/quizreportfront"className="btn btn-outline-success form-control mt-2 shadow">Quiz Report of Hired Employees</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="mt-5">
                <div className="card rounded-1 shadow">
                    <div className="card-header text-white bg-dark">
                        <h6>Department Chapters</h6>
                    </div>
                    <div className="card-body">
                        {/* <ListAllChapters></ListAllChapters> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Supervisor;
