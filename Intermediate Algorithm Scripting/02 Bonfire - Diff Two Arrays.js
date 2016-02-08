/*

Bonfire - Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the original arrays.

*/

function diff(arr1, arr2) {
  var newArr = [];

  // Concat the arrays
  var concatArrays = arr1.concat(arr2);

  /*
  Function to filter through the arrays.
  Compare each of the numbers in concatArrays varible to those in the original arrays using indexOf.
  We're checking the number with indexOf to see if returns -1, if it does that mean it doesn't exist in that array as indexOf will return -1 for false and otherwise return the position in the array (or string).
  If -1 is returned then we push it to newArr.
  */

  function diffCheck(number) {

    if(arr1.indexOf(number) == -1 || arr2.indexOf(number) == -1) {
      newArr.push(number);
    }

  }

  // Run the diffCheck function
  concatArrays.filter(diffCheck);

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diff([], ["snuffleupagus", "cookie monster", "elmo"]);
diff([1, "calf", 3, "piglet"], [7, "filly"]);
