import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../../Redux/Counterslice'

export default function Productsss() {


 let {counter}= useSelector((state)=>state.hamada)
 
let dispatsh=useDispatch()
  return (
    <>
      Product Count {counter}

   <button onClick={()=>{
    dispatsh(increase())
   }}>++</button>
   <button onClick={()=>{
    dispatsh(decrease())
   }}>---</button>
    </>
  )
}
