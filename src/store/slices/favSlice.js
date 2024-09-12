import { createSlice } from "@reduxjs/toolkit";


let favSlice = createSlice({
    name: 'favSlice',
    initialState: [],
    reducers:{
        //add to fav
        addToFav:(state, action)=>{
            return [...state , action.payload]
        },
        //remove from fav
        removeFromFev:(state, action)=>{
            let output = state.filter((el)=> el.id !== action.payload )
            return output
        },

        //clear fav
        clearFav:()=>{
            return []
        },
    }
})
export const { addToFav, clearFav, removeFromFev } = favSlice.actions

export default favSlice.reducer