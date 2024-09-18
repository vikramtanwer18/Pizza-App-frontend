import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";

const initialState = {
      productData : []
}


export const createProduct = createAsyncThunk('/register/product',async(data)=>{
   try {
    console.log('incoming data is',data)
    const product = axiosInstance.post('/register/product',data);
    toast.promise(product,{
        loading:'Wait for a time product is creating....',
        error:"Something went wrong product is not create",
        success:"product is successfully created"
    })
   } catch (error) {
    console.log(error)
   }
   const apiResponse = await product ;
   return apiResponse
})


export const getAllProducts = createAsyncThunk('/get/products',async()=>{
   try {
    const products = axiosInstance.get('/products')
    toast.promise(products,{
        loading:'Wait for a time products is fetching....',
        error:"Something went wrong products is not fetching",
        success:"products is successfully fetched"
    })
    const apiResponse = await products;
    return apiResponse;
   } catch (error) {
    console.log(error)
   }
})


export const getProductDetails = createAsyncThunk('/get/product',async(productId)=>{
    try {
       
     const product = axiosInstance.get(`product/${productId}`)
     toast.promise(product,{
         loading:'Wait for a time product is fetching....',
         error:"Something went wrong product is not fetching",
         success:"product is successfully fetched"
     })
     const apiResponse = await product;

     return apiResponse;
    } catch (error) {
     console.log(error)
    }
 })

const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.productData = action.payload?.data?.data
        })
    }
})

export default ProductSlice.reducer;


