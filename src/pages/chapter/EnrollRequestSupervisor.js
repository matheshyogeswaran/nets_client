import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import employees from "../../data/Employee.json";

const EnrollRequestSupervisor = () => {
  const [buttonStates, setButtonStates] = useState(
    employees.map(() => ({ accept: true, decline: true }))
  );
  const [acceptedRows, setAcceptedRows] = useState([]);

  const handleAccept = (index) => {
    const confirmed = window.confirm("Are you sure you want to accept this request?");
    if (confirmed) {
      const newButtonStates = [...buttonStates];
      newButtonStates[index] = { accept: false, decline: false };
      setButtonStates(newButtonStates);
      setAcceptedRows([...acceptedRows, index]);
    }
  };

  const handleDecline = (index) => {
    const confirmed = window.confirm("Are you sure you want to decline this request?");
    if (confirmed) {
      const newButtonStates = [...buttonStates];
      newButtonStates[index].accept = true;
      newButtonStates[index].decline = false;
      setButtonStates(newButtonStates);
      setAcceptedRows([...acceptedRows, index]);
    }
  };

  const isRowAccepted = (index) => acceptedRows.includes(index);

  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <div className="form-control mt-3 heading">Enroll requests</div>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">EmployeeID</th>
              <th scope="col">Employeename</th>
              <th scope="col">Jobtitle</th>
              <th scope="col">Chapter</th>
              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item, index) => {
              if (isRowAccepted(index)) {
                return null; // hide the row
              }
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.jobtitle}</td>
                  <td>{item.chapter}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success form-control"
                      disabled={!buttonStates[index].accept}
                      onClick={() => handleAccept(index)}
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger form-control"
                      disabled={!buttonStates[index].decline}
                      onClick={() => handleDecline(index)}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default EnrollRequestSupervisor;



// import React, { useState } from "react";
// import NavBar from "../../components/NavBar";
// import employees from "../../data/Employee.json";

// const EnrollRequestSupervisor = () => {
//   const [buttonStates, setButtonStates] = useState(
//     employees.map(() => ({ accept: true, decline: true }))
//   );

//   const handleAccept = (index) => {
//     const newButtonStates = [...buttonStates];
//     newButtonStates[index] = { accept: false, decline: false };
//     setButtonStates(newButtonStates);
//   };

//   const handleDecline = (index) => {
//     const newButtonStates = [...buttonStates];
//     newButtonStates[index].accept = true;
//     newButtonStates[index].decline = false;
//     setButtonStates(newButtonStates);
//   };

//   return (
//     <React.Fragment>
//       <NavBar />
//       <div className="container">
//         <div className="form-control mt-3 heading">Enroll requests</div>
//         <br />
//         <br />
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">EmployeeID</th>
//               <th scope="col">Employeename</th>
//               <th scope="col">Jobtitle</th>
//               <th scope="col">Chapter</th>
//               <th scope="col">
//                 <center>Actions</center>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((item, index) => {
//               return (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.jobtitle}</td>
//                   <td>{item.chapter}</td>
//                   <td>
//                     <button
//                       type="button"
//                       className="btn btn-success form-control"
//                       disabled={!buttonStates[index].accept}
//                       onClick={() => handleAccept(index)}
//                     >
//                       Accept
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       type="button"
//                       className="btn btn-danger form-control"
//                       disabled={!buttonStates[index].decline}
//                       onClick={() => handleDecline(index)}
//                     >
//                       Decline
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </React.Fragment>
//   );
// };

// export default EnrollRequestSupervisor;




// import React from "react";
// import NavBar from "../../components/NavBar";
// import employees from "../../data/Employee.json";
// const EnrollRequestSupervisor = () => {
//   return (
//     <React.Fragment>
//       <NavBar></NavBar>
//       <div className="container">
//         <div className="form-control mt-3 heading">Enroll requests</div>
//         <br></br> <br></br>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">EmployeeID</th>

//               <th scope="col">Employeename</th>
//               <th scope="col">Jobtitle</th>
//               <th scope="col">Chapter</th>

//               <th scope="col">
//                 <center>Actions</center>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((item) => {
//               return (
//                 <>
//                   <tr className="align-middle">
//                     <th scope="row">{item.id}</th>

//                     <td>{item.name}</td>
//                     <td>{item.jobtitle}</td>
//                     <td>{item.chapter}</td>

//                     <td>
//                       <button
//                         type="button"
//                         className="btn btn-success form-control"
//                       >
//                         Accept
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         type="button"
//                         className="btn btn-danger form-control"
//                       >
//                         Decline
//                       </button>
//                     </td>
//                   </tr>
//                 </>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </React.Fragment>
//   );
// };
// export default EnrollRequestSupervisor;
