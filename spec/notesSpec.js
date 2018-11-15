// describe("Notes", function() {
//
//   describe("displayNote", function() {
//     it("displays a full note", function() {
//       notes.addNote("This is a full note with lots of characters and it is long and stuff.")
//       assertEquals(notes.displayNote("This is a full note "), "This is a full note with lots of characters and it is long and stuff.")
//     });
//
//     it("displays a second full note", function() {
//       notes.addNote("chicken dippers are really fun in the sun and are naked sometimes")
//       assertEquals(notes.displayNote("chicken dippers are "), "chicken dippers are really fun in the sun and are naked sometimes")
//     });
//   });
//
//   describe("abrNote", function() {
//     it("returns an abbreviated note", function() {
//       assertEquals(notes.abbrNote("This is a full note with lots of characters and it is long and stuff."), "This is a full note ")
//     });
//
//     it("returns a second abbreviated note", function() {
//       assertEquals(notes.abbrNote("chicken dippers are really fun in the sun and are naked sometimes"), "chicken dippers are ")
//     });
//
//     it("returns a third abbreviated note", function() {
//       assertEquals(notes.abbrNote("cheese twirls make the world a fun place chicken"), "cheese twirls make t")
//     });
//   });
//
//   describe("addNote", function() {
//     it("adds a note", function() {
//       notes.addNote("Hello world");
//       assertEquals(Object.keys(notes.getAllNotes())[Object.keys(notes.getAllNotes()).length - 1], "Hello world")
//     });
//   });
// });

describe("Test", function() {
  it("runs an expect test", function() {
    expect(true).toEqual(false);
  });
});
