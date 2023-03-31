import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import swal from 'sweetalert';
import axios from "axios";
const RequireAuth = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (userData) {
            console.log("Check Token Validity");
            axios.post('http://localhost:1337/authentication/verifyToken', { token: userData.token })
                .then((res) => {
                    if (res.data.status === false) {
                        localStorage.removeItem("user");
                        navigate("/login", { replace: true });
                        swal("Session Time Out!", "Sorry, Session Time out. Login again to use the application.", "warning");
                    }
                }).catch((error) => {
                    console.log(error)
                });
        }
    }, [navigate, userData])

    //state={{path:location.pathname}} in else part will pass requested url to the component
    if (userData?.token) {
        return children
    } else {
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
}
export default RequireAuth