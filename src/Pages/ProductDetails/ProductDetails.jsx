import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';




export default function ProductDetails() {
const [details,setDetails]= useState({})
let {id}= useParams()
  
const {addProductToCart} = useContext(CartContext)
 
async function addProduct(id){
 let {data}= await addProductToCart(id)


 if(data.status==="success"){

  toast(data.message, 
    {
      duration: 4000,
      position: 'bottom-right',
      style: {},
      className: 'text-info',
      icon: '👏',
    }
    
    )

 }
}
 
 
 
  async function getProductDetails(){
   const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   
   setDetails(data.data)

  }

  useEffect(()=>{
    getProductDetails()
  
 
  },[])
  return <div className="container mt-5">
      <div className="row align-items-center ">
    <div className="col-md-3">

<img src={details.imageCover} className='w-100' alt="" />




    </div>
    <div className="col-md-9">
      <h3>{details.title}</h3>
      <p>{details.description}</p>
   <p className='fw-bold'>{details.category?.name}</p>

      <div className="d-flex justify-content-between">
        <p className='text-info'>{details.price} EGP</p>
        <p> {details.ratingsAverage} <i className="rating-color fa-regular fa-star"></i></p>
      </div>

      <button className='btn bg-main w-100' onClick={()=>{addProduct(details.id)}} >  ADD TO CARD</button>
      </div>
  </div>
  
  </div>

}
