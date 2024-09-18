import { useState } from "react"
import AddProductPresentaion from "./AddProductPresentation";
import { useDispatch } from "react-redux";
import { createProduct } from "../../Redux/Slices/ProductSlice";

function AddProduct() {

       const dispatch = useDispatch()
        const [addProduct,setAddProduct] = useState({
            productName:'',
            description:'',
            price:0,
            quantity:0,
            category:'',
            productImage:[]
        })

        function handleUserInput(e){
          const {name,value} = e.target;
            setAddProduct({
                ...addProduct,
                 [name]:value
               
            })
        }
       async function handleFormSubmit(e){
            e.preventDefault()
           const apiResponse = await dispatch(createProduct(addProduct))
           console.log('api response',apiResponse)
        }

  return (
    <>
    <AddProductPresentaion handleFormSubmit = {handleFormSubmit} handleUserInput ={handleUserInput}/>
    </>
  )
}

export default AddProduct;