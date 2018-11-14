
// Code below till line 11 commented by SVR
//var notes = function Note() {
//   // {"This is a full note w": "This is a full note with lots of characters and it is long and stuff.",
//   //   "chicken dippers are ": "chicken dippers are really fun in the sun and are naked sometimes",
//   //   "cheese twirls make t": "cheese twirls make the world a fun place chicken"}
//
//   Note.prototype.allNotes = function() {
//     return this._allNotes
//   }
// }

// Module below was created by Dave to addNote to a Notes array
(function(anyObj){
  var notes = [];

  function addNote(){
    var note = document.getElementById("name").value;
    if (note === "") {
      document.getElementById("stat_msg").innerHTML = "No message entered";
    } else {
      notes.push(note);
      // Line below included by SVR - Known issue contents replicated div needs to be reloaded
      displayNotes(notes);
    };
  }

// method added by SVR below for testing accordion
  function displayNotes(text){
      var nNotes = text;
      var di = document.getElementById("display-notes");

      for(var i=0;i<nNotes.length;i++){
        var nodeB = document.createElement("BUTTON");
        nodeB.setAttribute("class","accordion");
        var abbTxt = nNotes[i].slice(0,20);
        var fullTxt =nNotes[i];
        var textnodeB = document.createTextNode(abbTxt);
        nodeB.appendChild(textnodeB);
        di.appendChild(nodeB);
        var nodeD = document.createElement("DIV");
        nodeD.setAttribute("class","panel");
        var nodeP = document.createElement("P")
        var textnodeP = document.createTextNode(fullTxt);
        nodeP.appendChild(textnodeP);
        nodeD.appendChild(nodeP);
        di.appendChild(nodeD);
      };

    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
// SVR method ends *******************************

  anyObj.addNote = addNote;
  anyObj.notes = notes;
  anyObj.displayNotes = displayNotes;
})(this)

// Dave's Module ends here ******************************************
//document.getElementsByTagName("body").onload = function(){displayNotes()};
document.getElementById("post_it").onclick = function(){addNote()};
