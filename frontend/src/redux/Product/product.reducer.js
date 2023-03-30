import * as types from "./product.types";

const initState = {
    error:false,
    loading:false,
    product:[],
    perPage:12,
    activePage:1
}

export const reducer = (state=initState,action)=>{

    switch(action.type){
        case types.PRODUCT_REQUEST:{
            return {...state,loading:true}
        }
        case types.PRODUCT_ERROR:{
            return {...state,error:true,loading:false}
        }
        case types.PRODUCT_SUCCESS:{
            return {...state,loading:false,product:action.payload}
        }
        case types.HANDLE_PAGE_CHANGE:{
            return {...state,activePage:action.payload}
        }
        default:{
            return state;
        }
    }
}