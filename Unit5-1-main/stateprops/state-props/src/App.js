// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const navbar = [{ image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100", title: "Top Offers" },
  { image: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100", title: "Grocery" }];
  const [counter, setCounter]= useState(10)

  const handleChange=(value)=>{
    if(counter>=19){
     alert("Max Limit Reached")
    }
    setCounter(counter+value)
  }
  const handleMultiply=(value)=>{
    if(counter>=19){
     alert("Max Limit Reached")
    }
    setCounter(counter*value)
  }
  
  return (
    <div className="App">
      <div>
        <h3 className={counter%2===0? "green":"red"}>Counter:{counter}</h3>
        <button onClick={()=>handleChange(1)}>Add</button>
        <button onClick={()=>handleChange(-1)}>Sub</button>
        <button onClick={()=>handleMultiply(2)}>Double</button>
      </div>
    </div>
  );
}

export default App;
