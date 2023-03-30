import axios from "axios"

export const getProductsApi = async (params) =>{
    try{
        let response =await axios.get(`https://universal-mall-api.onrender.com/products`,params)
       
        return response
    }
    catch(err){
      console.log(err)
    }
}