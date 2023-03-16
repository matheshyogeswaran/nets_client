import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.type}
        className="btn btn-primary"
        style={{ backgroundColor: "#1D9EEC", borderColor: "#1D9EEC" }}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
