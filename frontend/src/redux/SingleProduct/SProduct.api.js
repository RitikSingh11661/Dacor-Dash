import axios from "axios"


export const getSingleProductApi = async (id) => {
  let res = await axios.get(
    `h${process.env.REACT_APP_API_AI}/product/${id}`
  );

  return res.data.msg;
};