import React from "react";

const LargeModal = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "#1D9EEC", borderColor: "#1D9EEC" }}
          >
            {props.mainButton}
          </button>
        </div>
      </div>
      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{props.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeModal;
