import { useLocation } from "react-router-dom";
import Avatar from "react-avatar";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const Ratings = () => {
  const API_BASE = "http://localhost:1337";
  const location = useLocation();
  const propsData = location.state;
  const [ktSessionRating, setKtSessionRating] = useState({});
  const [articleRating, setArticleRating] = useState({});

  useEffect(() => {
    let empId = propsData?.empId;
    axios
      .post(API_BASE + "/ktsessionRatings/" + empId)
      .then((res) => setKtSessionRating(res.data))
      .catch((err) => console.log(err));
    axios
      .post(API_BASE + "/articleRatings/" + empId)
      .then((res) => setArticleRating(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(ktSessionRating?.ratingData?.[0]);

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
                <span className="fw-bold">
                  {ktSessionRating?.finalOverAllRating}
                </span>
                <FaStar color="orange" className="mt-1" />
              </div>
              <h6 className="text-secondary mt-1">
                {ktSessionRating?.numOfKtSessions < 10
                  ? "0" + ktSessionRating?.numOfKtSessions
                  : ktSessionRating?.numOfKtSessions}{" "}
                KT sessions
              </h6>
            </div>
            <div className="d-flex flex-column w-100">
              {ktSessionRating?.overAllRatingData?.map((rate, index) => {
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

        {/*KT sessions    */}
        <div className="col col-11 col-lg-5 specific-chapter p-3 mx-4 mx-lg-0">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {[
                ktSessionRating?.finaOverAllQuality,
                ktSessionRating?.finalOverAllComm,
                ktSessionRating?.finaOverAllClarity,
                ktSessionRating?.finalOverAllKnowledgeAndSkill,
              ].map((ratingCriteria, index) => (
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={index}
                  className={index == 0 ? "active" : ""}
                  aria-current={index == 0 ? "true" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {[
                ktSessionRating?.finalOverAllQuality,
                ktSessionRating?.finalOverAllComm,
                ktSessionRating?.finalOverAllClarity,
                ktSessionRating?.finalOverAllKnowledgeAndSkill,
              ].map((ratingCriteria, index) => {
                const selectedRatingData =
                  index === 0
                    ? ktSessionRating?.ratingData?.[0]
                    : index === 1
                    ? ktSessionRating?.ratingData?.[1]
                    : index === 2
                    ? ktSessionRating?.ratingData?.[2]
                    : index === 3
                    ? ktSessionRating?.ratingData?.[3]
                    : [];
                return (
                  <div
                    key={index}
                    className={
                      index == 0 ? "carousel-item active" : "carousel-item"
                    }
                    data-bs-interval={index == 0 ? "10000" : "2000"}
                  >
                    <div className="rating-type ">
                      <h5 className="mt-3">
                        {index == 0
                          ? "Quality Rate"
                          : index == 1
                          ? "Communication Rate"
                          : index == 2
                          ? "Clarity Rate"
                          : "Knowledge and Skill Rate"}
                      </h5>
                      <div className="d-flex">
                        <div className=" w-50 mt-5 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                          <div className="d-flex ms-3">
                            <span className="fw-bold me-1">
                              {ratingCriteria}
                            </span>
                            <FaStar color="orange" className="mt-1" />
                          </div>
                          <h6 className="text-secondary mt-1">
                            {ktSessionRating?.numOfKtSessions < 10
                              ? "0" + ktSessionRating?.numOfKtSessions
                              : ktSessionRating?.numOfKtSessions}{" "}
                            KT sessions
                          </h6>
                        </div>
                        <div className="d-flex flex-column w-100">
                          {selectedRatingData?.map((rate, indexi) => (
                            <div
                              key={indexi}
                              className="d-flex flex-row w-100 my-1"
                            >
                              <span>{indexi + 1} star</span>
                              <span className="progress w-50 mx-2">
                                <span
                                  className="progress-bar"
                                  style={{ width: `${rate}%` }}
                                  role="progressbar"
                                ></span>
                              </span>
                              <span>{rate}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
      {/* Articles */}
      <div className="row g-3 justify-content-evenly m-0">
        <div className="col col-11 col-lg-5 overall-chapter p-3 mx-4 mx-lg-0">
          <h5 className="mt-3">Articles</h5>
          <div className="d-flex">
            <div className=" w-50 mt-5 ms-lg-5 ms-md-5 ps-md-3 ms-sm-3">
              <div className="d-flex ms-3">
                <span className="fw-bold me-1">
                  {articleRating?.finalOverAllRating}
                </span>
                <FaStar color="orange" className="mt-1" />
              </div>
              <h6 className="text-secondary">
                {articleRating?.numOfArticles < 10
                  ? "0" + articleRating?.numOfArticles
                  : articleRating?.numOfArticles}{" "}
                Articles
              </h6>
            </div>
            <div className="d-flex flex-column w-100">
              {articleRating?.overAllRatingData?.map((rate, index) => {
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
        <div
          div
          className="col col-11 col-lg-5 specific-chapter p-3 mx-4 mx-lg-0"
        >
          <div
            id="articles"
            className="carousel carousel-dark slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {[
                articleRating?.finaOverAllQuality,
                articleRating?.finalOverAllComm,
                articleRating?.finaOverAllClarity,
                articleRating?.finalOverAllKnowledgeAndSkill,
              ].map((ratingCriteria, index) => (
                <button
                  type="button"
                  data-bs-target="#articles"
                  data-bs-slide-to={index}
                  className={index == 0 ? "active" : ""}
                  aria-current={index == 0 ? "true" : ""}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {[
                articleRating?.finalOverAllQuality,
                articleRating?.finalOverAllComm,
                articleRating?.finalOverAllClarity,
                articleRating?.finalOverAllKnowledgeAndSkill,
              ].map((ratingCriteria, index) => {
                const selectedRatingData =
                  index === 0
                    ? articleRating?.ratingData?.[0]
                    : index === 1
                    ? articleRating?.ratingData?.[1]
                    : index === 2
                    ? articleRating?.ratingData?.[2]
                    : index === 3
                    ? articleRating?.ratingData?.[3]
                    : [];
                return (
                  <div
                    key={index}
                    className={
                      index == 0 ? "carousel-item active" : "carousel-item"
                    }
                    data-bs-interval={index == 0 ? "10000" : "2000"}
                  >
                    <div className="rating-type ">
                      <h5 className="mt-3">
                        {index == 0
                          ? "Quality Rate"
                          : index == 1
                          ? "Communication Rate"
                          : index == 2
                          ? "Clarity Rate"
                          : "Knowledge and Skill Rate"}
                      </h5>
                      <div className="d-flex">
                        <div className=" w-50 mt-5 ms-lg-5 ms-md-5 ps-md-3 ms-sm-5">
                          <div className="d-flex ms-3">
                            <span className="fw-bold me-1">
                              {ratingCriteria}
                            </span>
                            <FaStar color="orange" className="mt-1" />
                          </div>
                          <h6 className="text-secondary mt-1">
                            {articleRating?.numOfArticles < 10
                              ? "0" + articleRating?.numOfArticles
                              : articleRating?.numOfArticles}{" "}
                            Articles
                          </h6>
                        </div>
                        <div className="d-flex flex-column w-100">
                          {selectedRatingData?.map((rate, indexi) => {
                            return (
                              <div
                                key={indexi}
                                className="d-flex flex-row w-100 my-1"
                              >
                                <span>{indexi + 1} star</span>
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
                );
              })}
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#articles"
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
              data-bs-target="#articles"
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
