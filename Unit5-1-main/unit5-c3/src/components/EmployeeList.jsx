import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export const EmployeeList = () => {
    const [data, setData]= useState([]);
    const {isAuth}= useContext(AuthContext);

    useEffect(()=>{
        getData(); 
    }, []);

    const getData=async()=>{
        let res= await fetch("http://localhost:8080/employees");
        let data= await res.json();
        setData(data);
    }
    // console.log(data)
    return (
      <div className="list_container" >
        {/* On clicking this card anywhere, user goes to user details */}
        <div  className="employee_card" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)"}}>
            {data.map((e)=>(
                <Link to={`/employees/${e.id}`} style={{color:"black", textDecoration:"none", textAlign:"center", padding:"10px"}}>
                 <img src={e.image}  className="employee_image" />
                 <span className="employee_name"><h2>{e.username}</h2></span>
                 <span className="employee_title"><h2>{e.title}</h2></span>
                 </Link>
            ))}
        </div>
      </div>
    );
  };