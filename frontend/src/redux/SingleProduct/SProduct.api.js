import axios from "axios"


export const getSingleProductApi = async (id) => {
  let res = await axios.get(
    `https://talented-teal-hosiery.cyclic.app/product/${id}`
  );

  return res.data.msg;
};