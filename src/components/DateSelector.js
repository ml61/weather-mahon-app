import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_WEATHER_DATE } from "../actions/types";
import { makeFiveDateOptions } from "../helperFunctions";
import DateOption from "./DateOption";

function DateSelector() {
  // const weatherDate = useSelector((state) => state.weatherDate);

  const [date, setDate] = useState(new Date(Date.now()));
  const [fiveDates, setFiveDates] = useState(null);
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: SET_WEATHER_DATE, payload: e.target.value });
  };

  useEffect(() => {
    setFiveDates(makeFiveDateOptions());
  }, []);

  if (!fiveDates) return null;

  return (
    <div className="d-flex mx-3">
      {" "}
      <select
        id="inputState"
        className="form-control"
        value={date}
        onChange={handleDateChange}
      >
        {fiveDates.map((date, index) => (
          <DateOption key={index} date={date} />
        ))}
      </select>
    </div>
  );
}

export default DateSelector;
