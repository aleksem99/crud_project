const Note = require('../models/Note');

const getNotes = async (req, res) => {
  try {
    const notes = await Note.getAllNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.getNoteById(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.createNote(title, content);
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.updateNote(id, title, content);
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.deleteNote(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
};