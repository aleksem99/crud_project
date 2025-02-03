const pool = require('../config/db');

const getAllNotes = async () => {
  const { rows } = await pool.query('SELECT * FROM notes');
  return rows;
};

const getNoteById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM notes WHERE id = $1', [id]);
  return rows[0];
};

const createNote = async (title, content) => {
  const { rows } = await pool.query(
    'INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return rows[0];
};

const updateNote = async (id, title, content) => {
  const { rows } = await pool.query(
    'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  );
  return rows[0];
};

const deleteNote = async (id) => {
  await pool.query('DELETE FROM notes WHERE id = $1', [id]);
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};