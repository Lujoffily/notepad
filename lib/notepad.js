const fs = require('fs');
const path = require('path');

function newNotes(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ noteArray }, null, 2)
  );
  return note;
}

function deleteNotes(id, note) {
  let noteArray = note.filter(el => {
    if (el.id == id) {
      return false
    } else {
      return true
    }
  })

  let index = 0;
  noteArray.forEach(note => {
    note.id = index;
    index += 1;
  });

  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ noteArray }, null, 2)
  );
  return notesArray;
}

module.exports = {
  newNotes,
  deleteNotes
};