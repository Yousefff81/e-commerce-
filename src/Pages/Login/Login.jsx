import React, { useContext, useState } from 'react';


import {useFormik} from "formik"
import HomePage from '../HomePage/HomePage';
import axios from "axios"
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../Usercontext/UserContext';



function Login() {

const {setuserToken}= useContext(UserContext)
const [error , setError]= useState(null)

  let navigate= useNavigate();
 async function LoginSubmit(values){
console.log(values);

let {data}=await axios
.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
.catch((err)=>setError(err.response.data.message))


if(data.message==="success"){
  navigate('/')
  localStorage.setItem("userToken",data.token)
  setuserToken(data.token)
}



  }

  let validationSchema=Yup.object({
    
    email:Yup.string().required().email(),
   
    password:Yup.string().required().matches(/^[A-Z][a-z0-9]{3,}$/ ,"must have first letter char"),
   
  })

  
let formik=useFormik({
initialValues:{

  email:"",
  password:"",
 
},

validationSchema,
onSubmit:LoginSubmit



})


return(
  <div className=' login mx-auto p-4  w-50' >
<h4>Login Now:</h4>
{error&&<div className='alert alert-danger'>{error}</div>}

<form onSubmit={formik.handleSubmit} >

<div className="mb-3">
<label >Email:</label>
<input type="email"



 value={formik.values.email} 
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 className='form-control ' name='email' id='email' />


{formik.errors.email&&formik.touched.email&&(
  <div className='alert alert-danger '>{formik.errors.email}</div>
)}
</div>


<div className="mb-3">
<label >password:</label>
<input type="password" 
value={formik.values.password} 
onChange={formik.handleChange}
 onBlur={formik.handleBlur}
className='form-control ' name='password' id='password' />

{formik.errors.password&&formik.touched.password&&(
  <div className='alert alert-danger '>{formik.errors.password}</div>
)}
</div>



<button disabled={!formik.isValid}  className='btn btn-danger mt-1 text-white p-2 mt-2 border rounded-pill '>
  Login

</button>

</form>


</div>
)
}
 


export default Login;
