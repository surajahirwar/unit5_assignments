import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange =(elem) => {
      const {id, value} = elem.target;

      setForm({
        ...form,[id] : value
      })
    }

    const handleSubmit = async (elem) => {
      elem.preventDefault();

      const data = await fetch("https://reqres.in/api/login", {
        method:"POST",
        headers: {
          "Content-type":"application/json"
        },
        body: JSON.stringify(form)
      });

      const res = await data.json();

    //   console.log(res.token)

      
      if(res.token) {
        // handleAuth(true);
        // toggleAuth(res.token);
        localStorage.setItem("authReducer", JSON.stringify({token: res.token, authState: true}))
        navigate("/")
      }
      else {
        alert("Please Enter valid details")
      }
  }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} action="" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px"
            }}>
                <input onChange={handleChange} id="email" type="email" placeholder="Enter E-mail"/>

                <input onChange={handleChange} id="password" type="text" placeholder="Enter Password"/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}