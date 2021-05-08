import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { isDisplayedCityIsInMyCities } from "../helperFunctions";
import {
  ADD_CITY_TO_MY_CITIES,
  DELETE_CITY_FROM_MY_CITIES,
} from "../actions/types";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";

function ButtonsSection({ currentCity, myCities, error, weatherDate }) {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
            : dispatch({
                type: ADD_CITY_TO_MY_CITIES,
                payload: currentCity,
              });
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
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        Add Note
      </Button>
    </div>
  );
}

export default ButtonsSection;
