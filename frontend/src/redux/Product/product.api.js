import axios from "axios"

export const getProductsApi = async (params) =>{
    try{
        let response =await axios.get(`https://talented-teal-hosiery.cyclic.app/product`)
        console.log(response.data.msg)
        return response.data.msg
    }
    catch(err){
      console.log(err)
    }
}