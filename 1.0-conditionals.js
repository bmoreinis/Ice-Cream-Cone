/* Functions and Conditional Flavors */

// Call the iceCreamScoop function
iceCreamScoop();

// Define a function called iceCreamScoop, no parameters
function iceCreamScoop(){
  // Prompt for a flavor "What flavor scoop?"
  flavor = prompt("What flavor scoop?");
  // if flavor is equal to chocolate or vanilla, open a code block.
  if (flavor == "chocolate" || flavor == "vanilla") {
    // inside the block: "Here is your [flavor] scoop. Enjoy!"
    alert("Here's your " + flavor + " scoop. Enjoy!");
  // close block
  }
  // if strawberry, open a code block.
  else if (flavor == "strawberry") {
    // in block, alert "Sorry, we're all out of strawberry."
    alert("Sorry, we're all out of " + flavor + ".");
    // in block, call iceCreamScoop function again. 
    iceCreamScoop();
  // close else if block
  }
  // if not any of those, open a code block 
  else {
    // in block, "Sorry, we don't carry [flavor]."
    alert("Sorry, we don't carry " + flavor + ".");
    // in block, call iceCreamCone function again.
    iceCreamScoop();
  // close else block
  }
// close function block
}