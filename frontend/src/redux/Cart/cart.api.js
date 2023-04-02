import axios from "axios";



export const getCartApi = async ()=>{
    try{
      let res = await axios.get(`https://talented-teal-hosiery.cyclic.app/carts`)
      let data = await res.data
      console.log(data)
      return data;
    }
    catch(e){
        console.log(e);
    }
};


export const deleteCartApi = async (newCart,id)=>{
    try{
      let res = await axios.delete(`https://universal-mall-api.onrender.com/products/${id}`,
        newCart
      )
      let data = await res.data
      return data;
    }
    catch(e){
        console.log(e);
    }
};

export const updateCartApi = async (newCart,id)=>{
    try{
      let res = await axios.patch(`https://talented-teal-hosiery.cyclic.app/cart/update/${id}`,
        newCart
      )
      let data = await res.data
      return data;
    }
    catch(e){
        console.log(e);
    }
}