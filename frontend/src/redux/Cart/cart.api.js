import axios from "axios";



export const getCartApi = async ()=>{
    try{
      let res = await axios.get(`https://talented-teal-hosiery.cyclic.app/cart`)
      let data = await res.data
      return data;
    }
    catch(e){
        console.log(e);
    }
};


export const deleteCartApi = async (newCart,id)=>{
    try{
      let res = await axios.delete(`https://talented-teal-hosiery.cyclic.app/cart/delete/${id}`,
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