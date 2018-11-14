
var notes = function Note() {
  // {"This is a full note w": "This is a full note with lots of characters and it is long and stuff.",
  //   "chicken dippers are ": "chicken dippers are really fun in the sun and are naked sometimes",
  //   "cheese twirls make t": "cheese twirls make the world a fun place chicken"}

  Note.prototype.allNotes = function() {
    return this._allNotes
  }
}

(function(anyObj){
  var notes = [];
  
  function addNote(){
    var note = document.getElementById("name").value;
    if (note === "") {
      document.getElementById("stat_msg").innerHTML = "No message entered";
    } else {
      notes.push(note);
    };
  }
  anyObj.addNote = addNote;
  anyObj.notes = notes;
})(this)

document.getElementById("post_it").onclick = function(){addNote()};
