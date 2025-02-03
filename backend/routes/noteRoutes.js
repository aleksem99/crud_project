const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

router.get('/notes', noteController.getNotes);
router.get('/notes/:id', noteController.getNote);
router.post('/notes', noteController.addNote);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;