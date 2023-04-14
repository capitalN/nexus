import { GET_CHAR, GET_SINGLE_CHAR, GET_CHAR_LOADING } from "./actionTypes";

let initialState = {
  CHAR: [],
  SINGLE_CHAR: {
    image: "",
    name: "",
    status: "",
    species: "",
    type: "",
    origin: { name: "" },
    gender: "",
    location: { name: "" },
  },
  pages: 1,
  loading: true,
};

export const charReducer = (state = initialState, { type, payload, pages }) => {
  switch (type) {
    case GET_CHAR: {
      return {
        ...state,
        CHAR: payload,
        pages,
        loading: false,
      };
    }
    case GET_CHAR_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SINGLE_CHAR: {
      return {
        ...state,
        SINGLE_CHAR: payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
