import { useState } from "react";
import toast from "react-hot-toast";

import SignUpPresentation from "./SignupPresentation";

function Signup() {
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

    function handleFormSubmit(e){
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
    }

  return (
    <>
     <SignUpPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput}/>
    </>
  );
}

export default Signup;
