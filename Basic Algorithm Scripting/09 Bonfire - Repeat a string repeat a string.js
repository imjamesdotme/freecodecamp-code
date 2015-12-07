/*

Bonfire - Confirm the Ending

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

*/

function repeat(str, num) {

  // If 'num' is more than 0 then repeat the string for the value in 'num'.
  if(num > 0) {
    str = str.repeat(num);
  }

  return str;

}

repeat("*", 3);
repeat("abc", 3);
repeat("abc", 4);
repeat("abc", 1);
repeat("*", 8);
repeat("abc", -2);
