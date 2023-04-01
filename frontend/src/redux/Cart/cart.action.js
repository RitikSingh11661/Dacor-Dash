

import * as types from "./cart.actionTypes"
import { deleteCartApi, getCartApi, updateCartApi } from "./cart.api"

const cartLoading = ()=>{
    return {type:types.CART_LOADING}
}

const cartError = ()=>{
    return {type:types.CART_ERROR}
}

const getCartSuccess = (payload)=>{
    return {type:types.GET_CART_SUCCESS,payload};
}

const deleteCartSuccess = (payload)=>{
    return {type:types.DELETE_CART_SUCCESS,payload}
};

const updateCartSuccess = (payload)=>{
    return {type:types.UPDATE_CART_SUCCESS,payload}
};

const getCart = ()=>async(dispatch)=>{
    dispatch(cartLoading());
    try{
        let res = await getCartApi();
        dispatch(getCartSuccess(res))
    }
    catch(e){
     dispatch(cartError())
    }
}

const deleteCart = (newCart,id)=>async(dispatch)=>{
    dispatch(cartLoading());
    try{
        let res = await deleteCartApi(newCart,id);
        dispatch(getCartSuccess(res))
    }
    catch(e){
     dispatch(cartError())
    }
};

const updateCart = (newCart,id) = async(dispatch)=>{
    dispatch(cartLoading());
    try{
      let res = await updateCartApi(newCart,id);
      dispatch(updateCartSuccess(res))
    }
    catch(e){
        dispatch(cartError())
    }
}

export {getCart,deleteCart,updateCart}