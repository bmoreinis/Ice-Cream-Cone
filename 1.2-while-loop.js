/* This is for a three-scoops sundae. You'll use a for loop for how many scoops,
 * but for flavors you'll use a while loop with a Boolean "flag" variable.  */

// call the function iceCreamSundae
iceCreamSundae();

// define the function iceCreamSundae
function iceCreamSundae(){
  // start a for loop for scoop, ranging from 1 to 3
  for (var scoop = 0; scoop < 4; scoop++) {
    // call getScoop function, passing scoop as argument
    getScoop(scoop);
  // close loop block
  }
// alert "Enjoy!"
alert ("Enjoy your sundae!");
}

// define the getScoop function with scoop as a parameter
function getScoop(scoop){
	// define inStock as boolean flag, set to false
	var inStock = false;
	// Keep looping while inStock flag is false
	while (inStock == false){
		// Prompt for a flavor by scoop number
		var flavor = prompt("What flavor for scoop "+scoop+"?");
		// Check if flavor is chocolate or vanilla and open a code block
		if (flavor == "chocolate" || flavor == "vanilla"){
			// "Here's your [flavor] scoop"
			alert("Here's your "+flavor+" scoop.");
			// set inStock flag to true because flavor is in stock
			inStock = true;
			// close if block
		}
		// if strawberry, open a code block 
		else if (flavor == "strawberry") {
      // "Sorry, we're all out of [flavor]."
      alert("Sorry, we're all out of "+flavor+".");
      // call getScoop(scoop) again
      getScoop(scoop);
      // close if block
    }
    // otherwise say "Sorry, we don't carry [flavor]."
		else alert("Sorry, we don't carry "+flavor+".");
		// close while block
	}
	// close function block
}