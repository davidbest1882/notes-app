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
      addNote("Hello world");
      assertEquals("Hello world", notes[0])
    });

    it("there is no note", function() {
      addNote("Hello world");
      assertNotEquals("Goodbye world", notes[0])
    });
  });
});

//Changes made:
//Removed reference to Note(); in bottom two tests as the error
//stated that Note was not defined.
//

//Issues to be resolved:
//the notes array is containing undefined elements, not strings.
//This is due to the function relying on getting the input from the web
//page, rather than a parameter, but the tests are passing an argument.
//The addNote() function needs to be changed so that it takes a parameter (note)
//and adds this to the array. There can there be a second function which
//states that onclick for the 'post it' button, it calls the addNote method
