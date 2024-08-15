
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";


const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || 'false',
    role: localStorage.getItem('role') || '',
    data: JSON.parse(localStorage.getItem('data')) || {},
};

export const createAccount = createAsyncThunk('/auth/createAccount',async(data)=>{
   try {
    console.log('incoming data from the thunk',data)
    const response =  axiosInstance.post('/user',data)
    console.log('response',response)
    toast.promise(response,{
        success: (resolvedResponse)=>{
          return  resolvedResponse?.data?.message
        },
        loading:'Wait for a minute user is regestering...',
        error:"User can't registerd Something went wrong"
    })
    const apiResponse = await response;
    return apiResponse 
   } catch (error) {
    console.log(error)
   }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export default AuthSlice.reducer;