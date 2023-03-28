import React from "react";
import { Link } from "react-router-dom";
const HiredEmployee = () => {
    return (
        <div>
            <Link to="/learnchapter" className=" form-control btn btn-light mt-2 border border-dark">View My Chapters</Link>
            <Link to="/request-guidance-ticket" className=" form-control btn btn-light mt-2 border border-dark">New Guidance Request Ticket</Link>
            <Link to="/enrollrequestemployee" className=" form-control btn btn-light mt-2 border border-dark">Enroll Additional Chapter</Link>
            <Link to="/leaderboard" className=" form-control btn btn-light mt-2 border border-dark">View Leaderboard</Link>
        </div>
    );
}
export default HiredEmployee;