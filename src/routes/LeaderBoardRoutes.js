import LeaderboardSup from "../pages/leaderboard/LeaderboardSup";
import LeaderBoard from "../pages/leaderboard/leaderBoard";
import { userRoles as ur } from "../data/userRole";

export const leader_board_routes = [
    { 
        path: "/leaderboard", 
        ele: <LeaderBoard />,
        availability:[ur.hiredEmployee]
    },
    { 
        path: "/leaderboardsup", 
        ele: <LeaderboardSup />,
        availability:[ur.supervisor]
    },
]