/*

Find the Longest Word in a String

Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

*/

function findLongestWord(str) {

  var array = str.split(" ");
  var longest = 0;
  var longestWord = null;

  // For loops runs while i is less than the length of the array.
  for(var i = 0; i < array.length; ++i) {

    // Check if the length of the array item is longer than the value currently stored in the 'longest' variable.
    if(array[i].length > longest) {
      // If the length of the array item is more than currently stored in the variable, write it to the variable.
      // Using length returns the numeric value for the length of the item.
      longest = array[i].length;
      // Store the longest array item as a string.
      longestWord = array[i];
    }

  }
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
