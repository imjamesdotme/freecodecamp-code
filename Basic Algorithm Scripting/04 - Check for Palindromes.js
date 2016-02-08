/*

Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything
lower case in order to check for palindromes.

*/

function palindrome(str) {

  // Convert to lower case & replace all non-white space chars & _
  var string = str.toLowerCase().replace(/[\W_]/g, '');

  // Split the string into an array so it can be reverse, then turn it back into a string.
  var revString = string.split("").reverse().join("");

  if(string === revString) {
    return true;
  } else {
    return false;
  }

}

palindrome("eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
