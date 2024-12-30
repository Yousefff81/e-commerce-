import {RouterProvider, Routes, createBrowserRouter, createHashRouter} from "react-router-dom"
import './App.css';
import Lay from "./Pages/Lay/Lay";
import HomePage from "./Pages/HomePage/HomePage"
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import CounterContextProvider from "./Context/CounterContext";
import {CounterContext} from "react"
import UserContextProvider from "./Usercontext/UserContext";
import { CartContext } from "./Context/CartContext";
import CartContextProvider from "./Context/CartContext";
import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/Category";
import Productsss from "./Pages/Productsss/Productsss";
import ProtectProduct from "./Components/ProtectProduct/ProtectProduct"
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import {Toaster} from "react-hot-toast"
import Checkout from "./Components/Checkout/Checkout";
import Allorders from "./Pages/Allorders/Allorders";
import { Provider } from "react-redux";

import { Store } from "./Redux/Store";




function App() {

const router=createHashRouter([
  {path:"" ,
   element:<Lay/>,
   children:[{index:true,element:<HomePage/>},
  {path:"/register" , element:<Register/>},
  {path:"/login",element:<Login/>},
  {path:"productsss", element:
  
  <ProtectProduct>
    <Productsss/>

  </ProtectProduct>},
  {path:"details/:id", element:
  
  <ProtectProduct>
    <ProductDetails/>

  </ProtectProduct>},
  
  {path:"cart", element:
  <ProtectProduct>
    <Cart/>
  </ProtectProduct>},
  {path:"checkout", element:
  <ProtectProduct>
    <Checkout/>
  </ProtectProduct>},
  {path:"category", element:<ProtectProduct>
    <Category/>
  </ProtectProduct>},
  {path:"allorders", element:
  <ProtectProduct>
    <Allorders/>
  </ProtectProduct>},
 

],
},
])


  return(


<Provider store={Store}>



<CartContextProvider>

<UserContextProvider>

<CounterContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </CounterContextProvider>
   
    </UserContextProvider>

    <Toaster />
</CartContextProvider>
</Provider>



    
  );
  
 
  
}

export default App;
