(function(exports) {
  var allNotes = {}
  allNotes["This is a full note "] = "This is a full note with lots of characters and it is long and stuff."
  allNotes["chicken dippers are "] = "chicken dippers are really fun in the sun and are naked sometimes"
  allNotes["cheese twirls make t"] = "cheese twirls make the world a fun place chicken"

  function displayNote(abbrNote) {
    return allNotes[abbrNote]
  }

  function abbrNote(note) {
    return note.substring(0, 20)
  }


  exports.displayNote = displayNote
  exports.abbrNote = abbrNote
})(notes)
