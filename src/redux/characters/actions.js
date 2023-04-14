import axios from "axios";
import { baseURL } from "../base";
import { GET_CHAR, GET_CHAR_LOADING, GET_SINGLE_CHAR } from "./actionTypes";

export const get_char = (params) => async (dispatch) => {
  dispatch({ type: GET_CHAR_LOADING });
  try {
    let res = await axios({
      method: "get",
      baseURL,
      params,
    });
    let payload = res.data.results;
    let pages = res.data.info.pages;
    dispatch({ type: GET_CHAR, payload, pages });
  } catch (error) {
    console.log(error);
  }
};

export const get_single_char = (id) => async (dispatch) => {
  dispatch({ type: GET_CHAR_LOADING });
  try {
    let res = await axios.get(`${baseURL}/${id}`);
    let payload = res.data;
    dispatch({ type: GET_SINGLE_CHAR, payload });
  } catch (error) {
    console.log(error);
  }
};
