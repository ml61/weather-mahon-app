import React from "react";

function Error({ err }) {
  return (
    <div>
      <h2>{err?.message}</h2>
    </div>
  );
}

export default Error;
