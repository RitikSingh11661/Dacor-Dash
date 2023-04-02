import axios from "axios";

import {
  ADD_TO_WISHLIST,
  GET_ITEMS_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./actionTypes";

const wishlistAdd = () => {
  return { type: ADD_TO_WISHLIST };
};

const wishlistGet = (payload) => {
  return { type: GET_ITEMS_TO_WISHLIST  , payload};
};

const wishlistRemove = () => {
  return { type: REMOVE_FROM_WISHLIST };
};

export const getWishlist =()=> (dispatch) => {
  dispatch(wishlistGet());
  axios
    .get(`https://talented-teal-hosiery.cyclic.app/wishlist`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    .then((res) => dispatch(wishlistGet(res.data.msg)))
    .catch((error) => {
      console.log(error);
    });
};

export const addWishlist = (product) => async (dispatch) => {
  dispatch(wishlistAdd());
  console.log(product)
  try {
    const { data } = await axios.post(
      "https://talented-teal-hosiery.cyclic.app/wishlist/add",
      JSON.stringify(product),
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch(wishlistAdd(data));
  } catch (error) {
   console.log(error)
  }
};

export const removeWishlist = (id) => async (dispatch) => {
  dispatch(wishlistRemove());
  try {
    axios.delete(
      `https://talented-teal-hosiery.cyclic.app/wishlist/delete/${id}` ,  {
      headers: {
        token: localStorage.getItem('token'),
      },
    },
     
    );
    dispatch(wishlistRemove(id));
  } catch (error) {
    console.log(error);
  }
};







