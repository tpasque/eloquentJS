// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
//At each position of the grid there is either a space or a “#” character. The characters
//should form a chess board.
//
// Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a variable size = 8 and change the program
//so that it works for any size, outputting a grid of the given width and height.

var display = document.getElementById("display");
var button = document.addEventListener("click", chess);

function chess(){
  var one = " ";
  var two = "#";
  var line1 = one+two+one+two+one+two+one+two;
  var line2 = two+one+two+one+two+one+two+one+two+one;

  for (var x=1; x <= 8; x++){
      if( x % 2 == 0 ) {
          document.write(line2);
          // document.write("# # # # #");
      }
      else {
              document.write(line1);
              // document.write(" "+"# # # # #");
          }
          document.write('<br>')
      }

}
display.innerHTML = chess()
