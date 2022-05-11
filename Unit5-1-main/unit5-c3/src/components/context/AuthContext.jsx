import { createContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext= createContext();

export const AuthContextProvider= ({children})=>{
    const [isAuth, setAuth]= useState(false);

    const handleToken= (state)=>{
        setAuth(state);
        if(isAuth==true)
        {
        <Navigate to="/" replace={true}></Navigate>
        }
    }

    return (<AuthContext.Provider value={{isAuth, handleToken}}>{children}</AuthContext.Provider>)
};