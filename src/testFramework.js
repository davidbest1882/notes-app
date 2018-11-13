// function describe(message, func) {
//   document.getElementById("describe").innerHTML = message;
//   func();
// };
//
// function it(message, func) {
//   document.getElementById("it").innerHTML = message;
//   result = func();
// };
//
// function assertEquals(outcome, expected) {
//   if (outcome === expected) {
//     document.getElementById("it").style.color = "green";
//     return true;
//   } else {
//     document.getElementById("it").style.color = "red";
//     return false;
//   }
// };
//
function add(a, b) {
  return a + b;
}
//
// describe('this is a describe test', function() {
//   it('this is an it test', function() {
//     assertEquals(add(5, 4), 9);
//   })
// })

(function(exports) {
  function describe(description, it) {
    var describeDiv = document.createElement("H2")
    var t = document.createTextNode(description)
    describeDiv.appendChild(t);
    document.body.appendChild(describeDiv);
    it();
  }
  function it(description, test) {
    var itDiv = document.createElement("H3")
    var t = document.createTextNode(description)
    itDiv.appendChild(t);
    document.body.appendChild(itDiv);
    test();
  }
  function assertEquals(outcome, expected) {
    var div = document.createElement("P")
    if (outcome === expected) {
      var result = "true";
    } else {
      var result = "false";
    }
    var t = document.createTextNode(result)
    div.appendChild(t);
    document.body.appendChild(div);
  }

  exports.describe = describe
  exports.it = it
  exports.assertEquals = assertEquals

})(this)

describe('this is a describe test', function() {
  it('this is an it test', function() {
    assertEquals(add(5, 4), 9);
  })
})
