/*

Where do I belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

function where(arr, num) {

  /*
  .sort() by itself will sort numbers such as 5,2,11 as 11,2,5 (or 90,6,3 as 3,6,90).
  Passing the sortNumbers function will make sure it returns 2,5,11 - highest to lowest.
  Without sorting the numbers correctly, we could end up with the wrong position in the array.
  */
  function sortNumbers(a,b) {
    return a - b;
  }

  // Put the array in order from highest to lowest.
  var order = arr.sort(sortNumbers);

  // Set the initial index start point.
  var location = 0;

  /*
  Now the order array is sorted from lowest to highest, we can start iterating through it.

  When the array item is lower than 'num' we add 1 to the location variable and continue doing that until the condition is no longer true.

  Using the first example; 30 is more than 10,20,30 - there for each time we loop over these we add 1; at this point our total would be 3. 35 is less than 40 so now our if condition is no longer true so we now return the value stored in location which is 3.
  */
  for(var i = 0; i < order.length; i++) {

    if(arr[i] < num) {
      location = i + 1;
    } else {
      return location;
    }
  } // end for

  // This return will catch instances where our 'num' is higher than any number in the array.
  return location;

}

where([10, 20, 30, 40, 50], 35);
where([10, 20, 30, 40, 50], 30);
where([40, 60,], 50);
where([3, 10, 5], 3);
where([5, 3, 20, 3], 5);
where([2, 20, 10], 19);
where([2, 5, 10], 15);
