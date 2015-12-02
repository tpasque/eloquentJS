// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2
//to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
//
//  Zero is even.
//
//  One is odd.
//
//  For any other number N, its evenness is the same as N - 2.
//
// Define a recursive function isEven corresponding to this description. The function should accept a number parameter
//and return a Boolean.
//
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
var number = document.getElementById("number");
var result = document.getElementById("result");
button.addEventListener("click", isEven);

function isEven(){
  var nums = parseInt(number.value, 10) % 2;
  console.log(nums);
  if (nums == 0){
    result.innerHTML="True.  Your number is an even number.";
  }
  else {
    result.innerHTML="False.  Your number is an odd number.";
  }
  // else {result.innerHTML="that is not an option"}
}
