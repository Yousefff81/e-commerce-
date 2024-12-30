import React, { useContext, useEffect } from 'react';
import {Outlet} from "react-router-dom"
import Navbar from "./../../Components/Navbar/Navbar"
import Footer from "./../../Components/Footer/Footer"

import { UserContext } from '../../Usercontext/UserContext';
function Lay ()  {

 const {setuserToken}= useContext(UserContext)

 useEffect(()=>{

  if(localStorage.getItem("userToken")){
setuserToken(localStorage.getItem("userToken"))
  }


 },[])
  return(
    < >
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </>

  )
}
 



export default Lay;
