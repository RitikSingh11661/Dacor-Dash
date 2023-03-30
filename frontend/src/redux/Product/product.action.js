
import { getProductsApi } from "./product.api";
import * as types from "./product.types";


const productRequest = ()=>{
    return {type:types.PRODUCT_REQUEST}
}

const productError = ()=>{
    return {type:types.PRODUCT_ERROR}
}

const productSuccess = (data)=>{
    return {type:types.PRODUCT_SUCCESS,payload:data}
}

export const handlePageChange = (payload)=>{
    return ({type:types.HANDLE_PAGE_CHANGE,payload})
}

export const getProducts = (params)=>async (dispatch)=>{
    dispatch(productRequest());
    try{
       let response = await getProductsApi(params);
       if(response){
        dispatch(productSuccess(response.data))
       }
    }
    catch(err){
         dispatch(productError())
    }
}