
import { Home } from './components/Home'
import { About } from "./components/About"
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'

import { Routes, Route } from "react-router-dom"

import "./App.css"
import { UsersList } from './components/UsersList'
import { UserDetails } from './components/UsersDetails'
import { PrivateComponent } from './components/PrivateComponent'



function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/users/:id' 
          element={
            <PrivateComponent>
                  <UserDetails />
          </PrivateComponent>
          }></Route>

        <Route path='/users' element={
          <PrivateComponent>
          <UsersList /> 
          </PrivateComponent>
          }></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}>{" "}</Route>

      </Routes>


      
  
    </div> 
  )
}

export default App
