import React, { useState } from "react";
import Header from "../../Shared/Header";
import LargeModal from "../../Shared/LargeModal";
import CompleteForm from "./CompleteForm";
import swal from "sweetalert";

const CompleteGuidanceTickets = () => {
  const tickets = [
    {
      requestNo: 1,
      title: "xxxxxx xxxxxx",
      on: "11 / 11 / 1111",
      desc: "xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxx xxxxxx xxxx xxx xxxxx ",
      attachment:
        "https://www.egrovesys.com/blog/wp-content/uploads/sites/2/2010/07/Software-Bugs-740x343.jpeg",
      to: "xxxxxx xxxxx",
      status: 2,
    },
    {
      requestNo: 2,
      title: "xxxxxx xxxxxx",
      on: "11 / 11 / 1111",
      desc: "xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxx xxxxxx xxxx xxx xxxxx ",
      attachment:
        "https://www.egrovesys.com/blog/wp-content/uploads/sites/2/2010/07/Software-Bugs-740x343.jpeg",
      to: "xxx xxx",
      status: 3,
    },
  ];
  const [formData, setFormData] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("isCompleted:", formData);
    swal({
      title: "Thank you!",
      text: "The ticket was successfully completed!",
      icon: "success",
      button: "Close",
    });
    return false;
  };
  return (
    <div className="container">
      <div className="pt-5 px-4">
        <Header title="NETS: Add Reply" />
      </div>
      <div
        style={{
          display: "block",
          borderRadius: "11px",
          boxShadow: "black",
          marginBottom: "2%",
          paddingTop: "50px",
        }}
      >
        {tickets.map((t) => (
          <div
            className="card mt-4"
            style={{
              borderColor: "#1D9EEC",
            }}
          >
            <div className="card-body">
              <div className="row">
                <p className="col-sm-6">Request No. {t.requestNo}</p>
                <p className="col-sm-6"> Request Title : {t.title}</p>
              </div>
              <div className="row">
                <p className="col-sm-6">Requested by: {t.to}</p>
                <p className="col-sm-6">Requested on: {t.on}</p>
              </div>
              <div className="row">
                <div className="col-sm-10 mx-auto my-3">
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{
                        width:
                          t.status === 1
                            ? "20%"
                            : t.status === 2
                            ? "60%"
                            : "100%",
                      }}
                      aria-valuenow={
                        t.status === 1 ? "20" : t.status === 2 ? "60" : "100"
                      }
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {t.status === 1
                        ? "Requested"
                        : t.status === 2
                        ? "Directed"
                        : "Completed"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-2">
                {" "}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <LargeModal
                    title="Guidance Complete Form"
                    mainButton="View More"
                    body={
                      <CompleteForm
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompleteGuidanceTickets;
