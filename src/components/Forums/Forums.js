import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import Modal from "../Shared/Modal";
import LockForum from "./LockForum";

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
  const [forum, setForum] = useState(0);
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
                    class="btn btn-outline-primary mx-2"
                    style={{ borderColor: "#1D9EEC" }}
                  >
                    Edit
                  </button>
                </Link>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Lock
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Lock Discussion Form
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Do you want to lock the Discussion Forum - {forum}?
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            No
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => setForum(f.id)}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
