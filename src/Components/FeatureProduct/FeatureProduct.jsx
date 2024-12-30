import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Loader from '../Loader/Loader'
import ProductItem from '../ProductItem/ProductItem'
 function FeatureProduct() {
    const [allProduct,setallProduct]=useState([])
    const[isLoader,setIsLoader]=useState(false)
   
    async  function getData( ){
        setIsLoader(true)
        const {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/products")
       
setallProduct(data.data)
setIsLoader(false)
    }
 
    useEffect(()=>{
        getData()
     
    },[])

  return (

<div className="row ">

    {isLoader? (
         <Loader/> 
    ) :(
         allProduct.map((product)=><ProductItem product={product}/>)

)}
   
</div>

  )
}
export default FeatureProduct