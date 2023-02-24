import React from 'react'
import Note from './Note'
import AddNote from './AddNote';

function NoteLists({notes, addNote, noteText, handleNoteText, handleDeleteNote}) {
  return (
    <div className='notes-container'>
      <AddNote addNote={addNote} noteText={noteText} handleNoteText={handleNoteText} />
      {notes.map(note => <Note handleDeleteNote={handleDeleteNote} key={note.id} note={note} />)}
    </div>
  )
}

export default NoteLists;