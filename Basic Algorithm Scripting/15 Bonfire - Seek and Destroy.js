/*

Bonfire - Seek and Destory

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

Useful explaination on Javascript Filters - https://www.youtube.com/watch?v=portQskkw_0

*/

function destroyer(arr) {

  // Turn the arguments into an array.
  var args = Array.prototype.slice.call(arguments);

  // Remove the first item from the array (arr).
  args.splice(0,1);

  /*
  Filter goes through each item of the array. Filters create a new array based off the original, they don't overwrite the original.
  In this example we're storing the new array in a variable called 'filtered'.

  Filter's function returns all the numbers into a new array that don't match any of the arguments. Passing the first example through the filter;

  destoyer([1, 2, 3, 1, 2, 3], 2, 3);

  The new array would return [1,1] as they don't match the arguments of 2 or 3.
  */
  var filtered = arr.filter(function(value) {
    // indexOf returns minus -1 when the search doesn't return a match.
    // This add's all items that return -1 (didn't match) to the new array.
    return args.indexOf(value) === -1;
  });

  return filtered;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
