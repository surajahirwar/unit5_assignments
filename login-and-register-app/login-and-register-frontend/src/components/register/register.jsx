import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {  email, password,  } = user
        if( email && password  ){
            axios.post("http://localhost:8080/register", user)
            .then( res => {
                alert(res.data.message)
                history("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
            <div className="divone">
                <span><button className="buttonone buttonblackk">New to Lyst?</button></span><span><button onClick={()=> {history("/login")}} className="buttonone buttonwhitee">Already a member</button></span>
                <h2>Search thousands of <br /> fashion brands and stores <br /> all in one place</h2>
                <br />
                <p>We just need a few details from you first</p>
                {console.log("User", user)}
                <div className="label">
                    <label className="label" htmlFor="">Email address</label>
                    <input type="text" name="email" value={user.email} placeholder="Enter your Email address" onChange={ handleChange }></input>
                    <label className="label" htmlFor="">Password</label>
                    <input type="password" name="password" value={user.password} placeholder="Min 8 charactres" onChange={ handleChange }></input>
                </div>
                <div className="ticbox" style={{display : "flex"}}>
                    <input type="checkbox" name="check" id="checkbox" check={user.check} />
                    <p>I would like to hear about products,<br /> services, and sales, including personalized <br /> email alerts from Lyst. You can unsubscribe at <br /> any time</p>
                </div>
                <div className="button joinlyst" onClick={register} >Join Lyst</div>
                <div className="or">or</div>
                <div className="button log" onClick={() => history("/login")}>Login</div>

                <div className="term">
                By creating an account, you consent to Lyst’s <br /> Terms & Conditions. To learn more about how <br /> Lyst uses and protects your personal data, <br /> please read Lyst’s Privacy Policy.
                </div>
            </div>

            <div className="divtwo">
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

export default Register