// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
//For numbers divisible by 3, print "Fizz" instead of the number,
//and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible
//by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers
//divisible by only one of those).

//create button event listener so results will display on click
button.addEventListener("click", result);

//create getElementById for display of results
var display = document.getElementById("display");

//create loop that will be able to display numbers 1 - 100
//create variables to test modulus boolean for 3, 5, & 3 & 5
//set if statement for looping conditions
//display results on webpage

function result(){
  for (var x=1; x <= 100; x++){
      if( x % 3 == 0 ) {
          document.write("Fizz");
      }
      if( x % 5 == 0 ) {
          document.write("Buzz");
      }else {
          if( x % 3 && x % 5 != 0 ) {
              document.write(x);
          }
      }
      document.write('<br>')
    }
}
display.innerHTML = result()
