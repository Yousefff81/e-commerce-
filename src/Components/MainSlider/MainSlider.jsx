
import React from 'react'

import img1 from "./../../assets/images/slider/slider1.webp"
import img2 from "./../../assets/images/slider/slider2.png"
import img3 from "./../../assets/images/slider/slider3.jfif"
import img4 from "./../../assets/images/slider/slider4.webp"
import Slider from "react-slick";
import { Settings } from 'react-slick';
 function MainSlider() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1 ,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  };

  return(
  <div className='row g-0 mt-5'>
<div className="col-md-9 ">
<Slider  {...settings}>
<img src={img1} height={400}  className='w-100' alt="" />
<img src={img2} height={400} className='w-100'  alt="" />
<img src={img3} height={400} className='w-100'   alt="" />
<img src={img4} height={400} className='w-100'  alt="" />
  </Slider>
</div>


<div className="col-md-3 ">
<img src={img2}  height={200}  className='w-100' alt="" />
<img src={img3} height={200}  className='w-100'  alt="" />

</div>

  </div>
  )
   
  
}

export default MainSlider