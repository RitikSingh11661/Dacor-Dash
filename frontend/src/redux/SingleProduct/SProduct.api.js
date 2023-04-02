import axios from "axios"


export const getSingleProductApi =async (id)=>{

    let res = await axios.get(`https://universal-mall-api.onrender.com/products/${Number(id)}`)

    return res.data;
}