import React from "react";

const RequestForm = (props) => {
  return (
    <div className="container bg-white">
      <form onSubmit={props.handleSubmit}>
        <div className="form-group row">
          <label for="department" className="col-sm-2 col-form-label">
            <small>Related Department:</small>
          </label>
          <div className="col-sm-10 mt-2">
            <select
              className="form-control"
              style={{
                backgroundColor: "#F8F8F8",
                borderColor: "#1D9EEC",
              }}
              id="department"
              name="department"
              value={props.formData.department}
              onChange={props.handleInputChange}
            >
              <option value="">
                Select the related department for the request
              </option>
              <option value="HR Department">HR Department</option>
              <option value="IT Department">IT Department</option>
              <option value="Finance Department">Finance Department</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label for="requestTiltle" className="col-sm-2 col-form-label">
            <small>Request Tiltle:</small>
          </label>
          <div className="col-sm-10 mt-2">
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: "#F8F8F8",
                borderColor: "#1D9EEC",
              }}
              id="requestTiltle"
              name="requestTiltle"
              value={props.formData.requestTiltle}
              onChange={props.handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group row mt-4">
          <label for="desc" className="col-sm-2 col-form-label">
            <small>Short Description:</small>
          </label>
          <div className="col-sm-10 mt-2">
            <textarea
              rows="5"
              className="form-control"
              style={{
                backgroundColor: "#F8F8F8",
                borderColor: "#1D9EEC",
              }}
              id="desc"
              name="desc"
              value={props.formData.desc}
              onChange={props.handleInputChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="form-group row mt-4">
          <label for="attachment" className="col-sm-3 col-form-label">
            <small>Attachment:</small>
          </label>
          <div className="col-sm-9 form-group">
            <input
              type="file"
              className="form-control-file mt-2"
              id="attachment"
              name="attachment"
              value={props.formData.attachment}
              onChange={props.handleInputChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="submit"
              className="btn btn-primary mt-5 "
              style={{
                backgroundColor: "#1D9EEC",
                borderColor: "#1D9EEC",
              }}
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
