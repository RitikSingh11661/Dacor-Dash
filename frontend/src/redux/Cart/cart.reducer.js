import { CART_ERROR, CART_LOADING, DELETE_CART_SUCCESS, GET_CART_SUCCESS, UPDATE_CART_SUCCESS } from "./cart.actionTypes"


const initState = {
    loading:false,
    cart:[],
    error:false,
    totalCart:0
}

export const reducer = (state=initState,{type,payload})=>{
    switch(type){
        case CART_LOADING:{
         return {
          ...state,loading:true
         }
        }
        case CART_ERROR:{
            return {
                ...state,loading:false,error:true
            }
        }
        case GET_CART_SUCCESS:{
            return {
                ...state,loading:false,cart:payload
            }
        }
        case DELETE_CART_SUCCESS:{
            return {
                ...state,cart:state.cart.filter((ele)=>{
                    return ele._id !==payload._id
                })
            }
        }
        case UPDATE_CART_SUCCESS:{
            return {
                ...state,cart:payload
            }
        }
        default:{
            return state;
        }
    }
}