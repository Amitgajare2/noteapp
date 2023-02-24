import React from 'react'
import { RiDeleteBin5Fill } from 'react-icons/ri'

function Note({note, handleDeleteNote}) {
  return (
    <div className='note'>
      <span>{note.text}</span>
      <div className="note-footer">
        <small className='date'>{note.date}</small>
        <button className='delete-btn' onClick={() => handleDeleteNote(note.id)}><RiDeleteBin5Fill /></button>
      </div>
    </div>
  )
}

export default Note;