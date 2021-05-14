import {
  ADD_CITY_TO_MY_CITIES,
  DELETE_CITY_FROM_MY_CITIES,
} from "../actions/types";

export const myCitiesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY_TO_MY_CITIES:
      return [...state, action.payload];
    case DELETE_CITY_FROM_MY_CITIES:
      return state.filter((city) => city.id !== action.payload);
    default:
      return state;
  }
};
