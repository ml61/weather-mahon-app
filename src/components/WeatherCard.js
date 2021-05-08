import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFiveDaysForecast, getCityIdFromCityName } from "../actions";
import {
  faCompass,
  faTint,
  faWind,
  faTemperatureHigh,
  faTemperatureLow,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

function WeatherCard() {
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card p-4">
            <div class="d-flex">
              <h6 class="flex-grow-1">London</h6>
              <h6>UK</h6>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center temp mt-5 mb-5">
              <h1 class="mb-2 font-weight-bold" id="heading">
                <FontAwesomeIcon icon={faTemperatureLow} />{" "}
                <span className="mx-3"> 13° C</span>{" "}
              </h1>{" "}
              <h1 class="mb-0 font-weight-bold" id="heading">
                <FontAwesomeIcon icon={faTemperatureHigh} />{" "}
                <span className="mx-3"> 23° C</span>{" "}
              </h1>{" "}
              <span class="small grey mt-1">Stormy</span>
            </div>
            <div class="d-flex">
              <div class="temp-details flex-grow-1">
                <p class="my-1">
                  <FontAwesomeIcon icon={faWind} size="lg" />
                  <span className="mx-1"> 40 km/h </span>
                </p>
                <p class="my-1">
                  <FontAwesomeIcon icon={faCompass} size="lg" />
                  <span className="mx-1"> N-W </span>
                </p>
                <p class="my-1">
                  <FontAwesomeIcon icon={faTint} size="lg" />
                  <span className="mx-1"> 84% </span>
                </p>
              </div>
              <div>
                <img src="https://i.imgur.com/Qw7npIg.png" width="100px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
