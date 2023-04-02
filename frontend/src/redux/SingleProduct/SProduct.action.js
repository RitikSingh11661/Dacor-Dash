import { SINGLE_PRODUCT_ERROR, SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS } from "./SProduct.actionTypes"
import { getSingleProductApi } from "./SProduct.api";

export const SingleProductRequest=()=>{
    return {type:SINGLE_PRODUCT_REQUEST};
}

export const SingleProductError=()=>{
    return {type:SINGLE_PRODUCT_ERROR};
}

export const SingleProductSuccess=(payload)=>{
    return {type:SINGLE_PRODUCT_SUCCESS,payload};
};

export const getSingleProductData = (id)=>async(dispatch)=>{
    dispatch(SingleProductRequest());

    try{
       let res = await getSingleProductApi(id)
       if(res){
        dispatch(SingleProductSuccess(res));
       }
    }
    catch(err){
     dispatch(SingleProductError())
    }
}