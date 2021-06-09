/* This is for a three-scoops sundae. You'll use a for loop for how many scoops,
 * but for flavors you'll use a while loop with a Boolean "flag" variable.  */

// create an flavors array of 4 or more ice cream flavors
var flavors = ["chocolate","vanilla","coffee","coconut"];
// create a bins variable for the number of bins needed (1 bin per flavor)
var bins = 4;
// ADVANCED: Set bins automatically
// var bins = flavors.length;
// define a variable flavor, fill with a prompt
var flavor = prompt("What flavor scoop?");
// call the function iceCreamSundae
alert(checkStock(flavor));


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