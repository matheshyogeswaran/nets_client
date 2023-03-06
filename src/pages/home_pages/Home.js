import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
const Home = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Function</th>
              <th>Available To</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="department">Department</Link>
              </td>
              <td>Super Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="jobtitle">Jobtitle</Link>
              </td>
              <td>Super Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="chapter">Chapter</Link>
              </td>
              <td>System Admin,Super Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="viewchapter">View Chapters</Link>
              </td>
              <td>System Admin,Super Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="allocatechapter">Allocate Chapters</Link>
              </td>
              <td>System Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="editallocatechapter">Edit Allocate Chapters</Link>
              </td>
              <td>System Admin</td>
            </tr>

            <tr>
              <td>
                <Link to="permanentdeletechapter">
                  Permanent Delete Chapter
                </Link>
              </td>
              <td>SuperAdmin</td>
            </tr>
            <tr>
              <td>
                <Link to="profile">Profile overview</Link>
              </td>
              <td>
                Hired employee,Supervisor,Content creator,System Admin,Super
                Admin
              </td>
            </tr>
            <tr>
              <td>
                <Link to="enrollrequestsupervisor">
                  Enroll request-Supervisor
                </Link>
              </td>
              <td>Supervisor</td>
            </tr>
            <tr>
              <td>
                <Link to="enrollrequestemployee">Enroll request-Employee</Link>
              </td>
              <td>Hired Employee</td>
            </tr>
            <tr>
              <td>
                <Link to="/login">
                  Login
                </Link>
              </td>
              <td>All Users</td>
            </tr>

            <tr>
              <td>
                <Link to="/availableuserroles">
                  Manage User Roles
                </Link>
              </td>
              <td>Super Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="/promoteDemoteUser">
                  Promote or Demote the User
                </Link>
              </td>
              <td>Super Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="/pendingrequests">
                  Pending Login Approvals
                </Link>
              </td>
              <td>System Admin</td>
            </tr>
            <tr>
              <td>
                <Link to="/hiredemployee">
                  Hired Employee Dashboard
                </Link>
              </td>
              <td>Hired Employee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default Home;
