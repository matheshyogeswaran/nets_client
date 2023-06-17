import React from "react";
import { Link, useParams } from "react-router-dom";
import Chapter from "./Chapter";

const Content = () => {
  const { chapterId, chapterName } = useParams();
  console.log(chapterId);
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#fefefe" }}>
        <div className="container my-5">
          {/* chapter name here */}
          <h4 className="heading p-3 rounded">
            {chapterName + ": Units"}
          </h4>
          <nav className="navbar navbar-expand-lg">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                <li className="nav-item" style={{ fontWeight: "bold" }}>
                  <Link to={"/chapterPage/" + chapterId + "/" + chapterName} className="nav-link active">
                    Units
                  </Link>
                </li>
                <li className="nav-item" style={{ fontWeight: "bold" }}>
                  <Link to={"/article/" + chapterId + "/" + chapterName} className="nav-link">
                    Articles
                  </Link>
                </li>
                <li className="nav-item" style={{ fontWeight: "bold" }}>
                  <Link to={"/forums/" + chapterId + "/" + chapterName} className="nav-link">
                    Discussion Forums
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="container p-3">
                <Chapter chapterID={chapterId} chapterName={chapterName}></Chapter>
              </div>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Content;
