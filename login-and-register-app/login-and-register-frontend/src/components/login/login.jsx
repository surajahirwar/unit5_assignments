import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import{ useNavigate } from "react-router-dom"

function Login({ setLoginUser }) {

    const history = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8080/login", user)
            .then(res => {
                alert(res.data.message)
                // setLoginUser(res.data.user)
                console.log(res.data.user)
                console.log(res.data.message)
                if(res.data.message == "Login Successfull"){
                    history("/product")
                }else{
                    history("/login")
                }
                

            })
    }

    return (
        <div className="login">
            <div className="divone">
                <span><button onClick={()=> {history("/register")}} className="buttonone buttonwhite">New to Lyst?</button></span><span><button className="buttonone buttonblack">Already a member</button></span>
                <h2>Sign in</h2>
                <div className="labell"> 
                    <label htmlFor="">Email address</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email address"></input>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="min 8 characters"></input>
                </div>
                <div className="button signin" onClick={login}>Sign in</div>
                <div className="or">or</div>
                <div className="button registerr" onClick={() => history("/register")}>Register</div>
            </div>

            <div className="divtwoo">
                <div className="divthree">
                    <h3>As a Lyst member you can...</h3>
                    <div className="span">
                        <div>
                            <img className="icon" src="https://www.svgrepo.com/show/138102/bookmark-silhouette-variant.svg" alt="" />
                            <p>Save your searches</p><br />
                        </div>
                        <div>
                            <img className="icon" src="https://www.svgrepo.com/show/39500/heart.svg" alt="" />
                            <p>Create waishlist</p><br />
                        </div>
                        <div>
                            <img className="icon" src="https://www.svgrepo.com/show/274524/bell-alert.svg" alt="" />
                            <p>Get alerts on your items</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Login