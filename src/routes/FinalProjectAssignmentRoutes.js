import AssignFinalAssignment from "../pages/final_project_assignment/AssignFinalAssignment";
import Submission from "../pages/projSubmission/submission";
import Evaluate from "../pages/projSubmission/Evaluate";
import Feedback from "../pages/projSubmission/feedback";
export const final_project_assignment_routes =[
    { 
        path: "/assignFinalProjectAssignment", 
        ele: <AssignFinalAssignment/>
    },
    { 
        path: "/submission", 
        ele: <Submission/>
    },
    { 
        path: "/evaluate", 
        ele: <Evaluate/>
    },
    { 
        path: "/feedback", 
        ele: <Feedback/>
    },
]