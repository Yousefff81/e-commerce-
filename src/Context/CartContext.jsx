import axios from "axios";
import { useEffect, useState } from "react";
import { Children, createContext } from "react";

export const CartContext=createContext()



export default function CartContextProvider(props){


    const [numOfCartItems,setNumOfCartItems]=useState(0)
    const[cartId,setCartId]=useState("")


    async function intialCartCount(){
     const {data}=    await getLoggedCart()
     
     setNumOfCartItems(data.numOfCartItems)
     console.log(data);
     setCartId(data.data._id)
 
 }
     useEffect(()=>{
         intialCartCount()
     }
     
     
     
     ,[])
 

    let  headers={
        token:  localStorage.getItem("userToken"),
       }
    function addProductToCart(id){
        return axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,
         {


            productId:id,
        },
        {
             headers
            
             

        },   
        ).then((response)=>response)
        .catch((err)=>err)
    }
  
  
    function getLoggedCart(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/cart" ,
        
        {
             headers
            
             

        },   
        ).then((response)=>response)
        .catch((err)=>err)
    }


    function payment(x){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000` ,
        {
shippingAddress:x

        },
        {
             headers
            
             

        },   
        ).then((response)=>response)
        .catch((err)=>err)
    }
    function removeItemFromCart(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
        
        {
             headers
            
             

        },   
        ).then((response)=>response)
        .catch((err)=>err)
    }

    function updateQuatity(id,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
           
        count
    
    },
    {
        headers
    }
    
    ).then((response)=>response)
    .catch((err)=>err)


    }

    return(

   
<CartContext.Provider value={{addProductToCart,getLoggedCart,removeItemFromCart,updateQuatity,setNumOfCartItems,payment}}>

{props.children}
</CartContext.Provider>
    )


}