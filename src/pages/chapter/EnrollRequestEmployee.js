
import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import Chapters from "../../data/Chapters.json";

const EnrollRequestEmployee = () => {
  const [chapters, setChapter] = useState([]);
  const userID = "6405f16a8293256ee0fbbf9c";
  const [reset, setReset] = useState();
  const requestChapter = (chapID) => {
    swal({
      title: "Are you sure?",
      text: "Do you want to request this chapter",
      icon: "info",
      buttons: true,
      dangerMode: false,
    })
      .then((confirmed) => {
        if (confirmed) {
          axios
            .post("http://localhost:1337/chapters/enrollChapter", {
              chapID: chapID,
              userID: userID,
            })
            .then((res) => {
              if (res.data.status === true) {
                swal({
                  icon: "success",
                  text: res.data.message,
                });
                setReset(Date.now);
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
      });
  }
  useEffect(() => {
    axios
      .get("http://localhost:1337/chapters/showAllChapters")
      .then(function (response) {
        const filteredChapters = response.data.filter(chapter => chapter.depID !== null);
        setChapter(filteredChapters);
      });
  }, [reset]);
  const [buttonStates, setButtonStates] = useState(
    Array(Chapters.length)
      .fill()
      .map(() => Array(Chapters[0].chapters.length).fill(false))
  );

  const handleClick = (chapterIndex, deptIndex) => {
    const confirmed = window.confirm("Are you sure you want to send request to this request?");
    if (confirmed) {
      const newButtonStates = [...buttonStates];
      newButtonStates[deptIndex][chapterIndex] = true;
      setButtonStates(newButtonStates);

      swal("Success", "Your request sent succesfully!", "success");
    }
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 heading">
          Other department Chapters
        </div>
        <br></br> <br></br>
        <table className="table">
          <tbody>
            {
              chapters.map((value) => {
                return (
                  (value?.depID._id !== "6406ec4210f934870495ebf1")
                    ?
                    <div className="row m-2">
                      <div className="col-md-6">
                        <div className="form-control">{value?.chaptername}</div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-control">
                          {"From " + value?.depID?.depName + " Department"}
                        </div>
                      </div>
                      <div className="col-md-2">
                        <button
                          className="btn btn-outline-primary form-control"
                          onClick={() => { requestChapter(value?._id) }}
                          disabled={true && (value?.requested).includes(userID)}
                        >
                          {
                            ((value?.requested).includes(userID)) ? "Requested" : "Request"
                          }
                        </button>
                      </div>
                    </div>
                    :
                    null
                )
              })
            }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default EnrollRequestEmployee;




// import React from "react";
// import NavBar from "../../components/NavBar";
// import { Link } from "react-router-dom";
// import Chapters from "../../data/Chapters.json";
// const EnrollRequestEmployee = () => {
//   return (
//     <React.Fragment>
//       <NavBar></NavBar>
//       <div className="container">
//         <div className="form-control mt-3 heading">
//           Other department Chapters
//         </div>
//         <br></br> <br></br>
//         <table className="table">
//           {/* <thead>
//             <tr>
//               <th scope="col">Job title</th>

//               <th scope="col">
//                 <center>Actions</center>
//               </th>
//             </tr>
//           </thead> */}
//           <tbody>
//             {Chapters.map((item) => {
//               return item.department !== "IT"
//                 ? item.chapters.map((chapter) => {
//                   return (
//                     <div className="row m-2">
//                       <div className="col-md-6">
//                         <div className="form-control">{chapter}</div>
//                       </div>
//                       <div className="col-md-4">
//                         <div className="form-control">
//                           {"From " + item.department + " Department"}
//                         </div>
//                       </div>
//                       <div className="col-md-2">
//                         <Link className="btn btn-outline-primary form-control">
//                           Enroll
//                         </Link>
//                       </div>
//                     </div>
//                   );
//                 })
//                 : null;
//             })}
//           </tbody>
//         </table>
//       </div>
//     </React.Fragment>
//   );
// };
// export default EnrollRequestEmployee;
