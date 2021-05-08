import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityIdFromCoords } from "../actions";
import { getFiveDaysForecast } from "../actions";
import { ERROR_LOADING } from "../actions/types";

import Form from "../components/Form";
import WeatherCard from "../components/WeatherCard";
import Loading from "../components/Loading";

import { Button } from "@material-ui/core";

function Home() {
  const currentCity = useSelector((state) => state.currentCity);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

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
    window.navigator.geolocation.getCurrentPosition(getCoords, deniedPostion);
    console.log("build component home");
  }, []);

  useEffect(() => {
    dispatch(getFiveDaysForecast(currentCity));
    console.log("City was changed");
  }, [currentCity]);

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <Form />
      <div className="mt-4 d-flex flex-column">
        <WeatherCard currentCity={currentCity} />

        <div className="mt-4 mb-4 d-flex justify-content-around">
          <Button variant="contained" color="primary">
            {" "}
            Add City
          </Button>
          <Button variant="contained" color="primary">
            {" "}
            Add Note
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
