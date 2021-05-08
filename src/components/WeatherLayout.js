import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import WeatherCard from "./WeatherCard";
import Error from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { getFiveDaysForecast, getCityIdFromCityName } from "../actions";

function WeatherLayout({ currentCity }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorObj);

  // useEffect(() => {
  //   dispatch(getFiveDaysForecast(currentCity));
  // }, []);

  if (error) return <Error err={error} />;

  return (
    <div className="d-flex flex-column">
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
  );
}

export default WeatherLayout;
