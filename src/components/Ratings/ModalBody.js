import React, { useState } from "react";
import Stars from "../Shared/Stars";
import swal from "sweetalert";

const ModalBody = () => {
  const [times, setTimes] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [formData, setFormData] = useState({
    quality: "",
    clarity: "",
    knowledgeTrans: "",
    commSkills: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault(true);
    console.log("Submitted form data:", formData);
    setIsRated(true);
    swal({
      title: "Thank you!",
      text: "Your rating was successfully saved!",
      icon: "success",
      button: "Close",
    });
    setFormData({
      quality: "",
      clarity: "",
      knowledgeTrans: "",
      commSkills: "",
    });
    return false;
  };

  const handleInputChange = (name, value) => {
    setTimes(times + 1);
    console.log(formData);
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <>
      {isRated ? (
        <div>You have already rated this learning material</div>
      ) : (
        <div>
          <p>Quality of the learning material:</p>
          <Stars
            stars={5}
            color="#D9D9D9"
            type={1}
            handleInputChange={handleInputChange}
            name="quality"
          />
          <p>Clarity of the learning material:</p>
          <Stars
            stars={5}
            color="#D9D9D9"
            type={1}
            handleInputChange={handleInputChange}
            name="clarity"
          />
          <p>Knowledge transferring skills of the creator:</p>
          <Stars
            stars={5}
            color="#D9D9D9"
            type={1}
            handleInputChange={handleInputChange}
            name="knowledgeTrans"
          />
          <p>Communication skills of the creator:</p>
          <Stars
            stars={5}
            color="#D9D9D9"
            type={1}
            handleInputChange={handleInputChange}
            name="commSkills"
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary mt-5 "
              style={{
                backgroundColor: "#1D9EEC",
                borderColor: "#1D9EEC",
              }}
              disabled={times < 4 ? true : false}
            >
              Rate
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalBody;
