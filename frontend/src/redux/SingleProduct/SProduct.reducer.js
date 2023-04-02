import { SingleProductError, SingleProductRequest, SingleProductSuccess } from "./SProduct.action";


const initState = {
    loading:false,
    error:false,
    singleProductData:[]
};

export const reducer = (state=initState,action)=>{
const {type,payload} = action;

switch(type){
    case SingleProductRequest:{
        return {...state,loading:true};
    }
    case SingleProductError:{
        return {...state,loading:false,error:true};
    }
    case SingleProductSuccess:{
        return {...state,loading:false,singleProductData:payload}
    }
    default:{
        return state;
    }
}
}