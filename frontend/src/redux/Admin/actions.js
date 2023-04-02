import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_ADMIN_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_ADMINLIST_FAILURE,
  GET_ADMINLIST_REQUEST,
  GET_ADMINLIST_SUCCESS,
  GET_USERLIST_FAILURE,
  GET_USERLIST_REQUEST,
  GET_USERLIST_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_CARTS_SUCCESS,
} from "./actiontypes";
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from "../App/actiontypes";
import axios from "axios";

const getProductDataRequest = () => ({ type: GET_PRODUCTS_REQUEST });
const getProductDataSuccess = (payload) => ({ type: GET_PRODUCTS_SUCCESS, payload });
const getProductDataFailure = () => ({ type: GET_PRODUCTS_FAILURE });
const addProductRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addProductSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addProductFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteProductRequest = () => ({ type: DELETE_PRODUCT_REQUEST });
const deleteProductSuccess = (payload) => ({ type: DELETE_PRODUCT_SUCCESS, payload });
const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });
const updateProductRequest = () => ({ type: UPDATE_PRODUCT_REQUEST });
const updateProductSuccess = (payload) => ({ type: UPDATE_PRODUCT_SUCCESS, payload });
const updateProductFailure = () => ({ type: UPDATE_PRODUCT_FAILURE });
const getUserListRequest = () => ({ type: GET_USERLIST_REQUEST });
const getUserListSuccess = (payload) => ({ type: GET_USERLIST_SUCCESS, payload });
const getUserListFailure = () => ({ type: GET_USERLIST_FAILURE });
const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
const deleteUserSuccess = (payload) => ({ type: DELETE_USER_SUCCESS, payload });
const deleteUserFailure = () => ({ type: DELETE_USER_FAILURE });
const getAdminListRequest = () => ({ type: GET_ADMINLIST_REQUEST });
const getAdminListSuccess = (payload) => ({ type: GET_ADMINLIST_SUCCESS, payload });
const getAdminListFailure = () => ({ type: GET_ADMINLIST_FAILURE });
const addAdminRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addAdminSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addAdminFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteAdminRequest = () => ({ type: DELETE_ADMIN_REQUEST });
const deleteAdminSuccess = (payload) => ({ type: DELETE_ADMIN_SUCCESS, payload });
const deleteAdminFailure = () => ({ type: DELETE_ADMIN_FAILURE });
const getCategoriesRequest = () => ({ type: GET_CATEGORIES_REQUEST });
const getCategoriesSuccess = (payload) => ({ type: GET_CATEGORIES_SUCCESS, payload });
const getOrdersRequest = () => ({ type: GET_ORDERS_REQUEST });
const getOrdersSuccess = (payload) => ({ type: GET_ORDERS_SUCCESS, payload });
const getOrdersFailure = () => ({ type: GET_ORDERS_FAILURE });
const getCartsSuccess = (payload) => ({ type: GET_CARTS_SUCCESS, payload });

export const getProducts = (dispatch) => {
  dispatch(getProductDataRequest());
  axios.get(`${process.env.REACT_APP_API_AI}/product`)
    .then((res) =>dispatch(getProductDataSuccess(res.data.msg)))
    .catch(()=>dispatch(getProductDataFailure()));
};

export const addProduct = (product) => async (dispatch) => {
  dispatch(addProductRequest());
  try {
    const {data} =await axios.post(`${process.env.REACT_APP_API_AI}/product/add`,JSON.stringify(product),{
      headers:{'Content-Type':'application/json',token:localStorage.getItem('token')}
    });
    dispatch(addProductSuccess(data));
    return data;
  } catch (error) {
    console.log('error',error)
    dispatch(addProductFailure(error));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(deleteProductRequest());
  try {
    const {data}=await axios.delete(`${process.env.REACT_APP_API_AI}/product/delete/${id}`,{
      headers:{token:localStorage.getItem('token')}
    });
    dispatch(deleteProductSuccess(id));
    return data;

  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};

export const updateProduct = (product) => async (dispatch) => {
  console.log('product',product)
  dispatch(updateProductRequest());
  try {
    const { data } = await axios.patch(`${process.env.REACT_APP_API_AI}/product/update/${product._id}`,JSON.stringify(product),{
      headers:{'Content-Type':'application/json',token:localStorage.getItem('token')}
    });
    dispatch(updateProductSuccess(product));
    return data;
  } catch (error) {
    dispatch(updateProductFailure(error));
  }
};

export const getUsersList = async (dispatch) => {
  dispatch(getUserListRequest());
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_AI}/user`);
    dispatch(getUserListSuccess(data.msg));
  } catch (error) {
    dispatch(getUserListFailure(error));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch(deleteUserRequest());
  try {
    let res = await axios.delete(`${process.env.REACT_APP_API_AI}/user/delete/${id}`,{
      headers:{token:localStorage.getItem('token')}
    });
    console.log('res',res)
    dispatch(deleteUserSuccess(id));
    return res;
  } catch (error) {
    dispatch(deleteUserFailure("error", error));
  }
};

export const getAdminList = async (dispatch)=>{
  dispatch(getAdminListRequest());
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_AI}/admin`,{
      headers:{token:localStorage.getItem('token')}
    });
    dispatch(getAdminListSuccess(data.data));
  } catch (error) {
    dispatch(getAdminListFailure(error));
  }
};

export const addAdmin = (admin) => async (dispatch) => {
  dispatch(addAdminRequest());
  try {
    let { data } = await axios.post(`${process.env.REACT_APP_API_AI}/admin/add`,admin,{
      headers:{token:localStorage.getItem('token')}
    });
    dispatch(addAdminSuccess(data));
    return data;
  } catch (error) {
    dispatch(addAdminFailure(error));
  }
};

export const deleteAdmin = (id) => async (dispatch) => {
  dispatch(deleteAdminRequest());
  try {
    let { data } = await axios.delete(`${process.env.REACT_APP_API_AI}/admin/delete/${id}`,{
      headers:{token:localStorage.getItem('token')}
    });
    dispatch(deleteAdminSuccess(id));
    return data;
  } catch (error) {
    dispatch(deleteAdminFailure(error));
  }
};

const getAllCategories = async () => {
  let { data } = await axios.get("https://universal-mall-api.onrender.com/products");
  const categories = [];
  data.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });
  return categories;
};

export const getCategories = async (dispatch) => {
  dispatch(getCategoriesRequest());
  const allCategories = await getAllCategories();
  const { data:orders } = await axios.get("https://universal-mall-api.onrender.com/orders");
  let obj = {};
    orders.forEach((order) => {
      if (!obj[order.category]) obj[order.category] = 1;
      else obj[order.category]++;
    });
  dispatch(getCategoriesSuccess([allCategories, obj]));
};

export const getOrders = async (dispatch) => {
  dispatch(getOrdersRequest());
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_AI}/order/allorders`,{
      headers:{token:localStorage.getItem("token")}
    });
    dispatch(getOrdersSuccess(data.data));
  } catch (error) {
    dispatch(getOrdersFailure(error));
  }
};

export const pendingOrder = (orderId) => async (dispatch) => {
  const { data:orders } = await axios.get(`https://universal-mall-api.onrender.com/orders`);
  orders.forEach((order)=>{
    if (order.id === orderId) {
      axios.patch(`https://universal-mall-api.onrender.com/orders/${orderId}`,{status:'Delayed'}).then(()=>dispatch(getOrders));
    }
  });  
};

export const passOrder = (orderId) => async (dispatch) => {
  const { data:orders } = await axios.get(`https://universal-mall-api.onrender.com/orders`);
  orders.forEach((order)=>{
    if (order.id === orderId) {
      axios.patch(`https://universal-mall-api.onrender.com/orders/${orderId}`,{status:'Passed'}).then(()=>dispatch(getOrders));
      // axios.put(`https://universal-mall-api.onrender.com/orders/${orderId}`,updatedOrder).then(()=>dispatch(getOrders));
    }
  });  
};

export const rejectOrder = (orderId) => async (dispatch) => {
  const { data:orders } = await axios.get(`https://universal-mall-api.onrender.com/orders`);
  orders.forEach((order)=>{
    if (order.id === orderId) {
      axios.patch(`https://universal-mall-api.onrender.com/orders/${orderId}`,{status:'Rejected'}).then(()=>dispatch(getOrders));
    }
  });  
};

export const getCarts = async (dispatch) => {
  const { data:carts } = await axios.get("https://universal-mall-api.onrender.com/carts");
  let cartDetails = [];
  carts.forEach((c) => {cartDetails.push(c)});
  dispatch(getCartsSuccess(cartDetails));
};
