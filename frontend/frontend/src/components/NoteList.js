import React from 'react';

const NoteList = ({ notes, deleteNote, setEditingNote }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <div key={note.id} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setEditingNote(note)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;