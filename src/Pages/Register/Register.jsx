import React, { useState } from 'react';

import styles from './Register.module.css';
import {useFormik} from "formik"
import HomePage from '../HomePage/HomePage';
import axios from "axios"
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';



function Register () {
const [error , setError]= useState(null)

  let navigate= useNavigate();
 async function Yousef(values){


let {data}=await axios
.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
.catch((err)=>setError(err.response.data.message))
console.log(data);

if(data.message==="success"){
  navigate('/login')
}



  }

  let validationSchema=Yup.object({
    name:Yup.string().required("name at least 3 char").min(3,),
    email:Yup.string().required().email(),
    phone:Yup.string().required().matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/),
    password:Yup.string().required().matches(/^[A-Z][a-z0-9]{3,}$/ ,"must have first letter char"),
    rePassword:Yup.string().required().oneOf([Yup.ref("password")],"must match Password")
  })

  
let formik=useFormik({
initialValues:{
  name:"",
  email:"",
  password:"",
  rePassword:"",
  phone:"",
},

validationSchema,
onSubmit:Yousef



})


return(
  <div className=' Register mx-auto p-4 bg  w-50' >
<h4 className='text-danger'>Register Now:</h4>
{error&&<div className='alert alert-danger'>{error}</div>}

<form onSubmit={formik.handleSubmit} >

<div className="mb-3">
<label >Name:</label>
<input type="text"
 value={formik.values.name}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
  className='form-control ' name='name' id='name' />


{formik.errors.name&&formik.touched.name&&(
  <div className='alert alert-danger '>{formik.errors.name}</div>
)}
</div>



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


<div className="mb-3">
<label >rePassword:</label>
<input type="password" 
value={formik.values.rePassword}
onChange={formik.handleChange}
 onBlur={formik.handleBlur}
className='form-control ' name='rePassword' id='repassword' />


{formik.errors.rePassword && formik.touched.rePassword&&(
  <div className='alert alert-danger'>{formik.errors.rePassword}</div>
)
}
</div>

<div className="mb-3">
<label >Phone:</label>
<input type="tel"
 value={formik.values.phone} 
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 className='form-control' name='phone' id='phone' />

{formik.errors.phone&&formik.touched.phone&&(
  <div className='alert alert-danger '>{formik.errors.phone}</div>
)}
</div>


<button disabled={!formik.isValid}  className='btn btn-danger mt-1 text-white p-2 mt-2 border rounded-pill '>
  Register

</button>

</form>


</div>
)
}
 


export default Register;
