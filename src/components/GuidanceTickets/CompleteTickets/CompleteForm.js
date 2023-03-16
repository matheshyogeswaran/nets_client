import React from "react";

const CompleteForm = (props) => {
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
          <p className="col-sm-6">Contact Number : 011 1111 111</p>
          <p className="col-sm-6">Email : xxxx@xxx.xxx</p>
        </div>
        <div class="form-check form-switch my-2">
          {props.formData ? (
            <input
              class="form-check-input"
              type="checkbox"
              id="iscompleted"
              name="iscompleted"
              disabled
            />
          ) : (
            <input
              class="form-check-input"
              type="checkbox"
              id="iscompleted"
              name="iscompleted"
              onChange={() => {
                props.setFormData(true);
              }}
              required
            />
          )}
          <label class="form-check-label" for="iscompleted">
            Completed
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="submit"
            className="btn btn-primary mt-4 mb-3 col-sm-2"
            style={{
              backgroundColor: "#1D9EEC",
              borderColor: "#1D9EEC",
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompleteForm;
