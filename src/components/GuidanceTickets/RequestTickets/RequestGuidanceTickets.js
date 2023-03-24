import React, { useState } from "react";
import Header from "../../Shared/Header";
import LargeModal from "../../Shared/LargeModal";
import RequestForm from "./RequestForm";
import swal from "sweetalert";

const RequestGuidanceTickets = () => {
  const tickets = [
    {
      requestNo: 1,
      title: "xxxxxx xxxxxx",
      on: "11 / 11 / 1111",
      to: "pending",
      tel: "pending",
      email: "pending",
      status: 1,
    },
    {
      requestNo: 2,
      title: "xxxxxx xxxxxx",
      on: "11 / 11 / 1111",
      to: "xxx xxx",
      tel: "011 1111 111",
      email: "xxxx@xxx.xxx",
      status: 2,
    },
  ];
  const [formData, setFormData] = useState({
    department: "",
    requestTiltle: "",
    desc: "",
    attachment: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form data:", formData);
    swal({
      title: "Thank you!",
      text: "The ticket was successfully created!",
      icon: "success",
      button: "Close",
    });
    setFormData({
      department: "",
      requestTiltle: "",
      desc: "",
      attachment: "",
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
        <Header title="NETS: Guidance Tickets" />
      </div>
      <div
        style={{
          borderRadius: "11px",
          boxShadow: "black",
          marginTop: "2%",
          marginBottom: "2%",
          paddingTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LargeModal
          title="Guidance Request Form"
          mainButton="Request Guidance"
          body={
            <RequestForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
            />
          }
        />
      </div>
      <div className="mt-4">
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
                <p className="col-sm-6">Requested on: {t.on}</p>
                <p className="col-sm-6">Directed to : {t.to}</p>
              </div>
              <div className="row">
                <p className="col-sm-6">Contact number : {t.tel}</p>
                <p className="col-sm-6">Email : {t.email}</p>
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

export default RequestGuidanceTickets;
