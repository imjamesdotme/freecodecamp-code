/*

Where art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and it's value, that was passed on as the second argument.

*/

function where(collection, source) {

  // Assign a filter to the  'arr' variable so we can store the output of filter (which would be an array).
  // .filter(check) will call the 'check' function iterate over each item in the array.
  var arr = collection.filter(check);

  function check(item) {

    // Iterate over the properties of the 'source' object.
    for(var i in source) {

      // Compare the object value of the item (from collection) to the object value from source, if they don't match return 'false' otherwise it'll return 'true' be added to the array.
      /*
      Example:

      Using the first test;
      where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

      On the first loop:
      item[i] would be "Montague"
      source[i] would be "Capulet"

      This would be false and therefore no pushed into the array (as would the second pass).

      On the third and final loop:
      item[i] would be "Capulet"
      source[i] would be "Capulet"

      This would be true and therefore pushed into the array.

      You can use the console to see this in action (make sure the log's are inside the for loop);
      console.log(i);
      console.log(item[i]);
      console.log(source[i]);

      */
      if(item[i] != source[i]) {
        return false;
      }
    }

    // Return true to end the function.
    return true;
  }

  // Return the newly created array.
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// Returns - [{ first: "Tybalt", last: "Capulet" }]

where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
// Returns - [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
// Returns - [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
// Return - [{ "a": 1, "b": 2, "c": 2 }]
