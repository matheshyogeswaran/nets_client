import React from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import swal from "sweetalert";

const forums = [
  {
    id: 1,
    topic: "Discussion Forum Topic 1",
    by: "Genny Hinton",
    posts: 3,
    status: "active",
  },
  {
    id: 2,
    topic: "Discussion Forum Topic 2",
    by: "Genny Hinton",
    posts: 0,
    status: "active",
  },
  {
    id: 3,
    topic: "Discussion Forum Topic 3",
    by: "Genny Hinton",
    posts: 4,
    status: "active",
  },
  {
    id: 4,
    topic: "Discussion Forum Topic 4",
    by: "Genny Hinton",
    posts: 4,
    status: "locked",
  },
];

const Forums = () => {
  const LockForum = (id) => {
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
        {forums.map((f) => (
          <div
            key={f.id}
            className="row mt-3 py-4 text-center"
            style={{
              backgroundColor: f.status === "active" ? "#ADD8E6" : "#D3D3D3",
            }}
          >
            <div className="col-sm-3">
              {" "}
              <Link
                to={`/view-forum/${f.id}`}
                className="text-decoration-none"
                style={{ color: "black" }}
              >
                {f.topic}{" "}
              </Link>
            </div>

            <div className="col-sm-3">{f.by}</div>
            <div className="col-sm-2">{f.posts}</div>

            {f.status === "active" ? (
              <div
                className="d-flex flex-row mx-auto col-sm-4"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to={`/edit-forum/${f.id}`}>
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
                    onClick={() => LockForum(f.id)}
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
