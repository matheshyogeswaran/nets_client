import React, { useState, useEffect } from "react";
import Modal from "../Shared/Modal";
import Stars from "../Shared/Stars";
import ModalBody from "./ModalBody";
import axios from "axios";

const Ratings = () => {
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/get-kt-ratings/641d6c69bd434511a89d27dd`)
      .then((response) => {
        setRatings(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="d-flex flex-row mt-5 align-items-end justify-content-end">
      <div className="d-flex flex-column my-auto hover-overlay">
        <Stars stars={ratings} color="#FFCE22" type={0} />
      </div>
      <div className="d-flex flex-column">
        <Modal
          className="btn btn-primary"
          style={{ backgroundColor: "#1D9EEC", borderColor: "#1D9EEC" }}
          title="Rate Under:"
          mainButton="Rate"
          button="Rate"
          body={<ModalBody />}
        />
      </div>
    </div>
  );
};

export default Ratings;
