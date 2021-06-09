/* Functions and For Loops */

// Call the iceCreamCone function
iceCreamCone();

// Define a function called iceCreamCone, no parameters
function iceCreamCone(){
// prompt user for number of scoops
var scoops = prompt("How many scoops?");
  // if scoops > 3 make a code block
  if (scoops > 3) {
    //"max three scoops" 
    alert("Max 3 scoops!");
    // make scoops 3 
    scoops = 3;
  // close if block
  }
  // make a for loop to ask for scoops based on number of scoops
  for (var scoop = 1;scoop <= scoops; scoop++){
    // make a variable for ice cream flavor, prompt user for it
    var flavor = prompt("What flavor do you want?");
    // "OK, here's your [flavor]"
    alert("OK, here's your "+flavor+".");
  // close for block
  }
  // " Here's your [scoops] scoop ice cream cone."
  alert("Here's your "+scoop+" scoop ice cream cone.");
// close function
}