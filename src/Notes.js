import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Notes() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [info, setInfo] = useState("");


  function addNote() {
    if (text !== "") {
      setNotes([...notes, text]);
      setInfo("Select note to remove from list");
      setText("");
      setInterval(() => {
        setInfo("");
      }, 5000);
    } else {
      toast("Empty note cannot be added");
    }
  }

  function remNote(t) {
    const arr = notes;
    setNotes(arr.filter((res) => res !== t));
    setInfo("");
  }

  return (
    <div id="notecontainer">
      <input
        type="text"
        id="addnote"
        placeholder="Add note"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></input>
      <input type="button" id="addbtn" onClick={addNote} value="Add" />

      {notes.map((noteText) => (
        <div>
          <button
            className="bubbles"
            onClick={(t) => remNote(t.target.value)}
            value={noteText}
          >
            {noteText}
          </button>
        </div>
      ))}

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
      />

      <footer>{info}</footer>
    </div>
  );
}

export default Notes;
