import CompleteGuidanceTickets from "../components/GuidanceTickets/CompleteTickets/CompleteGuidanceTickets";
import DirectGuidanceTickets from "../components/GuidanceTickets/DirectTickets/DirectGuidanceTickets";
import RequestGuidanceTickets from "../components/GuidanceTickets/RequestTickets/RequestGuidanceTickets";

export const guidance_request_routes = [
    {
        path: "/request-guidance-ticket",
        ele: <RequestGuidanceTickets/>
    },
    {
        path: "/direct-guidance-ticket",
        ele: <DirectGuidanceTickets/>
    },
    {
        path: "/complete-guidance-ticket",
        ele: <CompleteGuidanceTickets/>
    },
]