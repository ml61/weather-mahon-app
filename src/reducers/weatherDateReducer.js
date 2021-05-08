import { SET_WEATHER_DATE } from "../actions/types";

export const weatherDateReducer = (state = null, action) => {
  switch (action.type) {
    case SET_WEATHER_DATE:
      return action.payload;

    default:
      return state;
  }
};
