
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import img1 from "./../../assets/images/slider/slider1.webp"
import { CounterContext } from '../../Context/CounterContext'
import Checkout from '../../Components/Checkout/Checkout'
import { Link } from 'react-router-dom'


export default function Cart() {

const [products ,setProducts]= useState([])
 const {getLoggedCart}= useContext(CartContext)
 const {removeItemFromCart,updateQuatity}=useContext(CartContext)


 async function getCart(){
 const {data}=  await getLoggedCart()

 setProducts(data.data.products)
 }

async function removeItem(id){
  const {data} = await removeItemFromCart(id)
 
  setProducts(data.data.products)
 
}
async function newCount(id,count){
 const {data}= await updateQuatity(id,count)

 setProducts(data.data.products) 

}

 useEffect(()=>{
 getCart() 
 },[])

  return (
    <div>



  <div className="container bg-main-light my-3 ">
  <h2>Shop Cart :</h2>
  <div className="d-flex justify-content-between align-items-center">
    <span>Total Cart Price:</span>
    <span>66776 EGP</span>
    <Link to={"/checkout"}>checkout</Link>
  </div>
  {products.map((product)=>(

<div className="row d-flex justify-content-between align-items-center mt-3">

  <div className="col-md-2">
  <img src={product.product.imageCover} className='w-100'   alt="" />
  </div>

<div className="col-md-10 ">
<div className="d-flex justify-content-between align-items-center">
<div className="col-md-8">


<h4>{product.product.title}</h4>
<p className='text-main'>{product.price} EGP</p>

<p className='cursor-pointer ' onClick={()=>{
  removeItem(product.product.id)
}}> <i className='fa-solid fa-trash text-main' >
  
  </i>  Remove</p>
  </div>
  <div className="col-md-2 text-end ">
    <button className=' habal mx-2'   disabled={product.count===10?"disabled":false} onClick={()=>{newCount(product.product.id,product.count + 1)}} >+</button>
<span className='text-info'> {product.count}</span>
    <button className='habal mx-2 '
    disabled={product.count===0?"disabled":false}
    onClick={()=>{newCount(product.product.id,product.count - 1)}}>
      
      -</button>
  </div>
</div>

</div>
</div>




))}




</div>


 </div>
  )
}
