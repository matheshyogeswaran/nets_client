import React from "react";

const DirectForm = (props) => {
  const employees = [
    { userId: 1, userName: "Employee 1" },
    { userId: 2, userName: "Employee 2" },
    { userId: 3, userName: "Employee 3" },
    { userId: 4, userName: "Employee 4" },
  ];
  return (
    <div className="container bg-white">
      <form onSubmit={props.handleSubmit}>
        <div className="row">
          <p className="col-sm-6">Request No. 1</p>
          <p className="col-sm-6"> Request Title : xxxxxx xxxxxx</p>
        </div>
        <div className="row">
          <p className="col-sm-12">
            Short Description : xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxx
            xxxxxx xxxx xxx xxxxx
          </p>
        </div>
        <div className="row">
          <p className="col-sm-12">Attachment : </p>
        </div>
        <div className="row">
          <p className="col-sm-12">Requested by : xxxxx xxxxx </p>
        </div>
        <div className="row">
          <p className="col-sm-12">Employees that can give guidance : </p>
        </div>
        {employees.map((emp) => (
          <div className="form-check">
            <input
              className="form-check-input"
              style={{
                borderColor: "#1D9EEC",
              }}
              type="radio"
              name="directedTo"
              id={emp.userId}
              value={emp.userId}
              onChange={props.handleInputChange}
              required
            />
            <label className="form-check-label" for="directedTo">
              {emp.userName}
            </label>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="submit"
            className="btn btn-primary mt-4 mb-3"
            style={{
              backgroundColor: "#1D9EEC",
              borderColor: "#1D9EEC",
            }}
          >
            Direct
          </button>
        </div>
      </form>
    </div>
  );
};

export default DirectForm;
