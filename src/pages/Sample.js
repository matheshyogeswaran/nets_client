import React from "react";
import { Link } from "react-router-dom";
const Sample = ()=>{
    return(
        <React.Fragment>
            <h1>This is Sample Page...</h1>
            <Link to="/">Welcome Page React Router DOM Navigation</Link>
        </React.Fragment>
    );
}
export default Sample;