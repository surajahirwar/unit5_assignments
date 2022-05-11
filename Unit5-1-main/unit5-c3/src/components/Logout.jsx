import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
export const Logout=()=>{
    const navigate= useNavigate();
    const {handleToken}= useContext(AuthContext)
    const logoutFunction=()=>{
        handleToken(false)
        navigate("/");
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Are you Sure you wanna Log Out?</h1>
            <button style={{background:"crimson", padding:"10px", fontSize:"20px", border:"none"}} onClick={logoutFunction}>Logout</button>
        </div>
   )
}