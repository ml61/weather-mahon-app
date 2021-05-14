import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import {
  SET_CURRENT_POSITION,
  DELETE_CITY_FROM_MY_CITIES,
} from "../actions/types";
import { useDispatch } from "react-redux";

function CityCard({ imageUrl, name, country, id }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickCheckWeather = () => {
    dispatch({ type: SET_CURRENT_POSITION, payload: { name, country, id } });
    history.push("/");
  };

  const handleClickDeleteCity = () => {
    dispatch({ type: DELETE_CITY_FROM_MY_CITIES, payload: id });
  };

  return (
    <div className="col-xs-12 col-md-6 col-lg-4 col-xl-3  mb-3">
      <Card style={{ height: "28rem" }}>
        <div className="card__img-container ">
          <Card.Img className="card__img" variant="top" src={imageUrl} />
        </div>
        <Card.Body className="d-flex flex-column">
          <div className="flex-grow-1">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{country}</Card.Text>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickCheckWeather}
          >
            Check Weather
          </Button>
          <Button
            className="mt-3"
            variant="contained"
            color="secondary"
            onClick={handleClickDeleteCity}
          >
            Delete City
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CityCard;
