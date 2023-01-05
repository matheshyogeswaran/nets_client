import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
const Welcome = ()=>{
    return(
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container p-4">
                <h4>This is Sample Page...</h4>
                <Link to="/sample" className="btn btn-primary">Sample Page React Router DOM Navigation</Link>
            </div>
        </React.Fragment>
    );
}
export default Welcome;