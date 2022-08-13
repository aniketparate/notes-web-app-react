import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [newNote, setNewNote] = useState('')
    const characterLimit = 200;

    const handleNewNote = (event) => {
        // console.log(event.target.value)
        if (characterLimit - event.target.value.length >= 0) {
            setNewNote(event.target.value)
        }
    }

    const handleSaveClick = () => {
        handleAddNote(newNote)
        setNewNote('')
    }

    return (
        <div className="note new">
            <textarea value={newNote} rows='8' cols='10' placeholder="type to add a note..." onChange={handleNewNote}></textarea>
            <div className="note-footer">
                <small>{characterLimit - newNote.length} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div >
    )
}

export default AddNote;