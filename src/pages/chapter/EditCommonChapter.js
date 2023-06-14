import image1 from "../../images/2.svg";
import swal from "sweetalert";
import "../../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import validator from "validator";
import { useState } from "react";

const EditChapter = () => {
    const { id, name } = useParams();
    const [newChapterName, setNewChapterName] = useState(name);
    const [reason, setReason] = useState("");
    function submitEdit(e) {
        e.preventDefault();

        // Validate chapter name
        if (!validator.isAlpha(newChapterName.replace(/[^A-Za-z]/g, ""))) {  //must contain atleast 1 alphabet
            swal({
                icon: "warning",
                text: "Chapter name must contain at least one alphabet letter.",
            });
            return;
        }

        axios
            .post("http://localhost:1337/commonchapters/editChapter", {
                fromName: name,
                newName: newChapterName,
                reason: reason,
                editedId: id,
            })
            .then((res) => {
                if (res.data.status === true) {
                    swal({
                        icon: "success",
                        text: res.data.message,
                    });
                } else {
                    swal({
                        icon: "warning",
                        text: res.data.message,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="alert mt-3 heading"><h5>Edit Common Chapter</h5></div>
            <div className="columns mt-5">
                <form name="myForm" onSubmit={submitEdit}>
                    <div className="field">
                        <label className="ml-5 createchap">Chapter Name after edit</label>
                        <div className="control">
                            <input
                                type="text"
                                value={newChapterName}
                                onChange={(e) => {
                                    setNewChapterName(e.target.value);
                                }}
                                name="cname"
                                className="input my-3 ml-5"
                                placeholder="Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="ml-5 createchap">Reason</label>
                        <div className="control">
                            <input
                                type="text"
                                name="dreason"
                                className="input my-3 ml-5"
                                placeholder="Reason"
                                required
                                value={reason}
                                onChange={(e) => {
                                    setReason(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className="control">
                        <button
                            type="submit"
                            className="btn btn-success mr-1 column is-half text-white"
                        >
                            Save
                        </button>
                    </div>

                    <div>
                        <img src={image1} className="picside2" draggable={false} alt="this is image" />
                    </div>
                    <div className="field"></div>
                </form>
            </div>
        </div>
    );
};

export default EditChapter;
