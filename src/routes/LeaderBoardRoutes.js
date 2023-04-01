import LeaderboardSup from "../pages/leaderboard/LeaderboardSup";
import LeaderBoard from "../pages/leaderboard/leaderBoard";

export const leader_board_routes = [
    { 
        path: "/leaderboard", 
        ele: <LeaderBoard /> 
    },
    { 
        path: "/leaderboardsup", 
        ele: <LeaderboardSup /> 
    },
]