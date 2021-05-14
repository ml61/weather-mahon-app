import {
  SET_CURRENT_POSITION,
  START_LOADING,
  SUCCESS_LOADING,
  ERROR_LOADING,
  SET_FORECAST,
  ADD_NOTE,
  ADD_CITY_TO_MY_CITIES,
} from "./types";
import weatherApi from "../config/weatherApi";
import { placesApiWithoutProxy, placesApiWithProxy } from "../config/placesApi";
import {
  API_KEY,
  cityIdFromCoords,
  cityIdFromCityName,
  forecastFiveDaysPath,
  PLACES_API_KEY,
} from "../config/apiPath";

import { placesRootPath } from "../config/apiPath";

import {
  formatCity,
  formatForecastReponse,
  formatDate,
} from "../helperFunctions";

export const getCityIdFromCoords = (latt, long) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const response = await weatherApi.get(cityIdFromCoords, {
      params: {
        apikey: API_KEY,
        q: `${latt},${long}`,
      },
    });

    const currentCity = formatCity(response.data);
    dispatch({ type: SET_CURRENT_POSITION, payload: currentCity });
    dispatch({ type: SUCCESS_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err });
  }
};

export const getCityIdFromCityName = (cityName) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const response = await weatherApi.get(cityIdFromCityName, {
      params: {
        q: cityName,
        apikey: API_KEY,
      },
    });
    if (response.data.length === 0) {
      console.log("this is from error");
      const err = new Error();
      err.message = `We don't have any results for ${cityName}. Please check input and try again`;
      throw err;
    }
    const currentCity = formatCity(response.data);
    dispatch({ type: SET_CURRENT_POSITION, payload: currentCity });
    dispatch({ type: SUCCESS_LOADING });
  } catch (err) {
    dispatch({ type: ERROR_LOADING, payload: err });
  }
};

export const getFiveDaysForecast =
  ({ id }) =>
  async (dispatch) => {
    dispatch({ type: START_LOADING });
    try {
      const response = await weatherApi.get(forecastFiveDaysPath + id, {
        params: {
          details: true,
          metric: true,
          apikey: API_KEY,
        },
      });
      const { DailyForecasts: dailyForecasts } = response.data;

      const formattedDailyForecasts = formatForecastReponse(dailyForecasts);

      dispatch({
        type: SET_FORECAST,
        payload: formattedDailyForecasts,
      });
      dispatch({ type: SUCCESS_LOADING });
    } catch (err) {
      dispatch({ type: ERROR_LOADING, payload: err });
    }
  };

export const addNote = (noteTitle, noteDescription, noteForDate) => {
  const id = Date.now();
  const whenAdded = formatDate(new Date(id));
  return {
    type: ADD_NOTE,
    payload: { noteTitle, noteDescription, noteForDate, whenAdded, id },
  };
};

export const addCity = (currentCity) => async (dispatch) => {
  try {
    const response = await placesApiWithProxy.get(
      `/findplacefromtext/json?input=${currentCity.name}&key=${PLACES_API_KEY}&inputtype=textquery&fields=name,photos`
    );
    const photoReference =
      response.data.candidates[0].photos[0].photo_reference;

    const imageUrl =
      placesRootPath +
      `/photo?photoreference=${photoReference}&key=${PLACES_API_KEY}&maxwidth=250&maxheight=250`;

    dispatch({
      type: ADD_CITY_TO_MY_CITIES,
      payload: { ...currentCity, imageUrl },
    });
    // console.log(imageUrl);
  } catch (err) {
    console.error(err);
  }
};
