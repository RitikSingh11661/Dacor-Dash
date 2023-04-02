import axios from "axios"

export const getProductsApi = async (params) =>{
    try{
        let response =await axios.get(`https://talented-teal-hosiery.cyclic.app/product`,params)
       
        return response
    }
    catch(err){
      console.log(err)
    }
}