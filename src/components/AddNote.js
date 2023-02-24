import React from 'react'
import {IoIosSave} from 'react-icons/io'

export default function AddNote({ addNote, noteText, handleNoteText}) {

  return (
    <div className='note new-note'>
        <textarea value={noteText} onChange={(e) => handleNoteText(e.target.value)}  cols="30" rows="10" maxLength={250} placeholder='type something here...'></textarea>
        <div className="note-footer">
        <small className='remaining'>Remaining: {250 - noteText.length}</small>
        <button className='add-btn' onClick={addNote}><IoIosSave/></button>
      </div>
    </div>
  )
}
