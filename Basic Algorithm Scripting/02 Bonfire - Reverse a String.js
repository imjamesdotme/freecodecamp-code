/*

Bonfire - Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

*/

function reverseString(str) {
  // Turn the string into an array.
  var array = str.split('');
  // Reserve the array.
  array = array.reverse();
  // Join the array back up to form a string.
  array = array.join("");

  return array;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");
