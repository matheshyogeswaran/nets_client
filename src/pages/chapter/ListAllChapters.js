import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Chapters from "../../data/Chapters.json"
const ListAllChapters = () => {
    return (
        <div>
            <div className="container mt-3">
                <Link className="disabled form-control btn btn-outline-dark btn-lg shadow-lg">Get Your Final Project Assignment !</Link>
                <div class="row">
                    {
                        Chapters.map((item) => {
                            return (
                                (item.department === "IT")
                                    ?
                                    (item.chapters).map((chapter) => {
                                        return (
                                            <div class="col-md-6 mt-3">
                                                <div class="card shadow border border-2">
                                                    <div class="card-body">
                                                        <h5 class="card-title"><i class="bi bi-journal-text me-2"></i>{chapter}</h5>
                                                        <hr></hr>
                                                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                        <Link to="#" class=" btn btn-outline-secondary">Continue <i class="bi bi-arrow-right-circle"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            )
                        })
                    }

                </div>
            </div>
            <br></br><br></br>
        </div>
    );
}
export default ListAllChapters