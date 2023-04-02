

import * as types from "./cart.actionTypes"
import { addCartApi, deleteCartApi, getCartApi, updateCartApi } from "./cart.api"

const cartLoading = ()=>{
    return {type:types.CART_LOADING}
}

const cartError = ()=>{
    return {type:types.CART_ERROR}
}

const getCartSuccess = (payload)=>{
    return {type:types.GET_CART_SUCCESS,payload};
}

const addCartSuccess = (payload)=>{
    return {type:types.ADD_CART_SUCCESS,payload};
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
        if(res){
            dispatch(getCartSuccess(res))
        }
    }
    catch(e){
     dispatch(cartError())
    }
}

 const addCart = (payload)=>async(dispatch)=>{
    dispatch(cartLoading());
    try{
        let res = await addCartApi(payload);
        dispatch(addCartSuccess(res))
    }
    catch(e){
     dispatch(cartError())
    }
}

const deleteCart = ()=>async(dispatch)=>{
    dispatch(cartLoading());
    try{
        let res = await deleteCartApi();
        dispatch(getCartSuccess(res))
    }
    catch(e){
     dispatch(cartError())
    }
};

const updateCart = () => async(dispatch)=>{
    dispatch(cartLoading());
    try{
      let res = await updateCartApi();
      dispatch(updateCartSuccess(res))
    }
    catch(e){
        dispatch(cartError())
    }
}

export {getCart,deleteCart,updateCart,addCart}