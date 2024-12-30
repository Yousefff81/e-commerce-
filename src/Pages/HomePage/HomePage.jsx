import React from 'react';
import { CounterContext } from '../../Context/CounterContext';

import { useContext } from 'react';

import FeatureProduct from '../../Components/FeatureProduct/FeatureProduct';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import MainSlider from '../../Components/MainSlider/MainSlider';

function HomePage (){
 
return(
  <div className='container' >
    <MainSlider/>
   <CategorySlider/>
  
    <FeatureProduct/>

 </div>
)
}



export default HomePage;
