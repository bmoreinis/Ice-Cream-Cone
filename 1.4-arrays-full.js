/* This is for a three-scoops sundae. You'll use a for loop for how many scoops,
 * but for flavors you'll use a while loop with a Boolean "flag" variable.  */

// create an flavors array of 4 or more ice cream flavors
var flavors = ["chocolate","vanilla","coffee","coconut"];
// create a bins variable for the number of bins needed (1 bin per flavor)
var bins = 4;
// ADVANCED: Set bins automatically
// var bins = flavors.length;
// call the function iceCreamSundae
iceCreamSundae();

// define the function iceCreamSundae
function iceCreamSundae(){
  // start a for loop for scoop, ranging from 1 to 3
  for (var scoop = 1; scoop < 4; scoop++) {
    // call getScoop function, passing scoop as argument
    getScoop(scoop);
  // close loop block
  }
// alert "Enjoy!"
alert ("Enjoy your sundae!");
}

// define function checkStock to see if a flavor is in our flavors array
function checkStock(flavor){
  // for loop to check each flavor by bin
  for (var bin = 0; bin < bins; bin++) {
    // check if flavor matches the flavor in the bin, open a code block
    if (flavor == flavors[bin]) {
      // return true, since there is a match
      return true;
      // close the if block
    }
  // close the for loop block
  }
  // return false, since if we got here there was no match
  return false;
// close the function block
}

// define the getScoop function with scoop as a parameter
function getScoop(scoop){
		// Prompt for a flavor by scoop number
		var flavor = prompt("What flavor for scoop "+scoop+"?");
		//  call checkStock function with flavor, see if true, open code block
		if (checkStock(flavor) == true ) {
      // "Here's your [flavor] scoop"
      alert("Here's your "+flavor+" scoop.");
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
    // open an else code block 
    else {
    // "Sorry, we don't carry [flavor]."
		alert("Sorry, we don't carry "+flavor+".");
		// call getScoop(scoop) again!
    getScoop(scoop);
	}
	// close function block
}