import axios from "axios";


export const getCartApi = async ()=>{
    try{
      let res = await axios.get(`${process.env.REACT_APP_API_AI}/cart`,{
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
    let res = await axios.post(`${process.env.REACT_APP_API_AI}/cart/add`,
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
      let res = await axios.delete(`${process.env.REACT_APP_API_AI}/cart/${id}`,{
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