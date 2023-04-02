import axios from "axios";
import { POST_FAILURE } from "../ShippingReducer/actiontype";
import {
  DELETE_SUCCESS,
  GET_ADDRESS_SUCCESS,
  PATCH_SUCCESS,
  POST_ADDRESS_SUCCESS,
  POST_REQUEST,
} from "./actiontype";

export const getpostRequest = () => {
  return { type: POST_REQUEST };
};

export const getpostFailure = () => {
  return { type: POST_FAILURE };
};

export const getpostSuccessAddress = (payload) => {
  return { type: POST_ADDRESS_SUCCESS };
};
export const getdataSuccessAddress = (payload) => {
  return { type: GET_ADDRESS_SUCCESS, payload };
};

export const deldatasuccess = () => {
  return { type: DELETE_SUCCESS };
};
export const postRequestAddress = (payload) => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .post(`${process.env.REACT_APP_API_AI}/address/add`, payload)
    .then((res) => {
      console.log("post", res.data);
      dispatch(getpostSuccessAddress(res.data));
    })
    .catch((error) => {
      dispatch(getpostFailure());
    });
};

export const getRequestAddress = () => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .get(`${process.env.REACT_APP_API_AI}/address`)
    .then((res) => {
      console.log("get", res.data);
      dispatch(getdataSuccessAddress(res.data));
    })
    .catch((error) => {
      dispatch(getpostFailure());
    });
};

export const deletedataAdd = (_id) => (dispatch) => {
  dispatch(getpostRequest());
  return axios
    .delete(`${process.env.REACT_APP_API_AI}/address/delete/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(deldatasuccess());
    })
    .catch((err) => {
      dispatch(getpostFailure());
    });
};
