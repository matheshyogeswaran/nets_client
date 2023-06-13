// import React from "react";
// import NavBar from "../../components/NavBar";
// import users from "../../data/Users.json";
// import { Link } from "react-router-dom";
// const PermanentDeleteChapter = () => {
//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="form-control mt-3 heading">
//           Permanent Delete Chapters
//         </div>
//         <br></br> <br></br>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>

//               <th scope="col">Chapter name</th>
//               <th scope="col">Related department</th>

//               <th scope="col">
//                 <center>Action</center>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((item) => {
//               return (
//                 <>
//                   <tr className="align-middle">
//                     <th scope="row">{"C00" + item.id}</th>

//                     <td>{item.chapter}</td>
//                     <td>{item.department}</td>

//                     <td>
//                       <Link
//                         to="/deletechap"
//                         className="btn btn-outline-danger form-control"
//                       >
//                         Delete
//                       </Link>
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
// export default PermanentDeleteChapter;


//---------------------------------------------------------------------------------
// import React from "react";
// import NavBar from "../../components/NavBar";
// import users from "../../data/Users.json";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// const Chapter = () => {
//   const [chapters, setChapter] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:1337/chapters/showAllChapters")
//       .then(function (response) {
//         const filteredChapters = response.data.filter(chapter => chapter.depID !== null);
//         setChapter(filteredChapters);
//       });
//   }, []);

//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="form-control mt-3 heading">Chapters</div>
//         <br></br>

//         <br></br> <br></br>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>

//               <th scope="col">Chapter name</th>

//               <th scope="col">
//                 <center>Actions</center>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {chapters.map((item) => {
//               if (item.status === "notactive") {
//                 // return null; // If the status is not active, don't render the row

//                 return (
//                   <tr className="align-middle" key={item._id}>
//                     <th scope="row">{item._id}</th>

//                     <td>{item.chapterName}</td>

//                     <td>
//                       <Link
//                         to={"/editchap/" + item._id + "/" + item.chapterName}
//                         className="btn btn-outline-primary form-control"
//                       >
//                         Edit
//                       </Link>
//                     </td>
//                     <td>
//                       <Link
//                         to={"/deletechap/" + item._id}
//                         className="btn btn-outline-danger form-control"
//                       >
//                         Delete
//                       </Link>
//                     </td>
//                   </tr>
//                 );
//               }
//             })}
//           </tbody>
//         </table>
//       </div>
//     </React.Fragment>
//   );
// };
// export default Chapter;


//-------------------------------------------------------------

import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState, useEffect } from "react";
const PermanentDeleteChapter = () => {
  const [chapters, setChapter] = useState([]);

  function deletechapter(id) {
    swal({
      title: "Confirm",
      text: "Are you absolutely sure you want to permanently delete this Chapter and all the data it contains?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .post("http://localhost:1337/chapters/deleteChapter", {
            id: id,

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
        swal("Your Chapter is safe!", {
          icon: "success",
        });
      }
    });
  }

  useEffect(() => {
    axios.get("http://localhost:1337/chapters/showAllChapters")
      .then(function (response) {
        const filteredChapters = response.data.filter(chapter => chapter.depID !== null && chapter.status === "notactive");
        setChapter(filteredChapters);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <div className="alert mt-3 heading"><h5>Deleted Chapters</h5></div>
        <hr className="mt-3"></hr>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Chapter name</th>
              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {chapters.map((item) => {
              return (
                <tr className="align-middle" key={item._id}>
                  <th scope="row">{item._id}</th>
                  <td>{item.chapterName}</td>
                  <td>
                    <button type="submit" onClick={() => deletechapter(item._id)}
                      className="btn btn-outline-danger form-control"
                    >
                      Delete
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
export default PermanentDeleteChapter;
