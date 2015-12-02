// You can get the Nth character, or letter, from a string by writing "string".charAt(N),
//similar to how you get its length with "s".length. The returned value will be a string
//containing only one character (for example, "b"). The first character has position zero,
//which causes the last one to be found at position string.length - 1. In other words, a
//two-character string has length 2, and its characters have positions 0 and 1.
//
// Write a function countBs that takes a string as its only argument and returns a number that
//indicates how many uppercase “B” characters are in the string.
//
// Next, write a function called countChar that behaves like countBs, except it takes a second
//argument that indicates the character that is to be counted (rather than counting only uppercase
//“B” characters). Rewrite countBs to make use of this new function.


//I can console log the right solution, but my string input isn't converting properly right now. 

//Submitting with the console log working, need to readdress with string conversion to an array of elements
button.addEventListener("click", countBs);

array = ["B", "B", "B", "b", "a", "B", "u"];

function countBs(){
  // var word = document.getElementById("string");
  // var array = word.split("")
for (var i = 0; i < array.length; i++) {
  console.log(array[i])
  if (array[i] !== "B"){
    array.splice(i,1);

  }
var arrlen = array.length
var result = (arrlen - 1)
var display = document.getElementById("display")
display.innerHTML = result
  console.log(arrlen)
  console.log(result)
}

}
console.log(array)

console.log(countBs(array));
