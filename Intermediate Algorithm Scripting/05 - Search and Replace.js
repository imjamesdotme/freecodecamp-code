/*

Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog".

*/

function myReplace(str, before, after) {

  // Find out if the first character of 'before' (original word) of the word is uppercase - if so then the first letter of 'after' must also be upper case.
  if(before.charAt(0) == before.charAt(0).toUpperCase()) {
    // Change the first character to uppercase then reattach the rest of the string.
    return after = after.charAt(0).toUpperCase() + after.substring(1);
  }

  // Using the replace method, pass before & after.
  str = str.replace(before, after);

  // Finally return the new string.
  return str;
}

myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
