import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SET_WEATHER_DATE } from "../actions/types";
import { getCityIdFromCityName } from "../actions";

import DateOption from "./DateOption";
import { makeFiveDateOptions } from "../helperFunctions";

function Form() {
  const weatherDate = useSelector((state) => state.weatherDate);

  const [city, setCity] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [fiveDates, setFiveDates] = useState(null);
  const dispatch = useDispatch();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(getCityIdFromCityName(city));
    dispatch({ type: SET_WEATHER_DATE, payload: date });
  };

  useEffect(() => {
    setFiveDates(makeFiveDateOptions());
  }, []);

  if (!fiveDates) return null;

  return (
    <form
      className="form-inline d-flex justify-content-center align-items-center"
      onSubmit={handleSubmitForm}
    >
      <div className="d-flex mx-2">
        <label className="mx-2" htmlFor="inputCity">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          value={city}
          onChange={handleCityChange}
          required
        />
      </div>
      <div className="d-flex mx-3">
        {" "}
        <label className="mx-2" htmlFor="inputState">
          Date
        </label>
        <select
          id="inputState"
          className="form-control"
          value={date}
          onChange={handleDateChange}
        >
          {fiveDates.map((date) => (
            <DateOption date={date} />
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
{
  /* <form class="form-inline">
<label class="sr-only" for="inlineFormInputName2">Name</label>
<input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">

<label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
<div class="input-group mb-2 mr-sm-2">
  <div class="input-group-prepend">
    <div class="input-group-text">@</div>
  </div>
  <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
</div>

<div class="form-check mb-2 mr-sm-2">
  <input class="form-check-input" type="checkbox" id="inlineFormCheck">
  <label class="form-check-label" for="inlineFormCheck">
    Remember me
  </label>
</div>

<button type="submit" class="btn btn-primary mb-2">Submit</button>
</form> */
}

export default Form;
