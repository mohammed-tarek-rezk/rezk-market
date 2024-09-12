import { createSlice } from "@reduxjs/toolkit";


let cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers:{

        addToCart:(state, action)=>{
            return [...state , action.payload]
        },

        increaseCount:(state, action)=>{
            let output = state.map((el)=> {
                if(el.id === action.payload){
                    return {...el , orderCount: el.orderCount + 1}
                }
                return el
            })
            return output
        },
        decreaseCount:(state, action)=>{
            let output = state.map((el)=> {
                if(el.id === action.payload){
                    if(el.orderCount === 1){
                        return false;
                    }
                    return {...el , orderCount: el.orderCount - 1}
                }
                return el
            })
            return output
        },
        removeFromCart:(state, action)=>{
            let output = state.filter((el)=> el.id !== action.payload)
            return output
        },


        clearCart:()=>{
            return []
        },
    }
})
export const { addToCart, removeFromCart, clearCart , increaseCount, decreaseCount } = cartSlice.actions

export default cartSlice.reducer