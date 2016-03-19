/*

Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {

  // Loop over each letter in the string.
  for(var i = 0; i < str.length; i++) {

    /*
    If the first letter isn't 'a' (unicode 97) then return with undefined.

    Otherwise if the first letter is 'a' when we start, we want to compare the unicode value of our current letter with the next letter.

    If the current letter's unicode value plus 1 is equal to the next letter in the loop then we can continue but if the current letter's value plus 1 doesn't equal the next letter in the loop's value then we know there is a letter missing. In which case we want to return the current letter's value plus 1 to identify the missing letter.
    */
    if(str.charCodeAt(0) !== 97) {

      return undefined;

    } else if(str.charCodeAt([i]) + 1 !== str.charCodeAt([i + 1])) {

      // Store the unicode of the missing letter.
      var charCode = str.charCodeAt([i]) + 1;

      // Return the actual missing letter as a character.
      return String.fromCharCode(charCode);

    } // End if.

  } // End for.

  return str;
}

fearNotLetter("abce");
// Returns 'd'.
fearNotLetter("abcdefghjkl");
// Returns 'i'.
fearNotLetter("bcd");
// Returns 'undefined'.
fearNotLetter("yz");
// Returns 'undefined'.
