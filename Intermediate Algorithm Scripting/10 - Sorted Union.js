/*

Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

*/

function uniteUnique(arr1, arr2, arr3) {

  /*
  A functions arguments are an object, not an array - therefore if you want to produce an array of arguments, you cannot use 'join', you need to use slice to convert the object to an array.

  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
  var args = Array.prototype.slice.call(arguments);

  // Use Javascipt's reduce function to concatenate the arguments array.
  var flatten = args.reduce(function(a,b){
    return a.concat(b);
  });

  /*
  Using Javascript's reduce function again to iterate over the 'flatten' arguments array.

  prev (argument) - is the previous array (on the first iteration there is no previous array, so the an empty literal array is passed [] as an argument. On the second iteration, the function will take the 'current' item and check in the 'prev' array to see if it's there - if it's not there then it'll be pushed into the array).

  current (argument) - is the current item in the array.

  Reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  */
  var newArray = flatten.reduce(function(prev, current) {
    if (prev.indexOf(current) < 0) {
        prev.push(current);
    }
    return prev;
  }, []);

  /*
  You can also write the above using a 'for' loop. I originally started out using the 'for' loop before speaking with a developer and researching/discussing using the reduce function.

    var newArray = [];

    for(var i = 0; i < flatten.length; i++) {

      if(newArray.indexOf(flatten[i]) < 0) {
        newArray.push(flatten[i]);
      }

    }
  */

  return newArray;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// Returns [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
// Returns [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1]);
// Returns [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// Returns [1, 2, 3, 5, 4, 6, 7, 8]
