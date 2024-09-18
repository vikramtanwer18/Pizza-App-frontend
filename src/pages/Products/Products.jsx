import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../Redux/Slices/ProductSlice";
import ProductList from "../../components/ProductList";

function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.product)
    useEffect(()=>{
     dispatch(getAllProducts())
    },[])
  return (
    <div>
    <ProductList products = {products}/>
  </div>
  )
}

export default Products