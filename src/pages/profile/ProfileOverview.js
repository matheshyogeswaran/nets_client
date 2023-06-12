import "../../App.css";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function ProfileOverview(props) {
  const userID = jwt_decode(JSON.parse(localStorage.getItem("user")).token).userData._id;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/users/getLoggedinUserData/${userID}`)
      .then(response => {
        console.log(response.data);
        setData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userID])
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="card ">
          <div className="alert mt-3 heading">
            <h3 className="text-center">
              Profile overview
            </h3>
          </div>
        </div>
        <div className="col-md-8">
          <div
            className="card mt-5 crud shadow-lg p-3 mb-5 mt-5 bg-body rounded "
          >
            <div className="col d-flex justify-content-center mt-3">
              <img
                src={data.image}
                className="rounded-circle"
                alt="Cinque Terre"
                style={{ height: "120px", width: "120px" }}
              />
            </div>
            <div className="card-body">
              <form>
                <div className="row justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputFirst name">Name</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data.fname}
                      disabled={true}
                    />
                  </div>
                </div>


                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputLastName">Employee ID</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="lastname"
                      className="form-control a2"
                      id="inputLastname"
                      value={data.empId}
                      disabled={true}
                    />
                  </div>
                </div>

                {data?.jobTitle &&
                  <div className="row mt-2 justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                      <label for="inputLastName">Jobtitle</label>
                    </div>
                    <div className="form-group col-md-5">
                      <input
                        type="lastname"
                        className="form-control a2"
                        id="inputLastname"
                        value={data.jobTitle.jobTitle}
                        disabled={true}
                      />
                    </div>
                  </div>
                }

                {
                  data.department &&
                  <div className="row mt-2 justify-content-center">
                    <div className="col-md-2"></div>
                    <div className="form-group col-md-3">
                      <label for="inputEmail4">Department</label>
                    </div>
                    <div className="form-group col-md-5">
                      <input
                        type="email"
                        className="form-control a2"
                        id="inputEmail4"
                        value={data.department.departmentName}
                        disabled={true}
                      />
                    </div>
                  </div>
                }

                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">User Role</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data.userRole}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">Email </label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data.email}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">Phone No</label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data.phone}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 justify-content-center">
                  <div className="col-md-2"></div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">Date Of Birth </label>
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="email"
                      className="form-control a2"
                      id="inputEmail4"
                      value={data.dob}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mt-2 ">
                  <div className="col-md-2"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ProfileOverview;
