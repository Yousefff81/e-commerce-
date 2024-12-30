import React, { createContext, useState } from 'react'

export const CounterContext=createContext()
 function CounterContextProvider(props) {

   const[counter,setCounter]= useState(0)
   function increase(){
    setCounter(counter+1);
   }
   function decrease(){
    setCounter(counter-1);
   }
  return   <CounterContext.Provider value={{counter,increase,decrease} }>
{props.children}
  </CounterContext.Provider>
    
     

}
export default CounterContextProvider
