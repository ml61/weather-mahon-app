import React from "react";
import { useSelector } from "react-redux";
import CityCard from "../components/CityCard";

function MyCities() {
  const myCities = useSelector((state) => state.myCities);
  return (
    <div className="container">
      <h2 className="d-flex justify-content-center mb-4">My cities</h2>
      <div className="row">
        {myCities.map((city) => (
          <CityCard key={city.id} {...city} />
        ))}
      </div>
    </div>
  );
}

export default MyCities;
