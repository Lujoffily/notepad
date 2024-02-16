const express = require('express');
const app = express();
const path = require('path');
const { readNotes, addNote, saveNotes } = require('./lib/notepad');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to serve the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Route to serve the notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API route to get existing notes
app.get('/api/notes', (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// API route to save a new note
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  addNote(newNote);
  saveNotes();
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
