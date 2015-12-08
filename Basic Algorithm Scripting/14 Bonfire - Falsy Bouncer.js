/*

Bonfire - Falsy Bouncer

Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

*/

function bouncer(arr) {

// Create an empty array to push the true values into.
  var newArray = [];

// Loop through the array items.
  for(var i = 0; i < arr.length; i++) {

   // If the array item is true push it into the new array.
    if(arr[i]) {
     newArray.push(arr[i]);
    }
 }
  // Return the new array that contains only the true values from the original array.
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
