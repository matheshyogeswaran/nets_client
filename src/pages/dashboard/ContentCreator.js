import { Link } from "react-router-dom";
import image1 from "../../images/contentCr/depChap.svg"
import image2 from "../../images/contentCr/learningChap.svg"
import image3 from "../../images/contentCr/manageGuidance.svg"
import image4 from "../../images/contentCr/rating1.svg"

const ContentCreator = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/department" className="btn btn-outline-dark">
                            <center>
                                <img src={image3} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Complete Guidance request</h6>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/department" className="btn btn-outline-dark">
                            <center>
                                <img src={image4} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>View My Ratings and Review</h6>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/department" className="btn btn-outline-dark">
                            <center>
                                <img src={image2} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Show My Learning Materials</h6>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/department" className="btn btn-outline-dark">
                            <center>
                                <img src={image1} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
                            </center>
                            <div className="card-body">
                                <h6>Show Department Chapters</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContentCreator;