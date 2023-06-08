import { Link } from "react-router-dom";

const Supervisor = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-4 m-2">
                    <Link to="/manageFinalProjectAssignment" className="btn btn-outline-primary form-control shadow">Manage Final Project Assignment</Link>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">Direct Guidance request</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">Show Leader Board</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">View Department Chapters</button>
                    <Link to="/manageFinalProjectAssignment" className="btn btn-outline-primary form-control mt-2 shadow">Manage Final Project Assignment</Link>
                </div>
                <div className="col-md-4 m-2">
                    <div className="border border-dark rounded shadow">
                        <div className="p-3">
                            <div className="text-center"><b>View Employee Reports</b></div><hr></hr>
                            <button className="btn btn-outline-success form-control mt-1 shadow">Hired Employee</button>
                            <button className="btn btn-outline-success form-control mt-2 shadow">Content Creator</button>
                            <button className="btn btn-outline-success form-control mt-2 shadow">Quiz Report of Hired Employees</button>
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
