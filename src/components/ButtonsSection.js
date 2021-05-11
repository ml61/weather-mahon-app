import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { isDisplayedCityIsInMyCities } from "../helperFunctions";
import { DELETE_CITY_FROM_MY_CITIES } from "../actions/types";
import { addCity } from "../actions/index";
import { useDispatch } from "react-redux";

import AddNoteModalForm from "./AddNoteModalForm";

function ButtonsSection({ currentCity, myCities, error, weatherDate }) {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  if (error) return null;

  return (
    <div className="mt-4 mb-4 d-flex justify-content-around">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          isDisplayedCityIsInMyCities(currentCity, myCities)
            ? dispatch({
                type: DELETE_CITY_FROM_MY_CITIES,
                payload: currentCity,
              })
            : dispatch(addCity(currentCity));
        }}
      >
        {isDisplayedCityIsInMyCities(currentCity, myCities)
          ? "Delete City"
          : "Add City"}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalShow(true)}
      >
        Add Note
      </Button>
      <AddNoteModalForm show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default ButtonsSection;
