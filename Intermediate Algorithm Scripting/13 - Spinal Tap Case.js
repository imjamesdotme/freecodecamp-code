/*

Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/


function spinalCase(str) {

  var charRegex = /\s+|\_/g;
  var letterRegex = /([a-z])([A-Z])/g;

  /*
  Replace any instance where we find a lowercase letter immediately follwed by an uppercase letter (for example: helloWorld) and replace the instance with a lowercase letter followed by a hypen and then the uppercase letter (we know we'll be requiring these - so helloWorld would become hello-World). We can do this using the 'replace' function's replacement patterns.

  helloWorld - 'oW' would match the regex used in the letterRegex varible. We then assign the following;

  o = $1 (first instance - ([a-z]))
  W = $2 (second instance- ([A-Z]))

  In the function below $1 & $2 are seperated by a hypen but other characters can be used, such as spaces & commas.

  Reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  http://regexr.com/
  */

  str = str.replace(letterRegex, '$1-$2');

  // Finally we'll replace any remaining spaces or underscores with a hypen.

  return str.replace(charRegex, '-').toLowerCase();
}

spinalCase('This_Is_Spinal_Tap');
// Returns "this-is-spinal-tap"
spinalCase("thisIsSpinalTap");
// Returns "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show");
// Returns "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh");
// Returns "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things");
// Returns "all-the-small-things"
