import Home from "./pages/Home"
import Signup from './pages/Auth/Signup'
import { Route, Routes } from "react-router"
import Login from "./pages/Auth/Login"

function App() {
 
  return (
   <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/auth/signup" element = {<Signup/>}/>
      <Route path='/auth/login' element={<Login />} />
    </Routes>
       
   </>
  )
}

export default App
