/*

Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

*/

function translate(str) {

  // RegEx for vowels.
  var vowels = /[aeiou]/gi;

  /*
  Using indexOf and match with bracket notation to return the index of the first vowel. For example 'eight' would return 0, while 'california' would return 1.
  */
  var firstVowelLocation = str.indexOf(str.match(vowels)[0]);

  if(firstVowelLocation === 0) {
    str += 'way';
  } else if(firstVowelLocation >= 1) {
    str = str.substring(firstVowelLocation) + str.substring(0, firstVowelLocation) + 'ay';
  }

  return str;
  
}

translate("california");
translate("paragraphs");
translate("glove");
translate("algorithm");
translate("eight");
