import {createSlice} from "@reduxjs/toolkit";

const cart=createSlice({
    name:"cart",
    initialState:{order:[  
     
  ]},
    reducers:{
        addToCart(state,action){
          console.log( {...state,
            order:[...state.order,action.payload]});
          return {
            ...state,
            order:[action.payload,...state.order]
          }
        },
        deleteFromCart(state,action){

        const filteredData= state.order.filter((item)=>item.id!==action.payload);
          // state.order.splice(action.payload,1);
         return {...state,order:filteredData};
        }
    },
    
});

export const {addToCart,deleteFromCart}=cart.actions;
export {cart};