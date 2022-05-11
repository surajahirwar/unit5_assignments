import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    //  use reqres to log user in.
    const { handleToken} =useContext(AuthContext);
    const navigate= useNavigate();

    const [form, setForm]= useState({
        email:"",
        password:""
    });
    
    const handlechange=(e)=>{
        const {id, value}= e.target;
        setForm ({...form, [id]:value})
    }
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let logindata=form;
        let login_data= JSON.stringify(logindata);
        let res= await fetch("https://reqres.in/api/login",
        {
            method:"POST",
            body:login_data,
            headers:
            {"Content-type":"application/json"}
        });
        let data=await res.json();
        if(data.token){
            handleToken(true);
            navigate("/")
        }
        else
        {
            alert("Email or Passowrd is invalid")
        }
        // console.log(data)

    }
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"

    return (
      <form onSubmit={handleSubmit} className="loginform" style={{width:"30%", display:"flex", flexDirection:"column", margin:"100px auto"}}>
        <input
          name="username"
          id="email"
          type="text"
          placeholder="Enter username"
          className="login_username"
          onChange={handlechange}
        />
        <input
          name="password"
          id="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
          onChange={handlechange}
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };