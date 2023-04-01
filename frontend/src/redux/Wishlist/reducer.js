import {
  ADD_TO_WISHLIST,
  GET_ITEMS_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  wishlist: [],
  isError: false,
};

export const reducer = (state = initialState, {type , payload}) => {
  switch (type) {
    case GET_ITEMS_TO_WISHLIST:
      return {...state, wishlist: payload};
    case ADD_TO_WISHLIST:
      return {...state, wishlist:payload};
    case REMOVE_FROM_WISHLIST:
      state = state.filter(({ id }) => id !== payload);
      return {...state};
    default:
      return state;
  }
};