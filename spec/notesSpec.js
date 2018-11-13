describe("Notes", function() {

  describe("displayNote", function() {
    it("displays a full note", function() {
      var note = new Note();
      assertEquals(note.displayNote(title), "This is a full note with lots of characters and it is long and stuff.")
    });
  });
});
