import React from "react";
import { useSelector } from "react-redux";
import NoteCard from "../components/NoteCard";

function MyNotes() {
  const myNotes = useSelector((state) => state.myNotes);

  return (
    <div className="container">
      <h2 className="d-flex justify-content-center mb-4">My notes</h2>
      <div className="row">
        {myNotes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
}

export default MyNotes;
