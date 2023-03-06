import image1 from "../../images/2.svg";
import swal from "sweetalert";
import "../../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const EditJobtitle = () => {
  const { id, name } = useParams();
  const [newJobtitleName, setNewJobtitleName] = useState(name);
  const [reason, setReason] = useState("");
  function submitEdit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:1337/jobtitles/editJobtitle", {
        fromName: name,
        newName: newJobtitleName,
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
      <div className="form-control mt-3 bg-dark text-white">Edit Jobtitle</div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={submitEdit}>
          <div className="field">
            <label class="ml-5 createchap">Jobtitle Name after edit</label>
            <div className="control">
              <input
                type="text"
                value={newJobtitleName}
                onChange={(e) => {
                  setNewJobtitleName(e.target.value);
                }}
                name="jname"
                className="input my-3 ml-5"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label class="ml-5 createchap">Reason</label>
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
              className="btn btn-primary mr-1 column is-half text-white"
            >
              Save
            </button>
          </div>

          <div>
            <img src={image1} draggable={false} alt="this is image" />
          </div>
          <div className="field"></div>
        </form>
      </div>
    </div>
  );
};

export default EditJobtitle;
