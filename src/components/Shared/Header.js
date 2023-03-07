import React from "react";

const Header = (props) => {
  return (
    <div
      className="row px-5 py-4"
      style={{ backgroundColor: "#D3D3D3", borderRadius: "11px" }}
    >
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
