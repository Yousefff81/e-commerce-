import {configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "./Counterslice"

export const Store=configureStore({

reducer:{
    hamada:counterReducer

}



})