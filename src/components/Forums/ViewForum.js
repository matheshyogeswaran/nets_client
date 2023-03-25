import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Header from "../Shared/Header";
import Comment from "../Comments/Comment";
import axios from "axios";

const ViewForum = () => {
  const params = useParams();
  const data = [
    {
      cid: 1,
      user: "Chris Hemsworth",
      userRole: "Hired Employee",
      time: "5 hours ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      replies: [
        {
          rid: 1,
          user: "Chris Hemsworth",
          userRole: "Hired Employee",
          time: "3 hours ago",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          rid: 2,
          user: "Chris Hemsworth",
          userRole: "Hired Employee",
          time: "1 hours ago",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    },
    {
      cid: 2,
      user: "Chris Hemsworth",
      userRole: "Hired Employee",
      time: "5 hours ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      replies: [],
    },
    {
      cid: 3,
      user: "Chris Hemsworth",
      userRole: "Hired Employee",
      time: "5 hours ago",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      replies: [
        {
          rid: 1,
          user: "Chris Hemsworth",
          userRole: "Hired Employee",
          time: "3 hours ago",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          rid: 2,
          user: "Chris Hemsworth",
          userRole: "Hired Employee",
          time: "1 hours ago",
          reply:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
    },
  ];
  const [forum, setForum] = useState([]);
  const [showReplies, setShowReplies] = useState(false);
  const [selectedComment, setSelectedComment] = useState(0);
  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/get-forum-details-by-forum-id/${params.forumId}`
      )
      .then((response) => {
        setForum(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(forum);
  }, []);
  return (
    <div className="container mt-3">
      <div className="pt-5 px-4">
        <Header title="NETS: Discussion Forum Topic 1" />
      </div>
      <div className="text-center mt-5">
        <Link to={`/create-post/${params.forumId}`}>
          <button type="button" className="btn btn-outline-success">
            Add Post
          </button>
        </Link>
      </div>
      <div className="d-flex justify-content-center row">
        <div className="col-md-12">
          {forum.map((f) => (
            <div
              className="bg-white"
              style={{
                display: "block",
                borderRadius: "11px",
                boxShadow: "black",
                marginTop: "2%",
                marginBottom: "2%",
                maxWidth: "1000px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {f.posts.map((p) => (
                <>
                  <Comment
                    id={p._id}
                    user={p.createdBy.firstName + " " + p.createdBy.lastName}
                    role="Employee"
                    time={p.createdOn}
                    message={p.description}
                  />
                  <div className="d-flex justify-content-between p-3">
                    <span
                      style={{ cursor: "pointer", color: "#1D9EEC" }}
                      onClick={() => {
                        setShowReplies(!showReplies);
                        setSelectedComment(p._id);
                      }}
                    >
                      {showReplies ? (
                        selectedComment === p._id ? (
                          p.replies.length === 0 ? null : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-caret-up-fill mx-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                          )
                        ) : p.replies.length === 0 ? null : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-down-fill mx-2"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                          </svg>
                        )
                      ) : p.replies.length === 0 ? null : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-down-fill mx-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      )}
                      {p.replies.length === 0
                        ? "No replies yet"
                        : p.replies.length + " replies"}
                    </span>

                    <div className="d-flex align-items-center border-left px-3">
                      <Link
                        to={`/add-reply/${params.forumId}/${p._id}`}
                        className="text-decoration-none"
                      >
                        <i className="fa fa-comment"></i>
                        <span
                          className="ml-2"
                          style={{
                            cursor: "pointer",
                            color: "#1D9EEC",
                          }}
                        >
                          Reply
                        </span>
                      </Link>
                    </div>
                  </div>
                  {showReplies
                    ? selectedComment === p._id
                      ? p.replies.map((r) => (
                          <div className="p-2" style={{ marginLeft: "20px" }}>
                            <Comment
                              id={r._id}
                              user={
                                r.createdBy.firstName +
                                " " +
                                r.createdBy.lastName
                              }
                              role={"Employee"}
                              time={r.createdOn}
                              message={r.description}
                            />
                          </div>
                        ))
                      : null
                    : null}
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewForum;
