const mongoose = require('mongoose');

const NoteScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model('Note', NoteScheme);

module.exports = { Note };
