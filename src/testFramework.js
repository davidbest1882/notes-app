function describe(message, func) {
  document.getElementById("describe").innerHTML = message;
  func();
};

function it(message, func) {
  document.getElementById("it").innerHTML = message;
  result = func();
};

function assertEquals(outcome, expected) {
  if (outcome === expected) {
    document.getElementById("it").style.color = "green";
    return true;
  } else {
    document.getElementById("it").style.color = "red";
    return false;
  }
};

function add(a, b) {
  return a + b;
}

describe('this is a describe test', function() {
  it('this is an it test', function() {
    assertEquals(add(5, 4), 9);
  })
})
