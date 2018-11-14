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
      var result = "false --- "+ "expected: " + expected + " but got: " + outcome;
    }

    var t = document.createTextNode(result)
    div.appendChild(t);

    if (result === "true") {
      document.body.appendChild(div).style.color = "green"
    } else {
      document.body.appendChild(div).style.color = "red"
    }
  }

  function assertNotEquals(outcome, expected) {
    var div = document.createElement("P")
    if (outcome != expected) {
      var result = "true";
    } else {
      var result = "false --- "+ "expected: " + expected+ " but got: " + outcome;
    }

    var t = document.createTextNode(result)
    div.appendChild(t);

    if (result === "true") {
      document.body.appendChild(div).style.color = "green"
    } else {
      document.body.appendChild(div).style.color = "red"
    }
  }

  exports.describe = describe
  exports.it = it
  exports.assertEquals = assertEquals
  exports.assertNotEquals = assertNotEquals

})(this)
