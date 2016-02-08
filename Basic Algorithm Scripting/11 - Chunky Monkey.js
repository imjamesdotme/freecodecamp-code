/*

Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument)
and returns them as a multidimensional array.

*/

function chunk(arr, size) {

  // Create a new array & 'i' set to 0 for use in the while loop.
  var newArr = [];
  var i = 0;

  while(i < arr.length) {

    /*
    Push a slice of the original array into the new array.

    'i' would iterate in the while loop like so (using the first example);

    The first instance the slice would be .slice(0, 2)
    Because 'i' is initally 0, then we add it to 'size' equaling 2.

    In the second instance the slice would be .slice(2,4)
    Because 'i' was set to 2 in the first instance, this time we add the 2 and the 'size' equaling 4.

    The while loop will now stop as 'i' is no longer less than the arrays length.
    */

    newArr.push(arr.slice(i, i += size));

  }

  return newArr;

}

chunk(["a", "b", "c", "d"], 2);
chunk([0, 1, 2, 3, 4, 5], 3);
chunk([0, 1, 2, 3, 4, 5], 2);
chunk([0, 1, 2, 3, 4, 5], 4);
