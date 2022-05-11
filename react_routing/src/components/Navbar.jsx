import { Link } from "react-router-dom"


// import { About } from "./About";

// import { Home } from "./Home";

import "./Style.css"


export const  Navbar = () => { 

    return (
      
        <div className="nav">
              <Link to="/">Home</Link>
        
              <Link to="/about">About</Link>

              <Link to="/users">UserList</Link>

              {/* <Link to="/users:id">UserDetails</Link> */}

        </div>
    )
}