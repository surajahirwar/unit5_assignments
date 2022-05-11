
import { Navbar } from "./components/Navbar"
import { Card } from "./components/Body/Card"
// import { useContext } from "react"
// import { LangContext } from "./contexts/LanguageContext" 

function App() {
  
  // const { handaleChange } = useContext(LangContext)

  return (
    <div className="App">
{/*     
      <button onClick={() =>{

        handaleChange() 

      } }>Change language</button> */}
          <Navbar />  
          <Card />
    </div>
  )
}

export default App
