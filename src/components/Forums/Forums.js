import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import swal from "sweetalert";
import axios from "axios";

const Forums = () => {
  const [forumTopics, setForumTopics] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/get-forums-by-chapter/6419e53e4d27e2edbce99300"
      )
      .then((response) => {
        setForumTopics(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const LockForum = (id) => {
    axios
      .put(`http://localhost:1337/edit-forum/${id}`, { status: "Locked" })
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Do you want to lock this forum?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal("Forum has been locked!", {
              icon: "success",
            });
            console.log("Submitted form data:", id);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Opzz!",
          text: "Something went wrong, Please try again!",
          icon: "warning",
        });
      });

    return false;
  };
  return (
    <div className="container my-5">
      <Header title="NETS: Discussion Forums" />
      <div className="text-center mt-5">
        <Link to="/create-forum">
          <button type="button" className="btn btn-outline-success">
            Create New Discussion Forum Topic
          </button>
        </Link>
      </div>
      <div className="mt-5">
        <div
          className="row py-4 text-center"
          style={{ backgroundColor: "#D3D3D3" }}
        >
          <div className="col-sm-3">Forum Topic</div>
          <div className="col-sm-3">Created by</div>
          <div className="col-sm-2">Number of posts</div>
          <div className="col-sm-4">Actions</div>
        </div>
        {forumTopics?.map((f) => (
          <div
            key={f._id}
            className="row mt-3 py-4 text-center"
            style={{
              backgroundColor: f.status === "Active" ? "#ADD8E6" : "#D3D3D3",
            }}
          >
            <div className="col-sm-3">
              {" "}
              <Link
                to={`/view-forum/${f._id}`}
                className="text-decoration-none"
                style={{ color: "black" }}
              >
                {f.topic}{" "}
              </Link>
            </div>

            <div className="col-sm-3">
              {f.createdBy.firstName + " " + f.createdBy.lastName}{" "}
            </div>
            <div className="col-sm-2">{f.posts.length}</div>

            {f.status === "Active" ? (
              <div
                className="d-flex flex-row mx-auto col-sm-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to={`/edit-forum/${f._id}`}>
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2"
                    style={{ borderColor: "#1D9EEC" }}
                  >
                    Edit
                  </button>
                </Link>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => LockForum(f._id)}
                  >
                    Lock
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
