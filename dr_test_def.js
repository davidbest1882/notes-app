//function dr_describe(message,function()){
//  console.log(message);
//  dr_it()
//}

// function dr_it(message,arg_func){
//   console.log(message);
//   var val = arg_func();
//   val > 0 ? console.log(true):console.log(false);
// }
//
// function add(a,b){
//   return a+b;
// }
//
// dr_it("hello world", function() {
//   add(4, 5)
// });

 // TEST DEF CLASS
function ddescribe(message,word){
  document.getElementById("describe").innerHTML = message;
  word();
}

function itt(message, word) {
  document.getElementById("it").innerHTML = message;
  word();
}

function add(a, b) {
  return a+b;
}
// SPEC CLASS
ddescribe("this describes what we are testing",function(){
  itt("this would be describing what we expect", function() {
  //  console.log(add(4, 5) === 9)

  //document.getElementById("testcon").innerHTML = (add(4,5)===9);
  document.getElementById("testcon").innerHTML = (add(4,5)===9);

  if (add(4,5)===9){
    document.getElementById("testcon").style.color = "green";
  } else {
     document.getElementById("testcon").style.color = "red";
  }
  });
})


// NOTES
