import { SingleProductError, SingleProductRequest, SingleProductSuccess } from "./SProduct.action";
import { SINGLE_PRODUCT_ERROR, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "./SProduct.actionTypes";


const initState = {
    loading:false,
    error:false,
    singleProductData:{image:[]}
};

export const reducer = (state=initState,action)=>{
const {type,payload} = action;


switch(type){
    case SINGLE_PRODUCT_REQUEST:{
        return {...state,loading:true};
    }
    case SINGLE_PRODUCT_ERROR :{
        return {...state,loading:false,error:true};
    }
    case SINGLE_PRODUCT_SUCCESS:{
       
        return {...state,loading:false,singleProductData:payload}
    }
    default:{
        return state;
    }
}
}