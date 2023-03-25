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
      className="d-flex flex-row g-1 my-4 align-items-center justify-content-center"
      style={{ display: "flex", justifyContent: "flex-end" }}
      onSubmit={handleSubmit}
    >
      <Avatar />

      <input
        type="text"
        className="form-control mx-4"
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
      <Button label="Post" type="submit" />
    </form>
  );
};

export default AddComments;
