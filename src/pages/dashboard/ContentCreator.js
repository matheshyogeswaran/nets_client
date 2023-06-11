const ContentCreator = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4 m-2">
                    <button className="btn btn-outline-primary form-control shadow">Complete Guidance request</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">View My Ratings and Review</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">Show My Learning Materials</button>
                    <button className="btn btn-outline-primary form-control mt-2 shadow">Show Department Chapters</button>
                    {/* <button className="btn btn-outline-primary form-control mt-2 shadow">View Department Chapters</button> */}
                </div>
                <div className="col-md-4 m-2">
                    {/* <div className="border border-dark rounded shadow">
                        <div className="p-3">
                            <div className="text-center"><b>View Employee Reports</b></div><hr></hr>
                            <button className="btn btn-outline-success form-control mt-1 shadow">Hired Employee</button>
                            <button className="btn btn-outline-success form-control mt-2 shadow">Content Creator</button>
                            <button className="btn btn-outline-success form-control mt-2 shadow">Quiz Report of Hired Employees</button>
                        </div>
                    </div> */}
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}
export default ContentCreator;