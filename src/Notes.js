import React, { useState } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notes() {
    const [text, setText] = useState('');
    const [notes, setNotes] = useState([]);

    function addNote() {
        if(text!=''){
            setNotes([...notes, text]);
        }
        else{
            toast("Empty note cannot be added");
        }
        
    }

    function remNote(t) {
        const arr = notes
        setNotes(arr.filter(res => res !== t))
    }

    return (
        <div id="notecontainer">
            
            <Scrollbars>
                {notes.map(noteText => <div><button className="bubbles"
                onClick={t => remNote(t.target.value)}
                value={noteText}>{noteText}</button></div>)}
            </Scrollbars>
            <form>
                <input type="text" id="addnote" placeholder="Add note"
                    onChange={e => setText(e.target.value)} required></input>
                <input type="button" id="addbtn" onClick={addNote} value="Add" />
            </form>
            <ToastContainer 
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={true}
            />
        </div>
        
    )
}

export default Notes;