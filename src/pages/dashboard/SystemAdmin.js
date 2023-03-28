import { Link } from "react-router-dom";

const SystemAdmin = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 m-2">
                    <button className="btn btn-outline-primary form-control shadow">Manage Chapters</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">View Chapters</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">Assign Default Chapters</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">Show Users</button>
                    <Link to="/pendingrequests" className="btn btn-outline-primary form-control mt-2 shadow">Verify Users</Link>
                </div>
                <div className="col-md-4 m-2">
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
                            <tr>
                                <th scope="row">Total Count</th>
                                <td colspan="2">
                                    <span class="badge shadow text-bg-primary">21</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
        </div>
    );
}
export default SystemAdmin;