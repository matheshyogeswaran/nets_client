

import React from "react";
import NavBar from "../../components/NavBar";
import users from "../../data/Users.json";
import axios from "axios";
import swal from "sweetalert";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <hr className="mt-3"></hr>{
          (chapters.length === 0)
            ?
            <div className="alert alert-info mt-4"> <b>No tempararily deleted chapters Found !</b> </div>
            :
            <table className="table">

              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Chapter name</th>
                  <th scope="col">Department</th>
                  <th scope="col">
                    <center>Actions</center>
                  </th>
                </tr>
              </thead>
              <tbody>
                {

                  chapters.map((item) => {
                    return (
                      <tr className="align-middle" key={item._id}>
                        <th scope="row">{item._id}</th>
                        <td>{item.chapterName}</td>
                        <td>{item.depID?.depName}</td>
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
            </table>}
      </div>
    </React.Fragment>
  );
};
export default PermanentDeleteChapter;
