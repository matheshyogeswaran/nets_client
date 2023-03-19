import React from "react";
import NavBar from "../../components/NavBar";
const AssignFinalAssignment = () => {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="mt-4 container">
                <div className="bg-dark text-white p-3 rounded">
                    Assign Final Project Assignment
                </div>
                <form className="mt-4">
                    <div className="form-floating mb-3">
                        <input required type="text"
                            className="form-control"
                            placeholder="Final Project Assignment Title"
                            id="title"
                        >
                        </input>
                        <label htmlFor="title">Final Project Assignment Title</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            rows="3"
                            placeholder="Final Project Assignment Description"
                            className="form-control"
                            id="desc"
                        >
                        </textarea>
                        <label htmlFor="desc">Final Project Assignment Description</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input required type="text"
                            className="form-control"
                            placeholder="Deadline"
                            onFocus={(e) => e.target.type = 'date'}
                            id="dl"
                        >
                        </input>
                        <label htmlFor="dl">Select Deadline</label>
                    </div>

                    <div className="mb-3">
                        <input className="form-control" type="file" multiple />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <button type="submit" className="form-control btn btn-outline-primary">Submit</button>
                        </div>
                        <div className="col-md-6">
                            <button type="reset" className="form-control btn btn-outline-warning">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
export default AssignFinalAssignment;