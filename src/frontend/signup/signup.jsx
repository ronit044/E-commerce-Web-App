import React, { useState } from 'react';
import {
  SignupContainer,
  SignupForm,
  FormTitle,
  FormInput,
  FormButton,
  Warning
} from './signup_css'; // Import styles
import Axios from '../..//Axios';

const Signup = () => {
    const [SBool,setSBool]=useState(false)
    const [Err,setErr]=useState("")
    async function SubmitHandle(e){
        e.preventDefault();
        const {firstName,lastName,email,password}=e.target.elements;
        const response=await Axios.post("/Signup",{"_id":email.value,"FullName":firstName.value+" "+lastName.value,"email":email.value,"Password":password.value});
        if(response.data.Status===true){
            window.location.href="/login";
        }
        else{
            setErr(response.data.Status);
            setSBool(true);
        }
    }
  return (
    <SignupContainer>
      <SignupForm onSubmit={SubmitHandle}>
        <FormTitle>Create an Account</FormTitle>
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          required
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
         required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        {SBool?<Warning>{Err}</Warning>:null}
        <FormButton type="submit">Sign Up</FormButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
