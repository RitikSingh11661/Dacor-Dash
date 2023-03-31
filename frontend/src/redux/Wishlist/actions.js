import axios from "axios";

import {
  ADD_TO_WISHLIST,
  GET_ITEMS_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./actionTypes";


export const getWishlist = (dispatch) => {
  dispatch(  GET_ITEMS_TO_WISHLIST());
  axios
    .get(`https://talented-teal-hosiery.cyclic.app/wishlist`)
    .then((res) => dispatch(GET_ITEMS_TO_WISHLIST(res.data)))
    .catch(() => dispatch(GET_ITEMS_TO_WISHLIST()));
};

export const addWishlist = (product) => async (dispatch) => {
  dispatch( ADD_TO_WISHLIST());
  try {
    const { data } = await axios.post(
      "https://talented-teal-hosiery.cyclic.app/wishlist/add",  product );
    dispatch(ADD_TO_WISHLIST(data));
  } catch (error) {
    dispatch(ADD_TO_WISHLIST(error));
  }
};

export const removeWishlist = (id) => async (dispatch) => {
  dispatch(REMOVE_FROM_WISHLIST());
  try {
    axios.delete(`https://talented-teal-hosiery.cyclic.app/wishlist/delete/${id}`);
    dispatch(REMOVE_FROM_WISHLIST(id));
  } catch (error) {
    dispatch(REMOVE_FROM_WISHLIST(error));
  }
};