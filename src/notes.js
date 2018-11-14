(function(exports){
  var notes = [];

  function addNote(note){
      notes.push(note);
      // console.log(notes);
      //return notes
    };
  exports.addNote = addNote;
  exports.notes = notes
})(this);
