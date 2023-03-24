import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import swal from "sweetalert";

const EditForum = () => {
  const [formData, setFormData] = useState({
    forumTopic: "Edit Forum",
    desc: "Edit Forum Desc",
    attachment: "yes",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form data:", formData);
    swal({
      title: "Thank you!",
      text: "Your changes was successfully saved!",
      icon: "success",
      button: "Close",
    });
    return false;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="container bg-white mt-5">
      <div className="pt-5 px-4">
        <Header title="NETS: Edit Discussion Forums" />
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label for="forumTopic" className="font-weight-bold">
              Discussion Forum Topic:
            </label>
            <div className="col-sm-8 mt-2">
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: "#F8F8F8",
                  borderColor: "#1D9EEC",
                }}
                id="forumTopic"
                name="forumTopic"
                value={formData.forumTopic}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group mt-4">
            <label for="desc" className="font-weight-bold">
              Description:
            </label>
            <div className="col-sm-8 mt-2">
              <textarea
                rows="5"
                className="form-control"
                style={{
                  backgroundColor: "#F8F8F8",
                  borderColor: "#1D9EEC",
                }}
                id="desc"
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="form-group mt-4">
            <label for="attachment" className="font-weight-bold">
              Attachments Allowed:
            </label>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                style={{
                  borderColor: "#1D9EEC",
                }}
                type="radio"
                name="attachment"
                id="attachmentAllowed"
                value="yes"
                onChange={handleInputChange}
                checked={formData.attachment === "yes" ? true : false}
                required
              />
              <label className="form-check-label" for="yes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                style={{
                  borderColor: "#1D9EEC",
                }}
                type="radio"
                name="attachment"
                id="attachmentNotAllowed"
                value="no"
                onChange={handleInputChange}
                checked={formData.attachment === "no" ? true : false}
                required
              />
              <label className="form-check-label" for="no">
                No
              </label>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="submit"
              className="btn btn-primary mt-5 "
              style={{
                backgroundColor: "#1D9EEC",
                borderColor: "#1D9EEC",
              }}
            >
              Save
            </button>
            <Link to="/forums">
              <button
                type="button"
                className="btn btn-primary mt-5 mx-3"
                style={{
                  backgroundColor: "#778899",
                  borderColor: "#778899",
                }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForum;
