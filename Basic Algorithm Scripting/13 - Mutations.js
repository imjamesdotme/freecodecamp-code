/*

Mutations

Return true if the string in the first element of the array contains all of the letters of the string in
the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are
present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

*/

function mutation(arr) {

  // Make both array items lower case to there easier to compare.
  // Split items into arrays, so we can iterate through them easier.
  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');

  for(var i = 0; i < second.length; i++) {

    /*
    Here we are using indexOf to check the first array item against the second.

    second.indexOf(h) if the character 'h' exists in both then 0 is returned, otherwise
    if it doesn't -1 is returned. In our first example both are h so this is true and
    the loop continues.
    */

    if(first.indexOf(second[i]) < 0) {
      return false;
    }

  }

  return true;

}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
