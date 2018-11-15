describe("Notes", function() {

  describe("displayNote", function() {
    it("displays a full note", function() {
      notes.addNote("This is a full note with lots of characters and it is long and stuff.")
      expect(notes.displayNote("This is a full note ")).toEqual("This is a full note with lots of characters and it is long and stuff.")
    });

    it("displays a second full note", function() {
      notes.addNote("chicken dippers are really fun in the sun and are naked sometimes")
      expect(notes.displayNote("chicken dippers are ")).toEqual("chicken dippers are really fun in the sun and are naked sometimes")
    });
  });

  describe("abrNote", function() {
    it("returns an abbreviated note", function() {
      expect(notes.abbrNote("This is a full note with lots of characters and it is long and stuff.")).toEqual("This is a full note ")
    });

    it("returns a second abbreviated note", function() {
      expect(notes.abbrNote("chicken dippers are really fun in the sun and are naked sometimes")).toEqual("chicken dippers are ")
    });

    it("returns a third abbreviated note", function() {
      expect(notes.abbrNote("cheese twirls make the world a fun place chicken")).toEqual("cheese twirls make t")
    });
  });

  describe("addNote", function() {
    it("adds a note", function() {
      var notes2 = makeNote()
      notes2.addNote("Hello world");
      expect(Object.keys(notes2.getAllNotes())[0]).toEqual("Hello world")
    });
  });
});
