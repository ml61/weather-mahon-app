import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { getCityIdFromCityName } from "../actions";

function Form() {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(getCityIdFromCityName(city));
  };

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

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
