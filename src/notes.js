var makeNote = function() {
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

  return {
    abbrNote: abbrNote,
    displayNote: displayNote,
    addNote: addNote,
    getAllNotes: getAllNotes
  }
};

var notes = makeNote()
