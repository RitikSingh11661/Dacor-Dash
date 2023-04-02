import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducer as AuthReducer} from './Auth/reducer'
import {reducer as AppReducer} from './App/reducer'
import {reducer as AdminReducer} from './Admin/reducer'
import { reducer as ProductReducer } from "./Product/product.reducer";
import { reducer as WishlistReducer } from "./Wishlist/reducer"
import { reducer as shippingReducer } from "./ShippingReducer/reducer";
import {reducer as cartReducer} from "./Cart/cart.reducer"
import {reducer as SingleProductReducer} from "./SingleProduct/SProduct.reducer"

const mainReducer = combineReducers({
  AuthReducer,
  AdminReducer,
  AppReducer,
  ProductReducer,
  shippingReducer,
  WishlistReducer,
  cartReducer,
  SingleProductReducer
});

export const store = legacy_createStore(mainReducer,applyMiddleware(thunk))