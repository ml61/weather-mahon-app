import {
  START_LOADING,
  SUCCESS_LOADING,
  ERROR_LOADING,
} from "../actions/types";

export const isLoading = (state = null, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case SUCCESS_LOADING:
      return false;
    case ERROR_LOADING:
      return false;

    default:
      return state;
  }
};

export const errorObj = (state = null, action) => {
  switch (action.type) {
    case SUCCESS_LOADING:
      return null;
    case ERROR_LOADING:
      return action.payload;
    default:
      return state;
  }
};

// export const isCurrentCityinMyCities = ()
