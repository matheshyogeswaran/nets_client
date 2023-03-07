import React from "react";

const Inputs = (props) => {
  return (
    <div>
      <input
        type={props.type}
        className="form-control"
        style={{
          backgroundColor: "#F8F8F8",
          borderColor: "#1D9EEC",
        }}
        id={props.id}
        placeholder={props.placeholder}
        required
      ></input>
    </div>
  );
};

export default Inputs;
