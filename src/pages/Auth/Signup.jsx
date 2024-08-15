import { useState } from "react";
import toast from "react-hot-toast";
import SignUpPresentation from "./SignupPresentation";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createAccount } from "../../Redux/Slices/AuthSlice";
function Signup() {
    const dispatch = useDispatch();
   const navigate = useNavigate()
    const [signUpState,setSignUpState] = useState({
        firstName:'',
        email:'',
        password:'',
        mobileNumber:''
    })

    function handleUserInput(e){
     const {name,value} = e.target;
     setSignUpState({
        ...signUpState,
       [name]:value
     })
    }

    async function handleFormSubmit(e){
        e.preventDefault(); // prevent the form from reloading the page
       console.log(signUpState.mobileNumber.length)
        if(!signUpState.firstName || !signUpState.email || !signUpState.password || !signUpState.mobileNumber){
            toast.error('Missing value from the form')
            return
        }
        else if(signUpState.mobileNumber.length < 10 || signUpState.mobileNumber.length > 11){
            toast.error('mobile number should be 10 digit')
            return
        }
        else if(!signUpState.email.includes('@')||!signUpState.email.includes('.')){
            toast.error('Invalid email address')
            return
        }
        const apiReponse = await dispatch(createAccount(signUpState));
        console.log("Api response", apiReponse);
        if(apiReponse.payload.data.success){
            navigate('/auth/login')
        }
    }

  return (
    <>
     <SignUpPresentation  handleUserInput={handleUserInput} handleFormSubmit={handleFormSubmit}/>
    </>
  );
}

export default Signup;
