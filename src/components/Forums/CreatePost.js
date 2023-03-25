import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Header from "../Shared/Header";
import swal from "sweetalert";
import axios from "axios";

const CreatePost = () => {
  const params = useParams();
  const [formData, setFormData] = useState({
    description: "",
    attachment: "",
  });
  const handleSubmit = (event) => {
    const data = {
      ...formData,
      createdBy: "641db06699bb728ad6649957",
    };
    event.preventDefault();
    axios
      .post(`http://localhost:1337/add-posts/${params.forumId}`, data)
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Thank you!",
          text: "Your post was successfully saved!",
          icon: "success",
          button: "Close",
        });
        setFormData({ description: "", attachment: "" });
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
        <Header title="NETS: Create Post" />
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
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
            <label for="attachment" className="font-weight-bold">
              Attachment:
            </label>
            <div className="form-group">
              <input
                type="file"
                className="form-control-file mt-4"
                id="attachment"
                name="attachment"
                value={formData.attachment}
                onChange={handleInputChange}
              />
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
            <Link to={`/view-forum/${params.forumId}`}>
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

export default CreatePost;
