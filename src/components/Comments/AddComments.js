import React, { useState } from "react";
import Avatar from "../Shared/Avatar";
import Button from "../Shared/Button";
import swal from "sweetalert";

const AddComments = () => {
  const [formData, setFormData] = useState({
    comment: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form data:", formData);
    swal({
      title: "Thank you!",
      text: "Your comment was successfully saved!",
      icon: "success",
      button: "Close",
    });
    setFormData({ comment: "" });
    return false;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form
      className="row g-2 mt-2 align-items-center justify-content-center"
      onSubmit={handleSubmit}
    >
      <div className="col-auto">
        <Avatar />
      </div>
      <div className="col-6 mt-auto">
        <input
          type="text"
          className="form-control"
          style={{
            backgroundColor: "#F8F8F8",
            borderColor: "#1D9EEC",
          }}
          id="comment"
          name="comment"
          placeholder="Add your Comment"
          value={formData.comment}
          onChange={handleInputChange}
          required
        />
        {/* <Inputs type="text" id="addComment" placeholder="Add your Comment" /> */}
      </div>
      <div className="col-auto mt-auto">
        <Button label="Post" type="submit" />
      </div>
    </form>
  );
};

export default AddComments;
