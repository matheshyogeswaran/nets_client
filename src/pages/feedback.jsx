import { useContext } from "react";
import { AppContext } from "../App";
import Avatar from "react-avatar";

const Feedback = () => {
  const { employee } = useContext(AppContext);
  return (
    <div>
      <h1 className="py-4 result-head card ps-5">Project Submission</h1>
      <div className="container feedback shadow ">
        <h3 className="pb-5 pt-3">Feedback</h3>
        <div className="pb-4 d-flex">
          <span className="pe-5">Score</span>
          <span className="ps-4 ms-2">{employee[0].subScore}/100</span>
        </div>
        <div className="pb-5 d-flex">
          <span className="pe-5 me-1">Feedback</span>
          <span>{employee[0].feedback}</span>
        </div>
        <div className="pb-4 d-flex">
          <span className="pe-5">Graded on</span>
          <span>{employee[0].gradedOn}</span>
        </div>
        <div className="">
          <span className="pe-5">Graded by</span>
          <Avatar round name="Arjunan V.R Christy" />
          <span className="ms-2">{employee[0].gradedBy}</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
