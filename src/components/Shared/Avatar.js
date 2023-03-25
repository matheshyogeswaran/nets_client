import React from "react";
import AvatarRound from "react-avatar";

const Avatar = (props) => {
  return (
    <div className="d-flex align-items-center">
      <AvatarRound name={`${props.user}`} round size={60} />
    </div>
  );
};

export default Avatar;
