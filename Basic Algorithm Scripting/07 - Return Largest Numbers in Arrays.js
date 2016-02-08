/*

Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

*/

function largestOfFour(arr) {

  var newArray = [];
  var highest = 0;

  // Iterate through the array.
  for(var i = 0; i < arr.length; i++) {

    // Iterate through each sub-string in the array.
    for(var j = 0; j < arr[i].length; j++) {

      // Compare each item in the sub-array to see if number is higher than the currently stored highest.
      if(arr[i][j] > highest) {
        // Update the highest variable if the statement is true.
        highest = arr[i][j];
      }

    }
      // Push the highest number from the sub-array into the empty array.
      newArray.push(highest);
      // Reset the variable for the next iteration.
      highest = 0;
  }

  //console.log(newArray);
  return newArray;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
