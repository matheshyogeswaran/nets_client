import React, { useState } from "react";
import Header from "../../Shared/Header";
import LargeModal from "../../Shared/LargeModal";
import DirectForm from "./DirectForm";
import swal from "sweetalert";

const DirectGuidanceTickets = () => {
  const tickets = [
    {
      requestNo: 1,
      title: "xxxxxx xxxxxx",
      on: "11 / 11 / 1111",
      desc: "xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxx xxxxxx xxxx xxx xxxxx ",
      attachment:
        "https://www.egrovesys.com/blog/wp-content/uploads/sites/2/2010/07/Software-Bugs-740x343.jpeg",
      to: "pending",
      status: 1,
    },
    {
      requestNo: 2,
      title: "xxxxxx xxxxxx",
      on: "11 / 11 / 1111",
      desc: "xxxx xxxx xxxxx xxxx xxxx xxxx xxxx xxxx xxx xxxxxx xxxx xxx xxxxx ",
      attachment:
        "https://www.egrovesys.com/blog/wp-content/uploads/sites/2/2010/07/Software-Bugs-740x343.jpeg",
      to: "xxx xxx",
      status: 2,
    },
  ];
  const [formData, setFormData] = useState({
    directedTo: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form data:", formData);
    swal({
      title: "Thank you!",
      text: "The ticket was successfully directed!",
      icon: "success",
      button: "Close",
    });
    setFormData({
      directedTo: "",
    });
    return false;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="container">
      <div className="pt-5 px-4">
        <Header title="NETS: Guidance Ticket" />
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
            className="card mb-5"
            style={{
              borderColor: "#1D9EEC",
              backgroundColor: t.status === 1 ? "#DDEDF8" : "#F8F8F8",
            }}
          >
            <div className="card-body">
              <div className="row">
                <p className="col-sm-6">Request No. {t.requestNo}</p>
                <p className="col-sm-6"> Request Title : {t.title}</p>
              </div>
              <div className="row">
                <p className="col-sm-6">
                  {t.status === 1 ? (
                    <LargeModal
                      title="Guidance Direction Form"
                      mainButton="DIRECT"
                      body={
                        <DirectForm
                          formData={formData}
                          setFormData={setFormData}
                          handleSubmit={handleSubmit}
                          handleInputChange={handleInputChange}
                        />
                      }
                    />
                  ) : (
                    "Directed to : " + t.to
                  )}
                </p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectGuidanceTickets;
