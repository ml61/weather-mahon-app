import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFiveDaysForecast, getCityIdFromCityName } from "../actions";
import { weatherIconPath } from "../config/apiPath";
import {
  faCompass,
  faCloud,
  faWind,
  faTemperatureHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";

import DateSelector from "./DateSelector";
import Error from "./Error";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";

function WeatherCard({ forecastForChosenDate, error, isLoading, currentCity }) {
  if (!forecastForChosenDate) return <Error err={error} />;

  const {
    cloudCover,
    icon,
    iconPhrase,
    description,
    windDirection,
    windSpeed,
    minTemperature,
    maxTemperature,
  } = forecastForChosenDate;

  if (error) return <Error err={error} />;
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card p-4">
            <div class="d-flex justify-content-between align-items-center">
              <h4>{currentCity.name}</h4>
              <DateSelector />
              <h4>{currentCity.country}</h4>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center temp mt-5 mb-5">
              <h1 class="mb-2 font-weight-bold" id="heading">
                <FontAwesomeIcon icon={faTemperatureLow} />{" "}
                <span className="mx-3"> {minTemperature}° C</span>{" "}
              </h1>{" "}
              <h1 class="mb-0 font-weight-bold" id="heading">
                <FontAwesomeIcon icon={faTemperatureHigh} />{" "}
                <span className="mx-3"> {maxTemperature}° C</span>{" "}
              </h1>{" "}
              <span class="small grey mt-1">{description}</span>
            </div>
            <div class="d-flex">
              <div class="temp-details flex-grow-1">
                <p class="my-1">
                  <FontAwesomeIcon icon={faWind} size="lg" />
                  <span className="mx-1"> {windSpeed} km/h </span>
                </p>
                <p class="my-1">
                  <FontAwesomeIcon icon={faCompass} size="lg" />
                  <span className="mx-1"> {windDirection} </span>
                </p>
                <p class="my-1">
                  <FontAwesomeIcon icon={faCloud} size="lg" />
                  <span className="mx-1"> {cloudCover}% </span>
                </p>
              </div>
              <div>
                <img
                  src={weatherIconPath + icon}
                  alt={iconPhrase}
                  width="100px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
