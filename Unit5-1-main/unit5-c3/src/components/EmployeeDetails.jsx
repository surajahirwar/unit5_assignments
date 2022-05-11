import {useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {useParams} from "react-router-dom"
export const EmployeeDetails = () => {
    const [data, setData]= useState({});
    const {isAuth}= useContext(AuthContext);
    const {id}= useParams();

    useEffect(()=>{
        getData(); 
    }, []);

    const getData=async()=>{
        let res= await fetch(`http://localhost:8080/employees/${id}`);
        let data= await res.json();
        setData(data);
    }
    return (
      <div className="user_details" style={{display:"flex", flexDirection:"column", width:"15%", margin:"30px auto"}}>
        <img src={data.image} className="user_image" style={{height:"300px"}} />
        <h2 className="user_name">{data.username}</h2>
        <span className="user_salary"><h4>Rs {data.salary}</h4></span>
        <span className="tasks">
        <u>Tasks:</u><p>{data.tasks}</p>
        </span>
        <u>Status: </u><b style={{padding:"10px"}} className="status">{data.status}</b>
        <u>Title: </u><b style={{padding:"10px"}} className="title">{data.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button style={{background:"crimson", color:"white", border:"none", padding:"10px"}} className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button  style={{background:"greenyellow", color:"black", border:"none", padding:"10px"}} className="promote">promote</button>
      </div>
    );
  };