import { useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const Ratings = () => {
  const location = useLocation();
  const propsData = location.state;
  const [overall] = useState([42, 10, 83, 43, 53]);
  return (
    <>
      <h1 className="py-4 result-head card ps-5 mx-sm-1 ">Ratings Report</h1>
      <div className=" row m-0 mx-auto justify-content-between">
        <div className="col col-12 col-lg-6 d-flex  pb-4">
          <Avatar name={`${propsData?.firstName}`} round />
          <div className="d-flex flex-column ps-4">
            <h2 className="text-dark">
              {propsData?.firstName} {propsData?.lastName}
            </h2>
            <h5 className="text-secondary">{propsData?.empId}</h5>
          </div>
        </div>
      </div>
      {/* before ratings */}
      <div className="row g-3 justify-content-evenly m-0">
        <div className="col col-11 col-lg-5 overall-chapter p-3 mx-4 mx-lg-0">
          <h5 className="mt-3">KT sessions</h5>
          <div className="d-flex">
            <div className=" w-50 mt-5 ms-lg-5 ms-md-5 ps-md-3 ms-sm-3">
              <div className="d-flex ms-3">
                <span className="fw-bold me-1">4.5</span>
                <FaStar color="orange" className="mt-1" />
              </div>
              <h6 className="text-secondary">9 KT sessions</h6>
            </div>
            <div className="d-flex flex-column w-100">
              {overall.map((rate, index) => {
                return (
                  <div key={index} className="d-flex flex-row w-100 my-1">
                    <span>{index + 1} star</span>
                    <span className="progress w-50 mx-2">
                      <span
                        className="progress-bar"
                        style={{ width: `${rate}%` }}
                        role="progressbar"
                      ></span>
                    </span>
                    <span>{rate}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col col-11 col-lg-5 specific-chapter p-3 mx-4 mx-lg-0">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="rating-type ">
                  <h5 className="mt-3">Quality Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">4.5</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 KT sessions</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="rating-type">
                  <h5 className="mt-3">Communication Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ps-lg-3 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">4.5</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 KT sessions</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="rating-type">
                  <h5 className="mt-3">Clarity Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ps-lg-3 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">4.5</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 KT sessions</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="rating-type">
                  <h5 className="mt-3">Knowledge and Skill Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ps-lg-3 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">4.5</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 KT sessions</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* React */}
      <div className="row g-3 justify-content-evenly m-0">
        <div className="col col-11 col-lg-5 overall-chapter p-3 mx-4 mx-lg-0">
          <h5 className="mt-3">Articles</h5>
          <div className="d-flex">
            <div className=" w-50 mt-5 ms-lg-5 ms-md-5 ps-md-3 ms-sm-3">
              <div className="d-flex ms-3">
                <span className="fw-bold me-1">2.9</span>
                <FaStar color="orange" className="mt-1" />
              </div>
              <h6 className="text-secondary">9 articles</h6>
            </div>
            <div className="d-flex flex-column w-100">
              {overall.map((rate, index) => {
                return (
                  <div key={index} className="d-flex flex-row w-100 my-1">
                    <span>{index + 1} star</span>
                    <span className="progress w-50 mx-2">
                      <span
                        className="progress-bar"
                        style={{ width: `${rate}%` }}
                        role="progressbar"
                      ></span>
                    </span>
                    <span>{rate}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*  */}
        <div className="col col-11 col-lg-5 specific-chapter p-3 mx-4 mx-lg-0">
          <div
            id="carouselExampleLight"
            className="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleLight"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleLight"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleLight"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleLight"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="rating-type ">
                  <h5 className="mt-3">Quality Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">4.0</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 articles</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="rating-type">
                  <h5 className="mt-3">Communication Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ps-lg-3 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">3.2</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 articles</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="rating-type">
                  <h5 className="mt-3">Clarity Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ps-lg-3 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">4.5</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 articles</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="rating-type">
                  <h5 className="mt-3">Knowledge and Skill Rate</h5>
                  <div className="d-flex">
                    <div className=" w-50 mt-5 ms-lg-5 ps-lg-3 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                      <div className="d-flex ms-3">
                        <span className="fw-bold me-1">4.5</span>
                        <FaStar color="orange" className="mt-1" />
                      </div>
                      <h6 className="text-secondary">9 articles</h6>
                    </div>
                    <div className="d-flex flex-column w-100">
                      {overall.map((rate, index) => {
                        return (
                          <div
                            key={index}
                            className="d-flex flex-row w-100 my-1"
                          >
                            <span>{index + 1} star</span>
                            <span className="progress w-50 mx-2">
                              <span
                                className="progress-bar"
                                style={{ width: `${rate}%` }}
                                role="progressbar"
                              ></span>
                            </span>
                            <span>{rate}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleLight"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleLight"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratings;
