import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../actions";

function AddNoteModalForm(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const weatherDate = useSelector((state) => state.weatherDate);

  const dispatch = useDispatch();

  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };
  const handleNoteDescriptionChange = (e) => {
    setNoteDescription(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowSuccessAlert(true);
    dispatch(addNote(noteTitle, noteDescription, weatherDate));
    setTimeout(() => {
      props.onHide();
      setShowSuccessAlert(false);
      setNoteTitle("");
      setNoteDescription("");
    }, 3000);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill the form for adding note
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleFormSubmit}>
        <Modal.Body>
          {showSuccessAlert ? (
            <Alert variant="success">
              Note {noteTitle} was successfully added to note-list.
            </Alert>
          ) : (
            <>
              <div className="mb-2">
                <label className="mx-2" htmlFor="inputCity">
                  Note Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  value={noteTitle}
                  onChange={handleNoteTitleChange}
                  maxlength="20"
                  required
                />
              </div>
              <div class="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={noteDescription}
                  onChange={handleNoteDescriptionChange}
                  maxlength="100"
                ></textarea>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {showSuccessAlert ? null : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}

          <Button className="mx-4" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default AddNoteModalForm;
