describe("Notes", function() {

  describe("displayNote", function() {
    it("displays a full note", function() {
      assertEquals(notes.displayNote("This is a full note "), "This is a full note with lots of characters and it is long and stuff.")
    });

    it("displays a second full note", function() {
      assertEquals(notes.displayNote("chicken dippers are "), "chicken dippers are really fun in the sun and are naked sometimes")
    });
  });

  describe("abrNote", function() {
    it("returns an abbreviated note", function() {
      assertEquals(notes.abbrNote("This is a full note with lots of characters and it is long and stuff."), "This is a full note ")
    });

    it("returns a second abbreviated note", function() {
      assertEquals(notes.abbrNote("chicken dippers are really fun in the sun and are naked sometimes"), "chicken dippers are ")
    });

    it("returns a third abbreviated note", function() {
      assertEquals(notes.abbrNote("cheese twirls make the world a fun place chicken"), "cheese twirls make t")
    });
  });

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
