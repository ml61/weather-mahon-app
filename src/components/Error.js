import React from "react";
import { useSelector } from "react-redux";

function Error({ err }) {
  return (
    <div>
      <h2>{err?.message}</h2>
    </div>
  );
}

export default Error;
