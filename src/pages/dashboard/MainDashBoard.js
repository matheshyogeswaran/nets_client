import jwt_decode from "jwt-decode";
import HiredEmployee from "./HiredEmployee";
import SuperAdmin from "./SuperAdmin";
import Supervisor from "./Supervisor";
import ContentCreator from "./ContentCreator";
import SystemAdmin from "./SystemAdmin";

const MainDashBoard = () => {

    const userRole = jwt_decode(JSON.parse(localStorage.getItem("user")).token)?.userData?.userRole;

    return (
        <div>
            <div className="container mt-4">
                {(!userRole)
                    ?
                    <p>Loading</p>
                    :
                    (userRole === "Hired Employee")
                        ?
                        <HiredEmployee></HiredEmployee>
                        :
                        (userRole === "Super Admin")
                            ?
                            <SuperAdmin></SuperAdmin>
                            :
                            (userRole === "Content Creator")
                                ?
                                <ContentCreator></ContentCreator>
                                :
                                (userRole === "System Admin")
                                    ?
                                    <SystemAdmin></SystemAdmin>
                                    :
                                    (userRole === "Supervisor")
                                        ?
                                        <Supervisor></Supervisor>
                                        :
                                        null
                }
            </div>
        </div>
    )
}
export default MainDashBoard