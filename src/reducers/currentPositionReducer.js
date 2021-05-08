import { SET_CURRENT_POSITION } from "../actions/types";

export const currentPostionReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_POSITION:
      return action.payload;

    default:
      return state;
  }
};
