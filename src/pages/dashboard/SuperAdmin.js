import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SuperAdmin = () => {
    const [depIsEmpty, setDepIsEmpty] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:1337/general/depisempty")
            .then(function (response) {
                setDepIsEmpty(response.data.status)
            });
    }, [])
    return (
        <>
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
            
            <div className="row">
                <div className="col-md-4">
                    <table class="shadow text-center table border rounded align-items-center">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th scope="col">User Role</th>
                                <th scope="col">User Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Super Admin</th>
                                <td colspan="2">
                                    <span class="badge shadow text-bg-primary">1</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">System Admin</th>
                                <td colspan="2">
                                    <span class="badge shadow text-bg-primary">23</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Supervisor</th>
                                <td colspan="2">
                                    <span class="badge shadow text-bg-primary">43</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Content Creator</th>
                                <td colspan="2">
                                    <span class="badge shadow text-bg-primary">45</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Hired Employees</th>
                                <td colspan="2">
                                    <span class="badge shadow text-bg-primary">21</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/department" className="btn btn-outline-success form-control shadow">
                                Manage Departments
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="/jobtitle" className="btn btn-outline-success form-control shadow">
                                Manage Job Title
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <Link to="/chapter" className="btn btn-outline-success form-control shadow">
                                Manage Chapters
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link to="/promoteDemoteUser" className="btn btn-outline-warning form-control shadow">
                                Promote or Demote Employees
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <button className="btn btn-outline-primary form-control shadow">
                                Show Users
                            </button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-outline-primary form-control shadow">
                                View Chapters
                            </button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <button className="btn btn-outline-danger form-control shadow">
                                Show User Violations
                            </button>
                        </div>
                        {/* <div className="col-md-6">
                            <button className="btn btn-outline-primary form-control shadow">
                                View Chapters
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="card rounded-1 shadow">
                    <div className="card-header text-center text-white bg-dark">
                        <h5>Common Chapters</h5>
                    </div>
                    <div className="card-body">
                        {/* <ListAllChapters></ListAllChapters> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default SuperAdmin;