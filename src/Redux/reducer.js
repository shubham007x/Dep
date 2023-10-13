import React from "react";
import { GET_DATA, LOGIN_SUCCESSFUL } from "./actionType";
const initialState = {
  isAuth: false,
  user: "",
  data: [],
};
const reducer = (state = initialState, { type, payload = [] }) => {
  switch (type) {
    case LOGIN_SUCCESSFUL:
      console.log(payload.email);
      return {
        ...state,
        user: payload,
      };
    case GET_DATA:
      return {
        ...state,
        todo: [...payload],
      };
    default:
      return state;
  }
};

export { reducer };
