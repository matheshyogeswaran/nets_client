import React from "react";
import swal from "sweetalert";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Jobtitle = () => {
  const [departments, setDepartments] = useState([]);

  function deletemsg(id) {
    swal({
      title: "Confirm",
      text: "Are you absolutely sure you want to permanently delete this Jobtitle and all the data it contains?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .post("http://localhost:1337/jobtitles/deleteJobtitle", {
            id: id,
            // reason: reason,
          })
          .then((res) => {
            if (res.data.status === true) {
              swal(res.data.message, {
                icon: "success",
              });
            } else {
              swal(res.data.message, {
                icon: "warning",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal("Your Jobtitle is safe!", {
          icon: "success",
        });
      }
    });
  }

  useEffect(() => {
    axios
      .get("http://localhost:1337/jobtitles/showAllJobtitles")
      .then(function (response) {
        setDepartments(response.data);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="alert mt-3 heading"><h5>Jobtitles</h5></div>
        <div className="row ">
          <div className="col-md-12">
            <Link to="/newjob" className="btn btn-outline-success form-control">
              + Add New Jobtitle
            </Link>
            <hr className="mt-3"></hr>
          </div>
        </div>{
          (departments.length === 0)
            ?
            <div className="alert alert-danger mt-4"> <b>Department Creation Required !</b> </div>
            :
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Department name</th>
                  <th scope="col">Jobtitle_ID</th>
                  <th scope="col">Jobtitle name</th>
                  <th scope="col">Edit jobtitle </th>
                  <th scope="col">Delete jobtitle </th>
                </tr>
              </thead>
              <tbody>
                {departments.map((department, index) => {
                  return department.Jobtitle.map((jobtitle, j) => {
                    return (
                      <tr className="align-middle" key={jobtitle._id}>
                        {j === 0 ? <td>{department.depName}</td> : <td></td>}
                        <td>{jobtitle._id}</td>
                        <td>{jobtitle.jobTitlename}</td>
                        <td>
                          <Link
                            to={"/editjob/" + jobtitle._id + "/" + jobtitle.jobTitlename}
                            className="btn btn-outline-primary form-control"
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button type="submit" onClick={() => deletemsg(jobtitle._id)}
                            className="btn btn-outline-danger form-control"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                })}
              </tbody>
            </table>}
      </div>
    </React.Fragment>
  );
};
export default Jobtitle;



// import React from "react";
// import NavBar from "../../components/NavBar";
// import users from "../../data/Users.json";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// const Jobtitle = () => {
//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:1337/jobtitles/showAllJobtitles")
//       .then(function (response) {
//         setDepartments(response.data);
//       });
//   }, []);

//   return (
//     <React.Fragment>
//       <NavBar></NavBar>
//       <div className="container">
//         <div className="form-control mt-3 heading">Jobtitles</div>
//         <br></br>
//         <div className="row ">
//           <div className="col-md-12">
//             <Link to="/newjob" className="btn btn-outline-success form-control">
//               Add New Jobtitle
//             </Link>
//           </div>
//         </div>
//         <br></br> <br></br>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Department name</th>
//               <th scope="col">Jobtitle_ID</th>
//               <th scope="col">Jobtitle name</th>

//               <th scope="col">
//                 <center>Actions</center>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map((department, index) => {
//               return department.Jobtitle.map((jobtitle, j) => {
//                 return (
//                   <tr className="align-middle" key={jobtitle._id}>
//                     {/* {j === 0 ? <th scope="row">{index + 1}</th> : <td></td>} */}
//                     {j === 0 ? <td>{department.depName}</td> : <td></td>}
//                     <td>{jobtitle._id}</td>
//                     <td>{jobtitle.jobTitlename}</td>
//                     <td></td>
//                     <td>
//                       <Link
//                         to={"/editjob/" + jobtitle._id + "/" + jobtitle.jobTitlename}
//                         className="btn btn-outline-primary form-control"
//                       >
//                         Edit
//                       </Link>
//                     </td>
//                     <td>
//                       <button
//                         // to={"/deletejob/" + jobtitle._id}
//                         className="btn btn-outline-danger form-control"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             })}
//           </tbody>
//         </table>
//       </div>
//     </React.Fragment>
//   );
// };
// export default Jobtitle;
