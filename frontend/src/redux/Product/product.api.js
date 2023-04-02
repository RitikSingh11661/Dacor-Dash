import axios from "axios"

export const getProductsApi = async (params) =>{
    try{
        let response =await axios.get(`${process.env.REACT_APP_API_AI}/product`,params)
       
        return response
    }
    catch(err){
      console.log(err)
    }
}