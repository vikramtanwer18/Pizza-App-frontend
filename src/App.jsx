import Home from "./pages/Home"
import Signup from './pages/Auth/Signup'
import { Route, Routes } from "react-router"
import Login from "./pages/Auth/Login"
import NotFound from "./pages/NotFound"
import Denied from "./pages/Denied"
import AddProduct from "./pages/Admin/AddProduct"
import Products from "./pages/Products/Products"
import ProductDetails from "./pages/Products/ProductDetails"
import CartDetails from "./pages/Cart/CartDetails"
import ProductOrder from "./pages/Order/ProductOrder"
import OrderSuccess from "./pages/Order/OrderSuccess"
import RequireAuth from "./components/Auth/RequireAuth"

function App() {
 
  return (
   <>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/auth/signup" element = {<Signup/>}/>
      <Route path='/auth/login' element={<Login />} />
      ~
      <Route element={<RequireAuth/>}>
      <Route path='/admin/addProduct' element={<AddProduct />} />
      <Route path='/products' element ={ <Products/>}/>
      <Route path = '/product/:productId' element ={<ProductDetails/>}/>
      <Route path = '/cart' element= {<CartDetails/>} />
      <Route path = '/order' element = {<ProductOrder/>}/>
      <Route path ='/order/success' element={<OrderSuccess/>}/>  
      </Route>

      <Route path="/denied" element={<Denied />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
       
   </>
  )
}

export default App
