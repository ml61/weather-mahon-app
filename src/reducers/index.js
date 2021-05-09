import { combineReducers } from "redux";
import { currentPostionReducer } from "./currentPositionReducer";
import { weatherDateReducer } from "./weatherDateReducer";
import { isLoading, errorObj } from "./uiReducer";
import { forecastReducer } from "./forecastReducer";
import { myCitiesReducer } from "./myCitiesReducer";
import { notesReducer } from "./notesReducer";

export default combineReducers({
  currentCity: currentPostionReducer,
  weatherDate: weatherDateReducer,
  isLoading,
  errorObj,
  forecast: forecastReducer,
  myCities: myCitiesReducer,
  myNotes: notesReducer,
});
