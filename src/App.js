import React, { useState, useEffect } from 'react'
import NoteLists from './components/NoteLists'
import { nanoid } from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [noteText, setNoteText] = useState('')
  const [searchText, setSearchText] = useState('')
  const [notes, setNote] = useState([

  ]);

  const dataString = JSON.stringify(notes);


  function addNote() {
    if (noteText.trim().length > 0) {
      const date = new Date().toLocaleDateString()
      setNoteText('')
      const newNote = {
        text: noteText,
        date: date,
        id: nanoid()
      }

      const updatedNotes = [...notes, newNote]
      setNote(updatedNotes)

    }
    else{
      alert("add some text")
    }

  }

  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNote(data);
    }
  }, []);

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);


  function handleNoteText(text) {
    setNoteText(text)
  }

  function handleDeleteNote(id) {
    const updatedNotes = notes.filter(note => note.id != id)
    setNote(updatedNotes)
  }

  function handlesearchText(text) {
    setSearchText(text)
  }

  return (
    <div className={darkMode && "dark-mode"}>
      <div className="container">
      <Header  handleDarkMode={setDarkMode} />
      <Search searchText={searchText} handlesearchText={handlesearchText} />
      <NoteLists handleDeleteNote={handleDeleteNote} addNote={addNote} handleNoteText={handleNoteText} noteText={noteText} notes={notes.filter(note => note.text.includes(searchText))} />
      </div>
    </div>
  )
}

export default App;