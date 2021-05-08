import { SET_WEATHER_DATE } from "../actions/types";
import { formatDate } from "../helperFunctions";

export const weatherDateReducer = (
  state = formatDate(new Date(Date.now())),
  action
) => {
  switch (action.type) {
    case SET_WEATHER_DATE:
      return action.payload;

    default:
      return state;
  }
};
