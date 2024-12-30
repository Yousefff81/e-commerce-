import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';

export default function Checkout() {
const {payment}= useContext(CartContext)
async  function checkoutPayment(values){

const {data}= await payment(values)
console.log(data.session.url );
window.location.href=data.session.url
  }

 const formik= useFormik({

  initialValues:{
    details:"",
  phone:"",
  city:"",
  
  },
onSubmit:checkoutPayment

  })


  return ( <div className="container bg-main-light p-4">

<h3>checkout Details</h3>
<form onSubmit={formik.handleSubmit}>
  <div className="mb-3">
  <label  className='w-100'>details</label>
  <input className='w-75' type="text" id='details' name='details' value={formik.values.details} onChange={formik.handleChange} />
  </div>

  <div className="mb-3">
  <label  className='w-100'>Phone</label>
  <input className='w-75' type="number" id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} />
  </div>

  <div className="mb-3">
  <label  className='w-100'>city</label>
  <input className='w-75' type="text" id='city' name='city' value={formik.values.city} onChange={formik.handleChange} />
  </div>

  <button className='bg-info ' type='submit' >checkout final</button>
</form>

    </div>

  )
}
