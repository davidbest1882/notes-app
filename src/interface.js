var i = 0

document.getElementById("post_it").onclick = function() {
  notes.addNote(document.getElementById("name").value)
  var a = document.createElement("A")
  var t = document.createTextNode(Object.keys(notes.getAllNotes())[i])
  a.setAttribute('href', '#' + (Object.keys(notes.getAllNotes())[i]))
  var b = document.createElement("BR");
  a.appendChild(t);
  document.body.appendChild(a);
  document.body.appendChild(b);
  document.getElementById("name").value = "";
  i ++;
};

makeUrlChangeShowNoteForCurrentPage()

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage)
};

function showNoteForCurrentPage() {
  showNote(getAbbrNoteFromURL(window.location))
}

function getAbbrNoteFromURL(location) {
  return location.hash.split("#")[1];
};

function showNote(abbrNote) {
  abbrNote = abbrNote.replace(/%20/g, ' ')
  document.getElementById('display-note').innerHTML = "Current note: <br>" + notes.displayNote(abbrNote);
};

var input = document.getElementById("name");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("post_it").click();
  }
});
