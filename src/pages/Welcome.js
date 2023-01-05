import React from "react";
import { Link } from "react-router-dom";
const Welcome = ()=>{
    return(
        <React.Fragment>
            <h1>This is Welcome Page...</h1>
            <Link to="/sample">Sample Page React Router DOM Navigation</Link>
        </React.Fragment>
    );
}
export default Welcome;