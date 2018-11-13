describe("Notes", function() {

  // describe("displayNote", function() {
  //   it("displays a full note", function() {
  //     var note = new Note();
  //     assertEquals(note.displayNote(title), "This is a full note with lots of characters and it is long and stuff.")
  //   });
  // });

  // Lines below created by DB
  describe("checks that", function() {
    it("a note has been added", function() {
      var note = new Note();
      note.addNote("Hello world");
      assertEquals("Hello world", note.notesArray[0])
    });

    it("there is no note", function() {
      var note = new Note();
      note.addNote("Hello world");
      assertNotEquals("Goodbye world", note.notesArray[0])
    });
  });
});
