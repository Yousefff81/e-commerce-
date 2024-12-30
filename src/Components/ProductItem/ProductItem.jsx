import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from '../../Pages/ProductDetails/ProductDetails'
import { CartContext } from '../../Context/CartContext'
import toast ,{Toaster} from 'react-hot-toast'

export default function ProductItem({product}) {

const {addProductToCart} = useContext(CartContext)
 
async function addProduct(id){
 let {data}= await addProductToCart(id)


 if(data.status==="success"){

  toast(data.message, 
    {
      duration: 4000,
      position: 'bottom-right',
      style: {},
  className: 'text-info',
      icon: '👏',
    }
    
    )

 }
}


  return  ( <div className=" product col-md-2  gy-4 ">
 <Link to={`details/${product.id}`} >
    <img src={product.imageCover} className='w-100' alt="" />
    <h5 className='text-main'>{product.category.name} </h5>
    <h6> {product.title.split(' ').slice(0,2).join(" ")}</h6>

    <div className=" d-flex justify-content-between">
        <span>{product.price} EGP</span>
        <span> <i className="rating-color fa-regular fa-star"></i>{product.ratingsAverage} </span>

</div>

    </Link>
    <button className='btn bg-main w-100 ' onClick={()=>{addProduct(product.id)}}   >ADD TO CARD </button>


  </div>
)
 
  
}
