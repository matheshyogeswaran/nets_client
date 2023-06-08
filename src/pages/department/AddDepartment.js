import React, { useState } from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const AddDepartment = () => {
  const [depName, setDepName] = useState("");
  const [depNameError, setDepNameError] = useState("");

  function validateDepartmentName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
  }

  function submitDepartment(e) {
    e.preventDefault();
    if (!validateDepartmentName(depName)) {
      setDepNameError("Department name must contain only alphabet letters.");
      return;
    }

    axios
      .post("http://localhost:1337/departments/addDepartment", {
        departmentName: depName,
      })
      .then((res) => {
        if (res.data.status === true) {
          swal({
            icon: "success",
            text: res.data.message,
          });
          setDepName("");
          setDepNameError("");
        } else {
          swal({
            icon: "warning",
            text: res.data.message,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="alert mt-3 heading">
        <h5>Create Department</h5>
      </div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={submitDepartment}>
          <div className="field">
            <label className="ml-5">Department Name</label>
            <div className="control">
              <input
                type="text"
                name="cname"
                className="input my-3 ml-5"
                placeholder="Name"
                value={depName}
                onChange={(e) => {
                  setDepName(e.target.value);
                  setDepNameError("");
                }}
                required
              />
              {depNameError && <p className="error">{depNameError}</p>}
            </div>
          </div>
          <div className="control">
            <button
              type="submit"
              className="btn btn-primary mr-1 column is-half text-white"
            >
              Save
            </button>
          </div>
          <div>
            <img
              src={image4}
              className="picside"
              draggable={false}
              alt="this is image"
            />
          </div>
          <div className="field"></div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartment;







//without frontend validation
// import React, { useState } from "react";
// import image4 from "../../images/1.svg";
// import "../../App.css";
// import swal from "sweetalert";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const AddDepartment = () => {
//   const [depName, setDepName] = useState("");
//   function submitDepartment(e) {
//     e.preventDefault();
//     axios
//       .post("http://localhost:1337/departments/addDepartment", {
//         departmentName: depName,
//       })
//       .then((res) => {
//         if (res.data.status === true) {
//           swal({
//             icon: "success",
//             text: res.data.message,
//           });
//           setDepName("");
//         } else {
//           swal({
//             icon: "warning",
//             text: res.data.message,
//           });
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <div className="container">
//       <div className="alert mt-3 heading">
//         <h5>Create Department</h5>
//       </div>
//       <div className="columns mt-5">
//         <form name="myForm" onSubmit={submitDepartment}>
//           <div className="field">
//             <label className="ml-5">Department Name</label>
//             <div className="control">
//               <input
//                 type="text"
//                 name="cname"
//                 className="input my-3 ml-5"
//                 placeholder="Name"
//                 value={depName}
//                 onChange={(e) => setDepName(e.target.value)}
//                 required
//               />
//             </div>
//           </div>
//           <div className="control">
//             <button
//               type="submit"
//               className="btn btn-primary mr-1 column is-half text-white"
//             >
//               Save
//             </button>
//           </div>
//           <div>
//             <img src={image4} className="picside" draggable={false} alt="this is image" />
//           </div>
//           <div className="field"></div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddDepartment;
