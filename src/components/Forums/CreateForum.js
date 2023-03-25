import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header";
import swal from "sweetalert";
import axios from "axios";

const CreateForum = () => {
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    attachmentAllowed: false,
  });
  const handleSubmit = (event) => {
    const data = {
      ...formData,
      createdBy: "641db06699bb728ad6649957",
      belongsToChapter: "6419e53e4d27e2edbce99300",
    };
    console.log(data);
    event.preventDefault();
    axios
      .post("http://localhost:1337/create-forum", data)
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Thank you!",
          text: "You have successfully created a new Discussion Forum Topic!",
          icon: "success",
          button: "Close",
        });
        setFormData({ topic: "", description: "", attachmentAllowed: false });
      })
      .catch((error) => {
        console.log(error);
        swal({
          title: "Opzz!",
          text: "Something went wrong, Please try again!",
          icon: "warning",
        });
      });
    console.log("Submitted form data:", data);

    return false;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="container bg-white mt-5">
      <div className="pt-5 px-4">
        <Header title="NETS: Create Discussion Forums" />
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label for="topic" className="font-weight-bold">
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
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-group mt-4">
            <label for="description" className="font-weight-bold">
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
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="form-group mt-4">
            <label for="attachmentAllowed" className="font-weight-bold">
              Attachments Allowed:
            </label>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                style={{
                  borderColor: "#1D9EEC",
                }}
                type="radio"
                name="attachmentAllowed"
                id="attachmentAllowed"
                value="yes"
                onChange={handleInputChange}
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
                name="attachmentAllowed"
                id="attachmentNotAllowed"
                value="no"
                onChange={handleInputChange}
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
              Create
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

export default CreateForum;
