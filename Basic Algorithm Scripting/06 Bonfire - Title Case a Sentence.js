/*

Bonfire - Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {

  // Make all characters lower case & convert the string to and array.
  var tmp = str.toLowerCase().split(" ");

  // Loop through the items in the array.
  for(var i = 0; i < tmp.length; i++) {

    // For each item in the array, get the first character, makig it uppercase & then add the rest of the word.
    tmp[i] = tmp[i].charAt(0).toUpperCase() + tmp[i].substring(1);

  }

  // Join the array back into a string.
  var newStr = tmp.join(" ");

  return newStr;

}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
