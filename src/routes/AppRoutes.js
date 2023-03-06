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
import Jobtitle from "../pages/jobtitle/Jobtitle";
import Chapter from "../pages/chapter/Chapter";
import ViewChapter from "../pages/chapter/ViewChapter";
import AllocateChapter from "../pages/chapter/AllocateChapter";
import EditAllocate from "../pages/chapter/EditAllocate";
import Home from "../pages/home_pages/Home";
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
                <Route exact path="/" element={<Home></Home>} />
                <Route exact path="/department/" element={<Department />} />
                <Route exact path="/jobtitle/" element={<Jobtitle />} />
                <Route exact path="/chapter/" element={<Chapter />} />
                <Route exact path="/viewchapter/" element={<ViewChapter />} />
                <Route exact path="/allocatechapter/" element={<AllocateChapter />} />
                <Route exact path="/editallocatechapter/:id/:name" element={<EditAllocate />} />
                <Route exact path="/profile/" element={<ProfileOverview />} />
                <Route exact path="/sample/" element={<Sample />} />
                <Route exact path="/permanentdeletechapter/" element={<PermanentDeleteChapter />} />
                <Route exact path="/enrollrequestsupervisor/" element={<EnrollRequestSupervisor />} />
                <Route exact path="/enrollrequestemployee/" element={<EnrollRequestEmployee />} />
                <Route exact path="/newdep/" element={<AddDepartment />} />
                <Route exact path="/editdep/:id/:name" element={<EditDepartment />} />
                <Route exact path="/deletedep/:id" element={<DeleteDepartment />} />
                <Route exact path="/newjob/" element={<AddJobtitle />} />
                <Route exact path="/editjob/:id/:name" element={<EditJobtitle />} />
                <Route exact path="/deletejob/:id" element={<DeleteJobtitle />} />
                <Route exact path="/newchap/" element={<AddChapter />} />
                <Route exact path="/editchap/:id/:name" element={<EditChapter />} />
                <Route exact path="/deletechap/:id" element={<DeleteChapter />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;