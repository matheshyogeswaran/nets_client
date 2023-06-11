import { Link } from "react-router-dom";
import depChap from "../../images/systemAdmin/depChap.svg";
import learning from "../../images/systemAdmin/learning.svg";
import manageGuidance from "../../images/systemAdmin/manageGuidance.svg";
import rating1 from "../../images/systemAdmin/rating1.svg";

const ContentCreator = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card shadow">
                        <Link to="/department" className="btn btn-outline-dark">
                            <center>
                                <img src={manageGuidance} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
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
                                <img src={rating1} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
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
                                <img src={learning} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
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
                                <img src={depChap} className="card-img-top" style={{ "width": "100px" }} alt="card" ></img>
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