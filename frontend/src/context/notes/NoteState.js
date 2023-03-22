import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMTI3NTk4MDkzMWJkMWRhYmFmZDJiIn0sImlhdCI6MTY3Nzc5NzIwOX0.Jo9YGdkIWOn7fdgTKyUWL57Tkle5IZa4q6p6mermiZ8",
      }
    });
    const json = await response.json();
    // console.log(json);
    setnotes(json);
  };

  //Add note
  const addNote = async (money, description, trxntype, tag) => {
    //API call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMTI3NTk4MDkzMWJkMWRhYmFmZDJiIn0sImlhdCI6MTY3Nzc5NzIwOX0.Jo9YGdkIWOn7fdgTKyUWL57Tkle5IZa4q6p6mermiZ8",
      },
      body: JSON.stringify({ money, description, trxntype, tag }),
    });

    const note = await response.json();
    setnotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMTI3NTk4MDkzMWJkMWRhYmFmZDJiIn0sImlhdCI6MTY3Nzc5NzIwOX0.Jo9YGdkIWOn7fdgTKyUWL57Tkle5IZa4q6p6mermiZ8",
      }
    });
    const json = response.json();
    // console.log(json);


    //logic
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
