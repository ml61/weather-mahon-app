import { SET_FORECAST } from "../actions/types";

export const forecastReducer = (state = null, action) => {
  switch (action.type) {
    case SET_FORECAST:
      return action.payload;
    default:
      return state;
  }
};
