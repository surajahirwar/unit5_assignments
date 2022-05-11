import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
export const Navbar = () => {
    const {isAuth}= useContext(AuthContext)
    // console.log(isAuth)
    return (
      <div className="navbar" style={{display:"flex", justifyContent:"space-evenly"}}>
        <Link style={{color:"black", textDecoration:"none", fontSize:"30px"}} className="nav-home" to="/">
          Home
        </Link>
        <Link style={{color:"black", textDecoration:"none", fontSize:"30px"}} className="nav-list" to="/employees">
          Employee List
        </Link>
        <Link style={{color:"black", textDecoration:"none", fontSize:"30px"}} className="nav-admin" to="/admin">
          Admin
        </Link >
        {isAuth===true?<Link style={{color:"black", textDecoration:"none", fontSize:"30px"}} className="nav-logout" to="/logout">Logout</Link>: <Link style={{color:"black", textDecoration:"none", fontSize:"30px"}} className="nav-login" to="/login">Login</Link>}
        
  
       
      </div>
    );
  };