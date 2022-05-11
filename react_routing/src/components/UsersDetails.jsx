import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";



export const UserDetails = () =>{

    const {isAuth} = useContext(AuthContext)

    const {id} = useParams();

    const [user , setUsers] = useState({});

    useEffect(() =>{

            axios.get(`https://reqres.in/api/users/${id}`).then(( { data } )=>{

                setUsers(data.data);    
    
            });
    }, []);

    if(!isAuth){

        return <Navigate to={"/login"} />
    }
    
    return (

            <div>
                <div> 
                    <img src={user.avatar} alt="" />
                </div>
                <div>
                    First_Name:{user.first_name}
                </div>
                <div>
                    First_Last:{user.last_name}
                 </div>


            </div>

    )
}