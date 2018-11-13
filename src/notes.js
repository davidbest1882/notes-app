(function(anyObj){
  // Line below created by DB
  var notes = [];
  function addNote(){
    //console.log("how bizzare")
    //var notes = [];
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
// Lines below created by DB

// Lines above created by DB

//var val =
