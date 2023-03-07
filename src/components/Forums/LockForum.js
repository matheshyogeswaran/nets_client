import React from "react";

const LockForum = (props) => {
  function handleSubmit(id) {
    console.log("Submitted form data:", id);
    return false;
  }
  return (
    <div>
      <p>Do you want to lock the {props.forumTopic}?</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          type="submit"
          onClick={() => handleSubmit(props.forumId)}
          className="btn btn-primary mt-5 "
          style={{
            backgroundColor: "#1D9EEC",
            borderColor: "#1D9EEC",
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default LockForum;
