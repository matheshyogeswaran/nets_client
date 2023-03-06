//React Imports
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Util Imports
import RequireAuth from '../utils/RequireAuth';
import RedirectIfLoggedIn from '../utils/RedirectIfLoggedIn';

// Page Imports
import Home from "../pages/home_pages/Home";
import AvailableUserRoles from '../pages/user_role/AvailableUserRoles';
import CreateUserRole from '../pages/user_role/CreateUserRole';
import HiredEmployee from '../pages/home_pages/HiredEmployee';
import EditUserRole from '../pages/user_role/EditUserRole';
import GoogleLogin from '../pages/login/GoogleLogin';
import PendingUserApproval from '../pages/login/PendingUserApproval';
import PromoteDemote from '../pages/user_role/PromoteDemote';
import ShowUsersUnderRole from '../pages/user_role/SHowUsersUnderRole';
import Jobtitle from "../pages/jobtitle/Jobtitle";
import Chapter from "../pages/chapter/Chapter";
import ViewChapter from "../pages/chapter/ViewChapter";
import AllocateChapter from "../pages/chapter/AllocateChapter";
import EditAllocate from "../pages/chapter/EditAllocate";
import Department from "../pages/department/Department";
import EnrollRequestSupervisor from "../pages/chapter/EnrollRequestSupervisor";
import EnrollRequestEmployee from "../pages/chapter/EnrollRequestEmployee";
import AddDepartment from "../pages/department/AddDepartment";
import EditDepartment from "../pages/department/EditDepartment";
import DeleteDepartment from "../pages/department/DeleteDepartment";
import ProfileOverview from "../pages/profile/ProfileOverview";
import PermanentDeleteChapter from "../pages/chapter/PermanentDeleteChapter";
import AddJobtitle from "../pages/jobtitle/AddJobtitle";
import EditJobtitle from "../pages/jobtitle/EditJobtitle";
import DeleteJobtitle from "../pages/department/DeleteJobtitle";
import AddChapter from "../pages/chapter/AddChapter";
import EditChapter from "../pages/chapter/EditChapter";
import DeleteChapter from "../pages/chapter/DeleteChapter";
import Sample from "../pages/Sample";

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

                <Route exact path="/department/" element={<RequireAuth><Department /></RequireAuth>} />
                <Route exact path="/jobtitle/" element={<RequireAuth><Jobtitle /></RequireAuth>} />
                <Route exact path="/chapter/" element={<RequireAuth><Chapter /></RequireAuth>} />
                <Route exact path="/viewchapter/" element={<RequireAuth><ViewChapter /></RequireAuth>} />
                <Route exact path="/allocatechapter/" element={<RequireAuth><AllocateChapter /></RequireAuth>} />
                <Route exact path="/editallocatechapter/:id/:name" element={<RequireAuth><EditAllocate /></RequireAuth>} />
                <Route exact path="/profile/" element={<RequireAuth><ProfileOverview /></RequireAuth>} />
                <Route exact path="/sample/" element={<RequireAuth><Sample /></RequireAuth>} />
                <Route exact path="/permanentdeletechapter/" element={<RequireAuth><PermanentDeleteChapter /></RequireAuth>} />
                <Route exact path="/enrollrequestsupervisor/" element={<RequireAuth><EnrollRequestSupervisor /></RequireAuth>} />
                <Route exact path="/enrollrequestemployee/" element={<RequireAuth><EnrollRequestEmployee /></RequireAuth>} />
                <Route exact path="/newdep/" element={<RequireAuth><AddDepartment /></RequireAuth>} />
                <Route exact path="/editdep/:id/:name" element={<RequireAuth><EditDepartment /></RequireAuth>} />
                <Route exact path="/deletedep/:id" element={<RequireAuth><DeleteDepartment /></RequireAuth>} />
                <Route exact path="/newjob/" element={<RequireAuth><AddJobtitle /></RequireAuth>} />
                <Route exact path="/editjob/:id/:name" element={<RequireAuth><EditJobtitle /></RequireAuth>} />
                <Route exact path="/deletejob/:id" element={<RequireAuth><DeleteJobtitle /></RequireAuth>} />
                <Route exact path="/newchap/" element={<RequireAuth><AddChapter /></RequireAuth>} />
                <Route exact path="/editchap/:id/:name" element={<RequireAuth><EditChapter /></RequireAuth>} />
                <Route exact path="/deletechap/:id" element={<RequireAuth><DeleteChapter /></RequireAuth>} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;