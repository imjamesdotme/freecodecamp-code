/*

Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {

  // Get  the smallest number from the array.
  var min = Math.min(arr[0], arr[1]);
  // Get the largest number from the array.
  var max = Math.max(arr[0], arr[1]);
  // Initalize an empty variable for the sum.
  var sum = 0;

  // Loop over all the numbers from the smallest to the largest. Max + 1 so we loop to the number rather than just before it.
  for(var i = min; i < max + 1; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
