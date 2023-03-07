import React from "react";
import Modal from "../Shared/Modal";
import Stars from "../Shared/Stars";
import ModalBody from "./ModalBody";

const Ratings = () => {
  return (
    <div className="d-flex flex-row mt-5 align-items-end justify-content-end mx-4">
      <div className="d-flex flex-column my-auto hover-overlay">
        <Stars stars={4} color="#FFCE22" type={0} />
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
