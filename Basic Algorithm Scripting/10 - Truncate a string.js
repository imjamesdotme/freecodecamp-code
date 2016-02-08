/*

Truncate a string.


Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the num is less than or equal to 3, then the length of the three dots is not added to the string length.

*/

function truncate(str, num) {

  /*
  Check if the string is less than or equals to the number.
  If true, there is no need to alter the string & it can be returned.
  */
  if (str.length <= num) {
    return str;
  } else if (num <= 3) {
    // If the number is less than 3 append the three dots.
    return str.substr(0,num) + "...";
  } else {
    /*
    Else minus 3 from the number so we then start the three dots, three characters before the end.

    In this example 11 characters would be 'A-tisket a-' - so we need to go back a further 3 characters to add the dots
    & our string to add up to 11.
    */

    return str.substr(0,(num - 3)) + "...";
  }

}

truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("Peter Piper picked a peck of pickled peppers", 14);
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncate("A-", 1);
