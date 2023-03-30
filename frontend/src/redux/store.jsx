import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import {reducer as AuthReducer} from './Auth/reducer'
// import {reducer as AppReducer} from './App/reducer'
// import {reducer as AdminReducer} from './Admin/reducer'
import {reducer as ProductReducer} from "./Product/product.reducer"
const mainReducer = combineReducers({
     AuthReducer,
     ProductReducer,
 });
export const store = legacy_createStore(mainReducer,applyMiddleware(thunk))