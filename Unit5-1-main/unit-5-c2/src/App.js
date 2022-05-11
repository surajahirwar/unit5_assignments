// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [data, setData]=useState([]);
  useEffect(()=>{
    getData();
  },[])

  const getData = async ()=>{
    let res= await fetch("http://localhost:8080/students");
    let data= await res.json();
    setData(data)
  }

  //Show page---------------------------
  const [show, setShow]=useState(true);
  const showComponents=(value)=>{
    if(value===true)
    {
      setShow(true)
    }
    else{
      setShow(false);
    }
  }
  return (
    <div className="App">
      <h1>{show===true?"STUDENTS LIST":"ADD STUDENT"}</h1>
      <div className="App">
      <button className="togglebtn" onClick={()=>showComponents(!show)}>{show===true?"Add Student":"Show Students"}</button>
      {show===true?<ShowStudents data={data}/>:<AddStudent/>}
    </div>
    </div>
  );
}

export default App;
