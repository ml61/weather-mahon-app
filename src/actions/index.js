import {
  SET_CURRENT_POSITION,
  START_LOADING,
  SUCCESS_LOADING,
  ERROR_LOADING,
  SET_FORECAST,
} from "./types";
import api from "../config/weatherApi";
import {
  API_KEY,
  cityIdFromCoords,
  cityIdFromCityName,
  forecastFiveDaysPath,
} from "../config/apiPath";

import { parentCity, formatForecastReponse } from "../helperFunctions";

export const getCityIdFromCoords = (latt, long) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const response = await api.get(cityIdFromCoords, {
      params: {
        apikey: API_KEY,
        q: `${latt},${long}`,
      },
    });

    const currentCity = parentCity(response.data);
    dispatch({ type: SET_CURRENT_POSITION, payload: currentCity });
    dispatch({ type: SUCCESS_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err });
  }
};

export const getCityIdFromCityName = (cityName) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const response = await api.get(cityIdFromCityName, {
      params: {
        q: cityName,
        apikey: API_KEY,
      },
    });
    const currentCity = parentCity(response.data);
    dispatch({ type: SET_CURRENT_POSITION, payload: currentCity });
    dispatch({ type: SUCCESS_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err });
  }
};

export const getFiveDaysForecast = ({ id }) => async (dispatch) => {
  console.log(id);
  dispatch({ type: START_LOADING });
  try {
    const response = await api.get(forecastFiveDaysPath + id, {
      params: {
        details: true,
        metric: true,
        apikey: API_KEY,
      },
    });
    const { DailyForecasts: dailyForecasts } = response.data;

    const formattedDailyForecasts = formatForecastReponse(dailyForecasts);
    console.log(formattedDailyForecasts);
    dispatch({
      type: SET_FORECAST,
      payload: formattedDailyForecasts,
    });
    dispatch({ type: SUCCESS_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err });
  }
};