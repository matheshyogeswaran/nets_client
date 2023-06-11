import AssignFinalAssignment from "../pages/final_project_assignment/AssignFinalAssignment";
import Submission from "../pages/projSubmission/submission";
import Evaluate from "../pages/projSubmission/Evaluate";
import Feedback from "../pages/projSubmission/feedback";
import FinalAssignmentSubmission from "../pages/final_project_assignment/FinalAssignmentSubmission";
import ShowAssignmentRequests from "../pages/final_project_assignment/ShowAssignmentRequests";
import EditAssignedTasks from "../pages/final_project_assignment/EditAssignedTasks";
import ManageFinalProjectAssignment from "../pages/final_project_assignment/ManageFinalProjectAssignment";
import UpdateFinalProjectAssignment from "../pages/final_project_assignment/UpdateFinalProjectAssignment";
import OverDuedFinalProjectAssignment from "../pages/final_project_assignment/OverDuedFinalProjectAssignment";
import Editlog from "./../pages/projSubmission/editLog";
import ProjScore from "./../pages/projSubmission/projectScore";
export const final_project_assignment_routes = [
  {
    path: "/assignFinalProjectAssignment/:id",
    ele: <AssignFinalAssignment />,
    availability: ["Supervisor"],
  },
  {
    path: "/updateFinalProjectAssignment/:id",
    ele: <UpdateFinalProjectAssignment />,
    availability: ["Supervisor"],
  },
  {
    path: "/submission",
    ele: <Submission />,
    availability: ["Supervisor"],
  },
  {
    path: "/evaluate",
    ele: <Evaluate />,
    availability: ["Supervisor"],
  },
  {
    path: "/projectScore",
    ele: <ProjScore />,
    availability: ["Supervisor"],
  },
  {
    path: "/feedback",
    ele: <Feedback />,
    availability: ["Hired Employee"],
  },
  {
    path: "/scoreEditLog",
    ele: <Editlog />,
    availability: ["System Admin"],
  },
  {
    path: "/submitanswer",
    ele: <FinalAssignmentSubmission />,
    availability: ["Hired Employee"],
  },
  {
    path: "/finalProjectAssignmentRequests",
    ele: <ShowAssignmentRequests />,
    availability: ["Supervisor"],
  },
  {
    path: "/editAssignedProjectAssignment",
    ele: <EditAssignedTasks />,
    availability: ["Supervisor"],
  },
  {
    path: "/manageFinalProjectAssignment",
    ele: <ManageFinalProjectAssignment />,
    availability: ["Supervisor"],
  },
  {
    path: "/overduedAssignments",
    ele: <OverDuedFinalProjectAssignment />,
    availability: ["Supervisor"],
  },
];
