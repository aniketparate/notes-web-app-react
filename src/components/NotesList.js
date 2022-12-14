import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notes-list">
            {notes.map(note =>
                <Note key={note.id} id={note.id} content={note.content} date={note.date} time={note.time} handleDeleteNote={handleDeleteNote} />
            )}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
};

export default NotesList;