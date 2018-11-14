
  var noteText = ""
    document.getElementById("post_it").onclick = function(){
      // console.log("called")
      noteText = document.getElementById("name").value;
      // console.log(noteText);
      addNote(noteText);
      console.log(notes);
    };
