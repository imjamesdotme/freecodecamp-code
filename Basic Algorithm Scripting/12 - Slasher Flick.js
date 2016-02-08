/*

Slasher Flick

Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index.

*/

function slasher(arr, howMany) {

  // Splice the array starting at 0 and ending at the value of 'howMany'.
  arr.splice(0,howMany);

  return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9);
slasher([1, 2, 3], 4);
