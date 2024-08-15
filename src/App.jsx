import Home from "./pages/Home"
import Signup from './pages/Auth/Signup'
import { Route, Routes } from "react-router"
import Login from "./pages/Auth/Login"
import NotFound from "./pages/NotFound"
import Denied from "./pages/Denied"
import AddProduct from "./pages/Admin/AddProduct"

function App() {
 
  return (
   <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/auth/signup" element = {<Signup/>}/>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/admin/addProduct' element={<AddProduct />} />
      <Route path="/denied" element={<Denied />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
       
   </>
  )
}

export default App
