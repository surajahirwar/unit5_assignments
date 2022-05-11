import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () =>{
 
    const { handleAuth } = useContext(AuthContext)

    const navigate = useNavigate();
         
    return (

        <div>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={() =>{

                    handleAuth(true);
                    
                    navigate("/");

            }} >submit</button>


        </div>
    );
};