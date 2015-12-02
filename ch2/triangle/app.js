// Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######
var display = document.getElementById("display");
button.addEventListener("click", result);

var x = "#";

function result(){
  for (var i=1; i <= 7; i++){
      if( i == 1 ) {
          document.write(x);
      }
      if( i == 2 ) {
          document.write(x+x);
      }
      if( i == 3 ) {
          document.write(x+x+x);
      }
      if( i == 4 ) {
          document.write(x+x+x+x);
      }
      if( i == 5 ) {
          document.write(x+x+x+x+x);
      }
      if( i == 6 ) {
          document.write(x+x+x+x+x+x);
      }
      if( i == 7 ) {
          document.write(x+x+x+x+x+x+x);
      }
      document.write('<br>')
      }

    }
display.innerHTML = result()
