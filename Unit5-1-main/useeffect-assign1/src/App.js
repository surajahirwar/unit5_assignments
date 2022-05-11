import Counter from './components/Counter';
import './App.css';
import { useState } from 'react';

function App() {
  var [show, setShow]= useState(true);

  const hideCounter=()=>{
    setShow(!show)
  }

  return (
    <div className="App">
      {show?<Counter/>:null}
      <button type="checkbox" onClick={()=>hideCounter()}>{show? "Hide Counter":"Show Counter"}</button>
    </div>
  );
}

export default App;
