import React from "react";

const Modal = (props) => {
  return (
    <div>
      <button
        type="button"
        className={props.className}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={props.style}
      >
        {props.mainButton}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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

export default Modal;
