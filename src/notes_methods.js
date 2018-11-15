(function(exports) {
  var allNotes = {}

  function displayNote(abbrNote) {
    return allNotes[abbrNote]
  }

  function abbrNote(note) {
    return note.substring(0, 20)
  }

  function addNote(note) {
    allNotes[abbrNote(note)] = note
  }

  function getAllNotes() {
    return allNotes
  }

  exports.displayNote = displayNote
  exports.abbrNote = abbrNote
  exports.addNote = addNote
  exports.getAllNotes = getAllNotes
})(notes)
