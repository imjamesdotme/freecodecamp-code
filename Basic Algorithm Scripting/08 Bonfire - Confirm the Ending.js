/*

Bonfire - Confirm the Ending

Check if a string (first argument) ends with the given target string (second argument).

*/

function end(str, target) {

  // Find the length of the string & target.
  var strLength = str.length;
  var targetLength = target.length;

  /*
    If the string is 'Hello world' the length would be 11 and if the target is 'world' the
    length would be 5.

    11 (string) - 5 (target) = 6.

    H-e-l-l-o- -w-o-r-l-d
    0-1-2-3-4-5-6-7-8-9-10

    If we pass the value of 6 to the substring it will show everything after the space after
    'Hello ' which would be 'world'.

    Note: You can also pass substr would parameters such as substr(0,6) - this will output
    from position 0 and stop at the number 6; which in the case above would capture 'Hello'.
  */

  // Minus the target length from the string length to pass the substring for the target.
  var strLast = str.substr((strLength - targetLength));

  // Compare the end of the string to the target.
  if(strLast === target) {
    return true;
  } else {
    return false;
  }

}

end("Bastian", "n");
end("Connor", "n");
end("Walking on water and developing software from a specification are easy if both are frozen", "specification");
end("He has to give me a new name", "name");
end("He has to give me a new name", "me");
end("He has to give me a new name", "na");
