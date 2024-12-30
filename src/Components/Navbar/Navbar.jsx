import React, { useContext } from 'react'
import logo from "./../../assets/images/freshcart-logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'
import {CounterContext} from '../../Context/CounterContext'
import CounterContextProvider from '../../Context/CounterContext'
import { UserContext } from '../../Usercontext/UserContext'
import Cart from '../../Pages/Cart/Cart'
import Category from '../../Pages/Category/Category'
import Productsss from '../../Pages/Productsss/Productsss'
import { CartContext } from '../../Context/CartContext'


 function Navbar() {

let navigate=useNavigate( )

const {userToken,setuserToken} =useContext (UserContext)
const {numOfCartItems}= useContext(CartContext)
function Logout(){
  localStorage.removeItem("userToken")
  setuserToken(null)
  navigate("/login")
}

  return (
  

<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link to={""} className="navbar-brand " >
      <img src={logo} className='w-100' alt="" />
  

      </Link>
      
    {userToken&& ( <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
       
       <li className="nav-item ">
           <Link to={""} className="nav-link text-secodanry fs-5" aria-disabled="true">Home</Link>
         </li>
        
   

         <li className="nav-item position-relative">
           <Link to={"/Cart"} className="nav-link  fs-6" aria-disabled="true">Cart <i className='fa-solid fa-shopping-cart'></i>
           
           <span class="position-absolute  bg-danger top-0 start-100 translate-middle p-1 text-white border border-light rounded-circle">
{numOfCartItems}
  </span>
            </Link>
         </li>
        
         </ul>
         )}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
        
<div className="social">
  <li className=' mx-2 fab fa-facebook text-info '></li>
  <li className=' mx-2 fab fa-twitter text-info'></li>
  <li className='mx-2 fab fa-instagram text-info '></li>
  <li className='mx-2 fab fa-tiktok  text-info'></li>
</div>

{userToken?(<li className="nav-item">
   <button onClick={()=>{Logout()}} className="nav-link text-danger fs-5" >Logout</button>
   </li>):(
    <>
    
    <li className="nav-item">
   <Link to={"/register"} className="nav-link text-danger fs-5" >Register</Link>
   </li>
    
 <li className="nav-item">
          <Link to={"/login"} className="nav-link text-danger fs-5" aria-disabled="true">Login</Link>
        </li>

    
    </>
   )}


       
       
    
      </ul>
    
    </div>
  </div>
</nav>


    
  )
}
export default Navbar