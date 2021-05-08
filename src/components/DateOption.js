import React from "react";
import { formatDate } from "../helperFunctions";

function DateOption({ date }) {
  return <option value={formatDate(date)}>{formatDate(date)}</option>;
}

export default DateOption;
