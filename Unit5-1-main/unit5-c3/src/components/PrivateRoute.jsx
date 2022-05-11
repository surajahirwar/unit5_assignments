import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext"
export const ProtectedRoute=({children})=>{
const {isAuth}= useContext(AuthContext);
if(isAuth==false)
{
    return <Navigate to={"/login"} replace={true}></Navigate>
}
else
{
    return children
}
}