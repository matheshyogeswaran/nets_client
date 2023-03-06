//React Imports
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Util Imports
import RequireAuth from '../utils/RequireAuth';
import RedirectIfLoggedIn from '../utils/RedirectIfLoggedIn';

// Page Imports
import AvailableUserRoles from '../pages/user_role/AvailableUserRoles';
import CreateUserRole from '../pages/user_role/CreateUserRole';
import HiredEmployee from '../pages/home_pages/HiredEmployee';
import EditUserRole from '../pages/user_role/EditUserRole';
import GoogleLogin from '../pages/login/GoogleLogin';
import Home from '../pages/home_pages/Home';
import PendingUserApproval from '../pages/login/PendingUserApproval';
import PromoteDemote from '../pages/user_role/PromoteDemote';
import ShowUsersUnderRole from '../pages/user_role/SHowUsersUnderRole';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<RedirectIfLoggedIn><GoogleLogin /></RedirectIfLoggedIn>} />
                <Route exact path="/login/" element={<RedirectIfLoggedIn><GoogleLogin /></RedirectIfLoggedIn>} />
                <Route exact path="/home" element={<RequireAuth><Home /></RequireAuth>} />
                <Route exact path="/availableuserroles" element={<RequireAuth><AvailableUserRoles /></RequireAuth>} />
                <Route exact path="/createUserRole" element={<RequireAuth><CreateUserRole /></RequireAuth>} />
                <Route exact path="/editUserRole/:userRole" element={<RequireAuth><EditUserRole /></RequireAuth>} />
                <Route exact path="/ShowUsersUnderRole/:userRole" element={<RequireAuth><ShowUsersUnderRole /></RequireAuth>} />
                <Route exact path="/promoteDemoteUser/" element={<RequireAuth><PromoteDemote /></RequireAuth>} />
                <Route exact path="/pendingrequests/" element={<RequireAuth><PendingUserApproval /></RequireAuth>} />
                <Route exact path="/hiredemployee/" element={<RequireAuth><HiredEmployee /></RequireAuth>} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;