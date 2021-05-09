import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityIdFromCoords } from "../actions";
import { getFiveDaysForecast } from "../actions";
import { ERROR_LOADING } from "../actions/types";

import Form from "../components/Form";
import WeatherCard from "../components/WeatherCard";
import Loading from "../components/Loading";

import ButtonsSection from "../components/ButtonsSection";

function Home() {
  const currentCity = useSelector((state) => state.currentCity);
  const isLoading = useSelector((state) => state.isLoading);
  const fiveDaysForecast = useSelector((state) => state.forecast);
  const weatherDate = useSelector((state) => state.weatherDate);
  const error = useSelector((state) => state.errorObj);
  const myCities = useSelector((state) => state.myCities);

  const dispatch = useDispatch();

  const forecastForChosenDate = fiveDaysForecast?.find(
    (data) => data.weatherDate === weatherDate
  );

  const getCoords = (position) => {
    const { latitude: latt, longitude: long } = position.coords;
    dispatch(getCityIdFromCoords(latt, long));
  };

  const deniedPostion = (position) => {
    dispatch({
      type: ERROR_LOADING,
      payload: {
        ...position,
        message: `Geolocation was denied. Please enter a city.`,
      },
    });
  };

  useEffect(() => {
    if (!currentCity)
      window.navigator.geolocation.getCurrentPosition(getCoords, deniedPostion);
  }, []);

  useEffect(() => {
    if (!currentCity) return;
    dispatch(getFiveDaysForecast(currentCity));
  }, [currentCity]);

  return (
    <div className="container">
      <Form />
      <div className="mt-4 d-flex flex-column">
        {isLoading ? (
          <Loading />
        ) : (
          <WeatherCard
            forecastForChosenDate={forecastForChosenDate}
            error={error}
            isLoading={isLoading}
            currentCity={currentCity}
          />
        )}

        <ButtonsSection
          currentCity={currentCity}
          myCities={myCities}
          error={error}
          weatherDate={weatherDate}
        />
      </div>
    </div>
  );
}

export default Home;
