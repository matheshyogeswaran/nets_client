import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListAllChapters from "../pages/chapter/ListAllChapters";

const UserRoleImports = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/learnchapter"
                    element={
                        <ListAllChapters></ListAllChapters>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
export default UserRoleImports