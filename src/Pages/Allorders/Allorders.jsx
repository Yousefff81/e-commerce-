import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Cart from '../Cart/Cart'

export default function Allorders() {


  return (
    <div  className='ayhaga'>
   <div className="web">
   <Link  to={"/"} className='kelma'>go to website</Link>
   </div>
    </div>
  )
}
