import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { DELETE_NOTE } from "../actions/types";

function NoteCard({ noteTitle, noteDescription, noteForDate, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  mb-3">
      <Card style={{ height: "18rem" }}>
        <Card.Body className="d-flex flex-column">
          <div className="flex-grow-1">
            <Card.Title>{noteTitle}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              For date: {noteForDate}
            </Card.Subtitle>
            <Card.Text>{noteDescription}</Card.Text>
          </div>

          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Done and Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NoteCard;
