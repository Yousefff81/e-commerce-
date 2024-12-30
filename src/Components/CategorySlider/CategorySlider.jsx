import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Slider from "react-slick";
import { Settings } from 'react-slick';



export default function CategorySlider() {
const [category,setCategory]= useState([])

async  function getData(){
       const {data}= await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
       console.log(data.data);
       
       setCategory(data.data)
     
      }
   
      var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
      };

useEffect(()=>{
  getData()
},[])

return (
<div className=' my-5'>
<Slider  {...settings}>
{category.map((category)=>(
  < >
  <img height={200} src={category.image} className='w-100'  alt="" />
  <h6 className='text-center mt-2 text-danger'>{category.name}</h6>
  </>
  
))}
  </Slider>
</div>
);
}
