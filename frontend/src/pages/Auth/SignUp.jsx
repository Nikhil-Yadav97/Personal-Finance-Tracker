import React,{useState} from 'react'
import AuthLayout from "../../components/layouts/AuthLayout";
import { ServerRouter, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

function SignUp() {
  const [profilePic,setProfilePic]=useState(null)
  const [fullName,setFullName]=useState("")
  const [email,setEmail]=useState("")

  const [error,setError]=useState("")

  const navigate=useNavigate();

  const handleSignUp=async (e)=>{}
  return (
    <AuthLayout>
      
    </AuthLayout>
  )
}

export default SignUp