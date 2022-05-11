import {useState} from 'react';

function App() {
  const [runs, setRuns]=useState(72)
  const handleAdd=(value)=>{
    if(runs>=100)
    {
      runs=100;
      return <h1>India Won</h1>
      
    }
    setRuns(runs+value);
  }
  const [wicket, setWicket]= useState(2);
  const handleWicket=(value)=>{
    if(wicket>=10)
    {
      
      alert("All Out")
      wicket=10;
    }
    setWicket(wicket+value);
  }
  const won=[`India Won The match by ${10-wicket} wickets`]

  const [ball, setOver]= useState({
    over:0,
    balls:0
  })
  const over=ball.over
  const balls=ball.balls
 
const handleBall=(value)=>{
  if(balls===5)
  {
    
    setOver(prevState=>{
      return {...prevState,balls:-1,over:prevState.over+1}
    })
  }
  setOver(prevState=>{
    return {...prevState,balls:prevState.balls+value}
  })
}

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              runs
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              `${over}.${balls}`
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>handleAdd(1)}>Add 1</button>
        <button className="addScore4" onClick={()=>handleAdd(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>handleAdd(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        <button onClick={()=>handleWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleBall(1)}>Add 1</button>
      </div>

     <h1>{runs>=100?won[0]:won[1]}</h1>
    </div>
  );
}

export default App;

