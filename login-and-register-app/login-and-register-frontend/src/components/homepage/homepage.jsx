import React from "react"
import "./homepage.css"
import {useNavigate} from 'react-router-dom'

const Homepage = () => {
    const history = useNavigate()
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => {history("/login")}} >Login</div>
        </div>
    )
}

export default Homepage