import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:5000/api/notes');
    setNotes(response.data);
  };

  const addNote = async (note) => {
    const response = await axios.post('http://localhost:5000/api/notes', note);
    setNotes([...notes, response.data]);
  };

  const updateNote = async (id, updatedNote) => {
    const response = await axios.put(`http://localhost:5000/api/notes/${id}`, updatedNote);
    setNotes(notes.map(note => (note.id === id ? response.data : note)));
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    setNotes(notes.filter(note => note.id !== id));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote} editingNote={editingNote} updateNote={updateNote} />
      <NoteList notes={notes} deleteNote={deleteNote} setEditingNote={setEditingNote} />
      <footer>
              <p>
                Designed by <strong>Aleks Iliev</strong> using React & Node.js & PostgreSQL for <strong>Evolves LTD</strong>.
                <br />
                <a href="https://github.com/aleksem99/crud_project" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </p>
            </footer>
    </div>
  );


};

export default App;