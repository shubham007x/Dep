import axios from "axios";
import { GET_DATA, LOGIN_SUCCESSFUL } from "./actionType";

const BASE_URL = "";

const createAction = (type, payload) => {
  return { type, payload };
};
export const getTodo = () => {
  return async function (dispatch) {
    const res = await axios.get(BASE_URL);
    console.log(res.data);
    dispatch(createAction(GET_DATA, res.data));
  };
};
export const login = (user) => {
  console.log(user);
  return async function (dispatch) {
    dispatch(createAction(LOGIN_SUCCESSFUL, user));
  };
};
export const postData = (formData, user) => {
  const email = user.email;
  const data = {
    data: formData,
  };
  return async function (dispatch) {
    console.log(`${process.env.REACT_APP_BASE_URL}?email=${email}`);
    try {
      const res = axios.patch(
        `${process.env.REACT_APP_BASE_URL}?email=${email}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("error");
    }
  };
};
