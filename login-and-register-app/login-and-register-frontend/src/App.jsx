import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Productpage } from "./components/productpage/productpage"

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
     
    <Routes>
    <Route path="/product" element={<Productpage/>}/>
    {/* <Route exact path="/" element={user && user._id ? <Homepage  setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}></Route> */}
    <Route excat path="/" element = {<Homepage/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register"element={<Register/>} ></Route>
        </Routes>
    </div>  
  );
}

export default App;
