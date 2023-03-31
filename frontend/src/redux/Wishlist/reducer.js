import {
  ADD_TO_WISHLIST,
  GET_ITEMS_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "./actionTypes";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS_TO_WISHLIST:
      return (state = action.payload);
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      state = state.filter(({ id }) => id !== action.payload);
      return [...state];
    default:
      return state;
  }
};