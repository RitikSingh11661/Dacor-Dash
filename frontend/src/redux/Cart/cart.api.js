import axios from "axios";


export const getCartApi = async ()=>{
    try{
      let res = await axios.get(`https://talented-teal-hosiery.cyclic.app/cart`,{
        headers:{
          "token":localStorage.getItem("token")
        }
      })
     
      let data = await res.data.msg
      return data;
    }
    catch(e){
        console.log(e);
    }
};

export const addCartApi = async (payload)=>{
  try{
    let res = await axios.post(`https://talented-teal-hosiery.cyclic.app/cart/add`,
    payload,{
      headers:{
        "token":localStorage.getItem("token")
      }
    }
    )
    
    let data = await res.data.msg
    return data;
  }
  catch(e){
      console.log(e);
  }
};


export const deleteCartApi = async (newCart,id)=>{
    try{
      let res = await axios.delete(`https://universal-mall-api.onrender.com/products/${id}`,{
        headers:{
          "token":localStorage.getItem("token")
        }
      })
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
        newCart,
        {
          headers:{
            "token":localStorage.getItem("token")
          }
        }
      )
      let data = await res.data
      return data;
    }
    catch(e){
        console.log(e);
    }
}