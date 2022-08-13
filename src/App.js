import { useState } from "react";
// import Note from './components/Note'
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

// const Button = (props) => {
//   return (
//     <button onClick={props.click} type={props.type} >{props.text}</button>
//   )
// }

const App = () => {
  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState('')
  const [darkMode, SetDarkMode] = useState(false)

  const addNote = (text) => {
    // event.preventDefault()
    // console.log(text)
    const date = new Date();
    const noteObj = {
      id: notes.length,
      content: text,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    }
    setNotes(notes.concat(noteObj))
  }

  const deleteNote = (id) => {
    console.log('hello')
    // const newNotes = notes.filter(note => note.id !== id)
    // setNotes(newNotes)
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      {/* if darkMode is true then add dark-mode to the div */}
      <div className="container">
        <Header handleToggleDarkMode={SetDarkMode} />
        <Search handleSearchNote={setSearchText} />
        {/* <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNewNote} placeholder="Write here ..."></input>
            <Button text='Add' type="submit" />
          </form> */}
        <NotesList notes={notes.filter(note => note.content.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App;
