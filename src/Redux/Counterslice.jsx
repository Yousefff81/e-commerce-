import { createSlice } from "@reduxjs/toolkit";



const initialState={counter:0}

export const counterSlice=createSlice({

    name:"counter",
    initialState,
    reducers:{
        increase:((state)=>{

            state.counter +=1
        }),
        decrease:((state)=>{

            state.counter -=1
        })
    }

})

export const {increase,decrease} = counterSlice.actions
export const counterReducer=counterSlice.reducer
