// The previous chapter introduced the standard function Math.min that returns
//its smallest argument. We can do that ourselves now. Write a function min that
//takes two arguments and returns their minimum.
//
// // Your code here.
//
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var result = document.getElementById("display");
button.addEventListener("click", min);


function min(){
  if (parseFloat(value1.value,10) < parseFloat(value2.value,10)){
    result.innerHTML = "Your first value is the smaller of the two values and is: "+value1.value;
  }
  else {
    result.innerHTML =  "Your second value is the smaller of the two values and is : "+value2.value;
  }
}
