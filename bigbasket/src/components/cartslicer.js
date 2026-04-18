import { createSlice } from "@reduxjs/toolkit";



const mycartSlicer=createSlice({

    name:"cart",
    initialState:{
        cartitems:[],
        cartCount:0
    },
    reducers:{

        addtoCart(state,action)
        {
            state.cartitems.push(action.payload);
            state.cartCount=state.cartitems.length
        },
        deleteItem(state,action){
            state.cartitems=state.cartitems.filter((p)=>p.id!==action.payload);
             state.cartCount = state.cartitems.length;
              
        }



    }


})

export const {addtoCart,deleteItem}=mycartSlicer.actions;
export default mycartSlicer.reducer